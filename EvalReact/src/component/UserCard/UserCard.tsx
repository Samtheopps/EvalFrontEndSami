import type {User} from "../../model/User";
import '../../App.css';
import './UserCard.css';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../../hooks/useFavorites';

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(user.id);

  const handleClick = () => {
    navigate(`/user/${user.id}`);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(user.id);
  };

  return (
    <div className="user-card" onClick={handleClick}>
      <button
        className={`favorite-btn ${favorite ? 'active' : ''}`}
        onClick={handleFavoriteClick}
        aria-label={favorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
      >
        {favorite ? '⭐' : '☆'}
      </button>

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