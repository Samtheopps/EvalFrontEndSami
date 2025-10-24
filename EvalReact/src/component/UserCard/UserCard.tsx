import type {User} from "../../model/User";
import '../../App.css';
import './UserCard.css';
import { useNavigate } from 'react-router-dom';

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/user/${user.id}`);
  };

  return (
    <div className="user-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img
        src={user.image}
        alt={user.firstName + ' ' + user.lastName}
        className="user-image"
      />

      <div className="user-content">
        <h3 className="user-name">{user.firstName} {user.lastName}</h3>
        <p className="user-email">{user.email}</p>
      </div>
    </div>
  );
};