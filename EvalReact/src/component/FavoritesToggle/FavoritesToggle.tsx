import './FavoritesToggle.css';

type FavoritesToggleProps = {
  showFavorites: boolean;
  onToggle: () => void;
  favoritesCount: number;
};

export const FavoritesToggle = ({ showFavorites, onToggle, favoritesCount }: FavoritesToggleProps) => {
  return (
    <button
      className={`favorites-toggle ${showFavorites ? 'active' : ''}`}
      onClick={onToggle}
    >
      <span className="star-icon">{showFavorites ? '⭐' : '☆'}</span>
      <span>Favoris</span>
      {favoritesCount > 0 && (
        <span className="favorites-count">{favoritesCount}</span>
      )}
    </button>
  );
};

