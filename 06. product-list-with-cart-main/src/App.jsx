import { useState, useEffect } from "react";

const desserts = [
  {
    name: "Waffle",
    img: "imgs-desktop/image-waffle-desktop.jpg",
    description: "Waffle with Berries",
    price: 6.5,
  },
  {
    name: "Crème Brûlée",
    img: "imgs-desktop/image-creme-brulee-desktop.jpg",
    description: "Vanilla Bean Crème Brûlée",
    price: 7.0,
  },
  {
    name: "Macaron",
    img: "imgs-desktop/image-macaron-desktop.jpg",
    description: "Macaron Mix of Five",
    price: 8.0,
  },
  {
    name: "Tiramisu",
    img: "imgs-desktop/image-tiramisu-desktop.jpg",
    description: "Classic Tiramisu",
    price: 5.5,
  },
  {
    name: "Baklava",
    img: "imgs-desktop/image-baklava-desktop.jpg",
    description: "Pistachio Baklava",
    price: 4.0,
  },
  {
    name: "Pie",
    img: "imgs-desktop/image-meringue-desktop.jpg",
    description: "Lemon Meringue Pie",
    price: 4.0,
  },
  {
    name: "Cake",
    img: "imgs-desktop/image-cake-desktop.jpg",
    description: "Red Velvet Cake",
    price: 4.5,
  },
  {
    name: "Brownie",
    img: "imgs-desktop/image-brownie-desktop.jpg",
    description: "Salted Caramel Brownie",
    price: 5.5,
  },
  {
    name: "Panna Cotta",
    img: "imgs-desktop/image-panna-cotta-desktop.jpg",
    description: "Vanilla Panna Cotta",
    price: 6.5,
  },
];

function App() {
  return (
    <>
      <h1>Desserts</h1>
      <div className="container">
        <Desserts />
        <Cart />
        <Modal />
      </div>
    </>
  );
}

function Desserts() {
  return (
    <>
      <div className="desserts-grid">
        {desserts.map((item) => (
          <div className="dessert-item" key={item.name}>
            <img src={item.img} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>{item.description}</p>
              <p>{item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Cart() {
  return <div>Cart</div>;
}

function Modal() {
  return <div>Modal</div>;
}

export default App;
