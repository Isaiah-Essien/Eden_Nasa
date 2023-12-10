import React, { useState } from "react";
import axios from "axios";
import "../components/ProductForm.css";

const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const ProductsList = async () => {
    try {
      // Check if required fields are filled
      if (!title || !price || !file) {
        setErrorMessage("All fields are required.");
        return;
      }

      let formfield = new FormData();
      formfield.append("title", title);
      formfield.append("price", price);
      formfield.append("image", file);

      // Obtain CSRF token from a cookie
      const csrfToken = document.cookie
        .split(";")
        .find((cookie) => cookie.trim().startsWith("csrftoken="))
        .split("=")[1];

      // Append CSRF token to the form data
      formfield.append("csrfmiddlewaretoken", csrfToken);

      const response = await axios.post(
        "http://127.0.0.1:8000/product/create&list/",
        formfield,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      // Set success message and clear form fields
      setSuccessMessage("Your product has been added successfully");
      setTitle("");
      setPrice("");
      setFile(null);

      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      console.error("Error while creating a product:", error);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div className="product-form">
      <form>
        {/* Existing form fields */}
        <div>
          <span>Title:</span>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <span>Price:</span>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <span>Image:</span>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
          />
        </div>
        <button className="btn btn-success" onClick={ProductsList}>
          Add Product
        </button>
        {successMessage && (
          <div className="alert alert-success mt-3">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="alert alert-danger mt-3">{errorMessage}</div>
        )}
      </form>
    </div>
  );
};

export default ProductForm;
