import { useEffect, useState } from 'react';
import type { User } from '../../model/User';
import { fetchUserData } from '../../data/dataApi';
import { UserCard } from '../UserCard/UserCard';
import './UserList.css';
import { SearchBar } from '../SearchBar/SearchBar';



export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

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

  // Filtrer les utilisateurs en temps réel
  const filteredUsers = users.filter(user => {
    const term = searchTerm.toLowerCase();
    return (
      user.firstName.toLowerCase().includes(term) ||
      user.lastName.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term)
    );
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
          <button onClick={() => window.location.reload()}>
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="user-list">
      <h1>Liste des Utilisateurs</h1>

      <div className="search-container">
          <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              resultCount={filteredUsers.length}
          />
        {searchTerm && (
          <span className="search-results">
            {filteredUsers.length} résultat{filteredUsers.length > 1 ? 's' : ''}
          </span>
        )}
      </div>

      <div className="user-grid">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
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