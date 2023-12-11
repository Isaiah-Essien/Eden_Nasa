import React, { Component } from "react";
import axios from "axios";
import "../components/ProductForm.css";

class ProductForm extends Component {
  state = {
    title: "",
    price: "",
    file: null,
    details: [],
    errorMessage: "",
  };
  componentDidMount() {
    this.fetchProducts();
  }

  handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    this.setState({ file: selectedFile });
  };

  addProduct = async (e) => {
    e.preventDefault();

    try {
      const { title, price, file } = this.state;

      if (!title || !price || !file) {
        this.setState({ errorMessage: "All fields are required." });
        return;
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("price", price);
      formData.append("image", file);

      await axios.post("http://127.0.0.1:8000/product/create/list/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("ProductForm.js", this.state)

      this.setState({
        errorMessage: "",
        title: "",
        price: "",
        file: null,
      });

      this.fetchProducts();
    } catch (error) {
      console.error("Error while adding a product:", error);
      this.setState({
        errorMessage: "Error adding product. Please try again.",
      });
    }
  };

  fetchProducts = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/product/create/list/");
      this.setState({ details: response.data });
    } catch (error) {
      console.error("Error while fetching products:", error);
    }
  };

  render() {
    const { title, price, file, details, errorMessage } = this.state;

    return (
      <div>
        {/* Product Form */}
        <div className="product-form">
          <form onSubmit={this.addProduct}>
            <div>
              <span>Title:</span>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => this.setState({ title: e.target.value })}
              />
            </div>
            <div>
              <span>Price:</span>
              <input
                type="number"
                id="price"
                name="price"
                value={price}
                onChange={(e) => this.setState({ price: e.target.value })}
              />
            </div>
            <div>
              <span>Image:</span>
              <input
                type="file"
                id="image"
                name="image"
                onChange={this.handleFileChange}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Add Product
            </button>
            {errorMessage && (
              <div className="alert alert-danger mt-3">{errorMessage}</div>
            )}
          </form>
        </div>

        {/* All Registered Products */}
        <div>
          <header>All Registered Products: </header>
          <hr />
          {details.map((output, id) => (
            <div key={id}>
              <div>
                <h3>{output.title}</h3>
                <h4>{output.price}</h4>
                <img src={output.image} alt="product" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductForm;
