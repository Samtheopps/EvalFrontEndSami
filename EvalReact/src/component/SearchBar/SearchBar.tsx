import './SearchBar.css';

type SearchBarProps = {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    resultCount?: number;
};

export const SearchBar = ({ searchTerm, onSearchChange, resultCount }: SearchBarProps) => {
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="🔍 Rechercher par nom, prénom ou email..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input"
            />
            {searchTerm && resultCount !== undefined && (
                <span className="search-results">
          {resultCount} résultat{resultCount > 1 ? 's' : ''}
        </span>
            )}
        </div>
    );
};