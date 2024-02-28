import React, { useState } from 'react';

const ProductPage = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [showEditNotification, setEditShowNotification] = useState(false);
  const [category, setCategory] = useState('Pilih kategori');
  const [file, setFile] = useState(null);
// add
  const handleAddProductClick = () => {
    setShowNotification(true);
  };
  // edit
  const handleEditProductClick = () => {
    setEditShowNotification(true);
  };

  return (
    <div className='product inter-medium'>
      <div className="product-list">
        <h1>Produck Makanan</h1>
        <table>
          <thead>
            <tr>
              <th>S.N.</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>Category Name</th>
              <th>Unit Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><img src="burger.jpg" alt="Burger" /></td>
              <td>Burger</td>
              <td>Burger enak</td>
              <td>Makanan</td>
              <td>123</td>
              <td>
                <button2 onClick={handleEditProductClick} >Edit</button2>
                <button3>Delete</button3>
              </td>
            </tr>
            {/* Add more product rows here */}
          </tbody>
        </table>
        <button className="add-product" onClick={handleAddProductClick}>Add Product</button>
      </div>
      {/* add */}
      {showNotification && (
        <div className="notification1">
          <h2>New Product Items</h2>
          <button onClick={() => setShowNotification(false)} className="close-btn2">x</button>
          <form>
            {/* Form fields for Product Name, Price, Description, Category, and Image */}
            <div className="form-group">
              <label htmlFor="productName">Product Name:</label>
              <input type="text" id="productName" className="input1" />
            </div>
            <div className="form-group">
              <label htmlFor="productPrice">Price:</label>
              <input type="number" id="productPrice" className="input1" />
            </div>
            <div className="form-group">
              <label htmlFor="productDescription">Description:</label>
              <textarea id="productDescription" className="textarea1"></textarea>
            </div>

            {/* Tambahkan input untuk kategori dan file */}
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <select 
                id="category" 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Pilih kategori</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="file">Choose Image:</label>
              <input 
                type="file" 
                id="file" 
                onChange={(e) => setFile(e.target.files[0])} 
              />
            </div>
            
            {/* Add Item button */}
            <button type="submit" className="add-btn1">Add Item</button>
          </form>
          {/* Close button to hide notification */}
          <button1 onClick={() => setShowNotification(false)} className="close-btn1">Close</button1>
        </div>
      )}
      {/* edit */}
      {showEditNotification && (
        <div className="notification1">
          <h2>Edit Product Detail</h2>
          <button onClick={() => setEditShowNotification(false)} className="close-btn2">x</button>
          <form>
            {/* Form fields for Product Name, Price, Description, Category, and Image */}
            <div className="form-group">
              <label htmlFor="productName">Product Name:</label>
              <input type="text" id="productName" className="input1" />
            </div>
            <div className="form-group">
              <label htmlFor="productPrice">Product Description:</label>
              <input type="number" id="productPrice" className="input1" />
            </div>
            <div className="form-group">
              <label htmlFor="productDescription">Unit Price:</label>
              <textarea id="productDescription" className="textarea1"></textarea>
            </div>

            {/* Tambahkan input untuk kategori dan file */}
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <select 
                id="category" 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Pilih kategori</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="file">Choose Image:</label>
              <input 
                type="file" 
                id="file" 
                onChange={(e) => setFile(e.target.files[0])} 
              />
            </div>
            
            {/* Add Item button */}
            <button type="submit" className="add-btn1">Update Item</button>
          </form>
          {/* Close button to hide notification */}
          <button1 onClick={() => setShowNotification(false)} className="close-btn1">Close</button1>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
