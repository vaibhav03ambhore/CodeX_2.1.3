import React, { useState } from 'react';

const categories = [
  { id: 1, name: 'All' },
  { id: 2, name: 'collectible' },
  { id: 3, name: 'Art' },
  { id: 4, name: 'real_estate' },
];

const FilterCategories = ({ onFilter }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (category) => {
    let newSelectedCategories;
    if (selectedCategories.includes(category.id)) {
      // If the category is already selected, deselect it
      newSelectedCategories = selectedCategories.filter((id) => id !== category.id);
    } else {
      // If the category is not selected, select it
      newSelectedCategories = [...selectedCategories, category.id];
    }
    setSelectedCategories(newSelectedCategories);
    onFilter(category); // Pass the category name instead of the object
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
              onChange={() => handleCheckboxChange(category)}
            />
            <span className="ml-2">{category.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterCategories;
