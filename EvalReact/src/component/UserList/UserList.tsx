import { useEffect, useState } from 'react';
import type { User } from '../../model/User';
import { fetchUserData } from '../../data/dataApi';
import { UserCard } from '../UserCard/UserCard';


export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUserData().then(data => {
      setUsers(data.users);
    });
  }, []);

  return (
    <div className="user-list">
      <h1>Liste des Utilisateurs</h1>
      <div className="user-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};