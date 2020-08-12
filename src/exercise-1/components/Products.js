import React from "react";
import { Link, Route } from "react-router-dom";
import Product from "../components/Product";
import "../styles/products.css";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          name: "Bicycle",
          id: 1,
        },
        { name: "TV", id: 2 },
        {
          name: "Pencil",
          id: 3,
        },
      ],
    };
  }
  render() {
    return (
      <div className="products">
        <h2>All Products:</h2>
        <ul>
          {this.state.products.map((item) => (
            <li key={item.id}>
              <Link to={`/products/${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <Route path="/products/:id" component={Product} />
      </div>
    );
  }
}

export default Products;
