import React, { useState } from 'react';

const towns = [
    { name: 'New Brunswick', id: 'new-brunswick' },
    { name: 'Edison', id: 'edison' },
    { name: 'Metuchen', id: 'metuchen' },
];

type Props = {
    onSelect?: (townId: string) => void;
};

const StoreDropdown: React.FC<Props> = ({ onSelect }) => {
    const [selectedTown, setSelectedTown] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedTown(value);
        if (onSelect) onSelect(value);
    };

    return (
        <div>
            <label htmlFor="town-select">Select Town:</label>
            <select
                id="town-select"
                value={selectedTown}
                onChange={handleChange}
                style={{ marginLeft: '8px' }}
            >
                <option value="">--Choose a town--</option>
                {towns.map((town) => (
                    <option key={town.id} value={town.id}>
                        {town.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default StoreDropdown;