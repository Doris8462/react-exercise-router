import React from "react";

class Product extends React.Component {
  state = {
    products: [
      {
        name: "Bicycle",
        id: 1,
        price: 30,
        quantity: 15,
        desc: "Bicycle is Good",
      },
      { name: "TV", id: 2, price: 40, quantity: 16, desc: "TV is Good" },
      {
        name: "Pencil",
        id: 3,
        price: 50,
        quantity: 17,
        desc: "Pencil is Good",
      },
    ],
  };

  render() {
    const id = this.props.match.params.id;
    return (
      <div className="product">
        <h2>Product Detail:</h2>
        <p>Name: {this.state.products[id - 1].name}</p>
        <p>Id: {this.state.products[id - 1].id}</p>
        <p>Price: {this.state.products[id - 1].price}</p>
        <p>Quantity: {this.state.products[id - 1].quantity}</p>
        <p>Desc: {this.state.products[id - 1].desc}</p>
        <p>URL: /products/{this.state.products[id - 1].id}</p>
      </div>
    );
  }
}

export default Product;
