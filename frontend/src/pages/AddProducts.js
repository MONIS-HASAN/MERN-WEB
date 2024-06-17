import React, { useState } from "react";
import axios from "axios";
import '../App.css';

function ProductForm() {
  const [product, setProduct] = useState({ name: "", description: "", price: "", category: "" });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = ({ target: { name, value } }) => {
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/products", product);
      console.log("Product created:", response.data);
      setProduct({ name: "", description: "", price: "", category: "" });
      setSuccess("Product created successfully!");
      setError(null);
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error("Error response:", error.response.data);
        setError(`Failed to create product. Server responded with: ${error.response.data.message || error.response.data}`);
      } else if (error.request) {
        // Request was made but no response received
        console.error("Error request:", error.request);
        setError("Failed to create product. No response from server.");
      } else {
        // Something else happened in setting up the request
        console.error("Error message:", error.message);
        setError(`Failed to create product. Error: ${error.message}`);
      }
      setSuccess(null);
    }
  };

  return (
    <div className="container" style={{height:"80vh", marginTop:"10rem"}}>
      <h2 className="text-center mt-4 mb-4">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label style={{marginLeft:"20px", fontSize:"20px" }}>Name</label>
          <input 
            style={{borderRadius:"20px", padding:"20px", backgroundColor:"black", color:"#d7942d"}}
            type="text"
            className="form-control"
            name="name"
            value={product.name}
            onChange={handleChange}
            
          />
        </div>
        <div className="mb-3">
          <label style={{marginLeft:"20px", fontSize:"20px" }}>Description</label>
          <input
            style={{borderRadius:"20px", padding:"20px" , backgroundColor:"black", color:"#d7942d"}}
            type="text"
            className="form-control"
            name="description"
            value={product.description}
            onChange={handleChange}
           
          />
        </div>
        <div className="mb-3">
        <label style={{marginLeft:"20px", fontSize:"20px" }}>Price</label>
          <input
            style={{borderRadius:"20px", padding:"20px" , backgroundColor:"black", color:"#d7942d"}}
            type="number"
            className="form-control"
            name="price"
            value={product.price}
            onChange={handleChange}
            
          />
        </div>
        <div className="mb-3">
          <label style={{marginLeft:"20px", fontSize:"20px" }}>Category</label>
          <input
            style={{borderRadius:"20px", padding:"20px" , backgroundColor:"black", color:"#d7942d"}}
            type="text"
            className="form-control"
            name="category"
            value={product.category}
            onChange={handleChange}
            
          />
        </div>
        <div className="text-center">
          <button className="btn btn-success" style={{ width: '200px', borderRadius:"20px",  backgroundColor:"black", color:"#d7942d", border:"none"}} type="submit">Add Product</button>
        </div>
        {success && <div className="alert alert-success mt-3">{success}</div>}
        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </form>
    </div>
  );
}

export default ProductForm;
