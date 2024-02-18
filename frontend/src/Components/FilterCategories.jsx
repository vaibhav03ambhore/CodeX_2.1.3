import React, { useState } from 'react';

const categories = [
  { id: 1, name: 'Category 1' },
  { id: 2, name: 'Category 2' },
  { id: 3, name: 'Category 3' },
  { id: 4, name: 'Category 4' },
];

const FilterCategories = ({ onFilter }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (categoryId) => {
    const newSelectedCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter((id) => id !== categoryId)
      : [...selectedCategories, categoryId];
    setSelectedCategories(newSelectedCategories);
    onFilter(newSelectedCategories);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Filter by Category</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <label key={category.id} className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-indigo-600"
              checked={selectedCategories.includes(category.id)}
              onChange={() => handleCheckboxChange(category.id)}
            />
            <span className="ml-2">{category.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterCategories;
