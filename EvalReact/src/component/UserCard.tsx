import type {User} from "../model/Users";

import '../App.css';
import './UserCard.css';

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="user-card">
      <img
        src={user.image}
        alt={user.firstName + ' ' + user.lastName}
        className="user-image"
      />

      <div className="user-content">
        <h3 className="user-name">{user.firstName} {user.lastName}</h3>
        <p className="user-email">{user.email}</p>
        <p className="user-phone">{user.phone}</p>
        <p className="user-username">Username: {user.username}</p>
      </div>
    </div>
  );
};