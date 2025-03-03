import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./AdminProducts.css"; // Add CSS file for styling
import gallery11 from "../assets/EarwarmerGrey.jpg";
import gallery1 from "../assets/earwarmerpurple.jpg";
import gallery2 from "../assets/Poncho.jpg";
import gallery3 from "../assets/hat.jpeg";
import gallery4 from "../assets/BabyHeadband.jpg";
import gallery5 from "../assets/muffler.jpg";
import gallery6 from "../assets/redwhitehat.jpg";
import gallery7 from "../assets/socks.jpg";
import gallery8 from "../assets/redhat.jpg";
import gallery9 from "../assets/ErawarmerRed.jpg";

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
  const navigate = useNavigate(); // Initialize navigation

  // Fetch products (Replace with real API call)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = [
          { id: 1, name: "Knitted Earwarmer", price: "Rs.400", stock: 13, description: "Beautifully handcrafted Knitted Earwarmer perfect and comfortable for you.", image: gallery9 },
          { id: 2, name: "Crochet Earwarmer", price: "Rs.400", stock: 15, description: "eautifully handcrafted Crochet Earwarmer perfect and comfortable for you.", image: gallery1 },
          { id: 3, name: "Poncho", price: "Rs.3000", stock: 3, description: "Beautifully handcrafted Poncho perfect and comfortable for you.", image: gallery2 },
          { id: 4, name: "Tight-Fitting Topi", price: "Rs.850", stock: 20, description: "Beautifully handcrafted Tight-Fitting Topi perfect and comfortable for you.", image: gallery3 },
          { id: 5, name: "Baby Headband", price: "Rs.500", stock: 10, description: "Beautifully handcrafted Baby Headband perfect and comfortable for you.", image: gallery4 },
          { id: 6, name: "Muffler (Knitted/Crochet)", price: "Rs.2000", stock: 6, description: "Beautifully handcrafted Muffler (Knitted/Crochet) perfect and comfortable for you.", image: gallery5 },
          { id: 7, name: "Soft Yarn Topi", price: "Rs.1500", stock: 8, description: "Beautifully handcrafted Soft Yarn Topi perfect and comfortable for you.", image: gallery6 },
          { id: 8, name: "Loose-Fitting Topi", price: "Rs.950", stock: 2, description: "Beautifully handcrafted Loose-Fitting Topi perfect and comfortable for you.", image: gallery8 },
          { id: 9, name: "Thick Yarn Earwarmer", price: "Rs.400", stock: 15, description: "Beautifully handcrafted Crochet Earwarmer perfect and comfortable for you.", image: gallery11 },
         
      
          
          
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

        {/* Back Button */}
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
 
 <button className="back-btn" onClick={() => navigate('/admindashboard')}>⬅ Back to Dashboard</button>

      </div>
    </div>
  );
}
  
export default AdminProducts;
