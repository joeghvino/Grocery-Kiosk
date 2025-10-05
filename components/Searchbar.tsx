import React, { useState } from 'react';

const store = [
    { name: 'New Brunswick', id: 'new-brunswick' },
    { name: 'Edison', id: 'edison' },
    { name: 'Metuchen', id: 'metuchen' },
];

type Props = {
    onSelect?: (storeId: string) => void;
};
    
const StoreDropdown: React.FC<Props> = ({ onSelect }) => {
    const [selectedStore, setSelectedStore] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedStore(value);
        if (onSelect) onSelect(value);
    };

    return (
        <div>
            <label htmlFor="store-select">Select Store:</label>
            <select
                id="store-select"
                value={selectedStore}
                onChange={handleChange}
                style={{ marginLeft: '8px' }}
            >
                <option value="">--Choose a store--</option>
                {store.map((store) => (
                    <option key={store.id} value={store.id}>
                        {store.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default StoreDropdown;