import { useEffect, useState } from 'react';
import type { User } from '../../model/User';
import { fetchUserData } from '../../data/dataApi';
import { UserCard } from '../UserCard/UserCard';
import { SearchBar } from '../SearchBar/SearchBar';
import { SortSelect, type SortOption } from '../SortSelect/SortSelect';
import './UserList.css';

export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('none');

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        const data = await fetchUserData();
        setUsers(data.users);
      } catch (err) {
        setError('Erreur lors du chargement des utilisateurs');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const filteredUsers = users.filter(user => {
    const term = searchTerm.toLowerCase();
    return (
      user.firstName.toLowerCase().includes(term) ||
      user.lastName.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term)
    );
  });

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortBy === 'name') return a.lastName.localeCompare(b.lastName);
    if (sortBy === 'age') return a.age - b.age;
    return 0;
  });

  if (loading) {
    return (
      <div className="user-list">
        <div className="loading">
          <div className="spinner"></div>
          <p>Chargement des utilisateurs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="user-list">
        <div className="error">
          <span className="error-icon">⚠️</span>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Réessayer</button>
        </div>
      </div>
    );
  }

  return (
    <div className="user-list">
      <h1>Liste des Utilisateurs</h1>

      <div className="controls">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          resultCount={filteredUsers.length}
        />
        <SortSelect sortBy={sortBy} onSortChange={setSortBy} />
      </div>

      <div className="user-grid">
        {sortedUsers.length > 0 ? (
          sortedUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))
        ) : (
          <div className="no-results">
            <span>🔍</span>
            <p>Aucun utilisateur trouvé</p>
          </div>
        )}
      </div>
    </div>
  );
};