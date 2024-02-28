import React, { useState } from 'react';

const CategoryPage = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'minuman' },
    { id: 2, name: 'makanan' },
  ]);
  const [showNotification, setShowNotification] = useState(false);

  const handleDelete = (id) => {
    const updatedCategories = categories.filter((cat) => cat.id !== id);
    setCategories(updatedCategories);
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    setShowNotification(true);
  };

  return (
    <div className='category inter-medium'>
      <h1>Category Items</h1>
      <table>
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Category Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id}>
              <td>{cat.id}</td>
              <td>{cat.name}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(cat.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-category-button" onClick={handleAddCategory}>Add Category</button>
      {showNotification && (
        <div className="notification">
          <div className="header">
            <h1>New Category Item</h1>
            <button onClick={() => setShowNotification(false)} className="close-btn">x</button>
          </div>
          <form>
            <label>Category Name:</label>
            <input type="text" />
            <button type="submit" className="add-btn">Add Category</button>
          </form>
          <button onClick={() => setShowNotification(false)} className="close-btn-text">Close</button>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
