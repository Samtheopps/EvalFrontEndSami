import { useEffect, useState, useMemo } from 'react';
import type { User } from '../../model/User';
import { fetchUserData } from '../../data/dataApi';
import { UserCard } from '../UserCard/UserCard';
import { SearchBar } from '../SearchBar/SearchBar';
import { SortSelect, type SortOption } from '../SortSelect/SortSelect';
import { Pagination } from '../Pagination/Pagination';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import './UserList.css';

const USERS_PER_PAGE = 10;

export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('none');
  const [currentPage, setCurrentPage] = useState(1);

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

  // ✅ Mémoïse le filtrage
  const filteredUsers = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return users.filter(user =>
      user.firstName.toLowerCase().includes(term) ||
      user.lastName.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term)
    );
  }, [users, searchTerm]);

  // ✅ Mémoïse le tri
  const sortedUsers = useMemo(() => {
    return [...filteredUsers].sort((a, b) => {
      if (sortBy === 'name') return a.lastName.localeCompare(b.lastName);
      if (sortBy === 'age') return a.age - b.age;
      return 0;
    });
  }, [filteredUsers, sortBy]);

  // ✅ Mémoïse la pagination
  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * USERS_PER_PAGE;
    return sortedUsers.slice(startIndex, startIndex + USERS_PER_PAGE);
  }, [sortedUsers, currentPage]);

  const totalPages = Math.ceil(sortedUsers.length / USERS_PER_PAGE);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

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
    <>
      <ThemeToggle />
      <div className="user-list">
        <h1>Liste des Utilisateurs</h1>

      <div className="search-container">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={(value) => {
            setSearchTerm(value);
            setCurrentPage(1);
          }}
          resultCount={filteredUsers.length}
        />
      </div>

      <div className="sort-container">
        <SortSelect
          sortBy={sortBy}
          onSortChange={(value) => {
            setSortBy(value);
            setCurrentPage(1);
          }}
        />
      </div>

      <div className="user-grid">
        {paginatedUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
    </>
  );
};