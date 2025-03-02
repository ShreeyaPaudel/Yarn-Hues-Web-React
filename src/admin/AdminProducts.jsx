import React, { useEffect, useState } from "react";
import "./AdminProducts.css"; // Add CSS file for styling

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    image: null,
  });
  const [editingProductId, setEditingProductId] = useState(null); // To track which product is being edited

  // Fetch products (Replace with real API call)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = [
          { id: 1, name: "Wool Yarn", price: "$10", stock: 50, description: "Soft wool yarn", image: null },
          { id: 2, name: "Cotton Yarn", price: "$8", stock: 30, description: "Durable cotton yarn", image: null },
          { id: 3, name: "Silk Yarn", price: "$15", stock: 20, description: "Luxury silk yarn", image: null },
        ];
        setProducts(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProduct({ ...newProduct, image: URL.createObjectURL(file) });
    }
  };

  // Add product
  const addProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.description || !newProduct.image) {
      alert("Please fill in all fields and upload an image.");
      return;
    }

    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setShowModal(false);
    setNewProduct({ name: "", price: "", stock: "", description: "", image: null });
  };

  // Edit product
  const editProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.description || !newProduct.image) {
      alert("Please fill in all fields and upload an image.");
      return;
    }

    const updatedProducts = products.map((product) =>
      product.id === editingProductId ? { ...newProduct, id: product.id } : product
    );
    setProducts(updatedProducts);
    setShowModal(false);
    setNewProduct({ name: "", price: "", stock: "", description: "", image: null });
    setEditingProductId(null); // Reset editing state
  };

  // Delete product
  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  // Open modal to edit product
  const openEditModal = (product) => {
    setEditingProductId(product.id);
    setNewProduct(product); // Populate modal with the selected product details
    setShowModal(true);
  };

  return (
    <div className="admin-products">
      <div className="translucent-container">
        <h1>Admin Products</h1>
        <button className="add-btn" onClick={() => setShowModal(true)}>Add Product</button>
  
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.image && <img src={product.image} alt={product.name} className="product-img" />}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>{product.description}</td>
                <td>
                  <button className="edit-btn" onClick={() => openEditModal(product)}>Edit</button>
                  <button className="delete-btn" onClick={() => deleteProduct(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        {/* Modal for Adding/Editing Product */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-btn" onClick={() => setShowModal(false)}>&times;</span>
              <h2>{editingProductId ? "Edit Product" : "Add New Product"}</h2>
              <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleInputChange} required />
              <input type="text" name="price" placeholder="Price" value={newProduct.price} onChange={handleInputChange} required />
              <input type="number" name="stock" placeholder="Stock Quantity" value={newProduct.stock} onChange={handleInputChange} required />
              <textarea name="description" placeholder="Product Description" value={newProduct.description} onChange={handleInputChange} required></textarea>
              <input type="file" accept="image/*" onChange={handleImageUpload} />
              {newProduct.image && <img src={newProduct.image} alt="Preview" className="preview-img" />}
              <button className="save-btn" onClick={editingProductId ? editProduct : addProduct}>
                {editingProductId ? "Save Changes" : "Save Product"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
  
export default AdminProducts;
