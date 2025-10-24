import './SortSelect.css';

export type SortOption = 'none' | 'name' | 'age';

type SortSelectProps = {
    sortBy: SortOption;
    onSortChange: (value: SortOption) => void;
};

export const SortSelect = ({ sortBy, onSortChange }: SortSelectProps) => {
    return (
        <div className="sort-container">
            <label htmlFor="sort-select">Trier par :</label>
            <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value as SortOption)}
                className="sort-select"
            >
                <option value="none">Par défaut</option>
                <option value="name">Nom (A-Z)</option>
                <option value="age">Âge (croissant)</option>
            </select>
        </div>
    );
};