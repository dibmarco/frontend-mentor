import { useState } from "react";

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
  const [itemsInCart, setItemsInCart] = useState([]);

  function addItemInCart(name, count) {
    setItemsInCart((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.selectedDessert === name
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.selectedDessert === name ? { ...item, units: count } : item
        );
      } else {
        return [...prevItems, { selectedDessert: name, units: count }];
      }
    });
  }

  return (
    <div className="container">
      <DessertItems desserts={desserts} addItemInCart={addItemInCart} />
      <Cart itemsInCart={itemsInCart} />
    </div>
  );
}

function DessertItems({ desserts, addItemInCart }) {
  return (
    <div>
      <h1>Desserts</h1>
      <div className="desserts-grid">
        {desserts.map((dessert) => (
          <div className="dessert-item" key={dessert.name}>
            <img src={dessert.img} alt={dessert.name} />
            <AddToCartBtn name={dessert.name} addItemInCart={addItemInCart} />
            <div className="dessert-description-content">
              <p className="dessert-name">{dessert.name}</p>
              <p className="dessert-description">{dessert.description}</p>
              <p className="dessert-price">${dessert.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AddToCartBtn({ name, addItemInCart }) {
  const [openButton, setOpenButton] = useState(false);
  const [count, setCount] = useState(1);

  function handlePlus() {
    const newCount = count + 1;
    setCount(newCount);
    addItemInCart(name, newCount);
  }

  function handleMinus() {
    if (count <= 1) {
      setCount(1);
      setOpenButton(false);
      addItemInCart(name, 0); // Remove from cart if count is 0
    } else {
      const newCount = count - 1;
      setCount(newCount);
      addItemInCart(name, newCount);
    }
  }

  function handleClick() {
    // console.log(name); // Log the dessert name to the console
    setOpenButton(true);
    addItemInCart(name, count);
  }

  return openButton ? (
    <div className="add-to-cart--btn open">
      <p className="minus-item" onClick={handleMinus}>
        -
      </p>
      {count}
      <p className="plus-item" onClick={handlePlus}>
        +
      </p>
    </div>
  ) : (
    <div className="add-to-cart--btn" onClick={handleClick}>
      Add to Cart
    </div>
  );
}

function Cart({ itemsInCart }) {
  return (
    <div className="cart">
      <p>Cart</p>
      {itemsInCart.map(
        (item, index) =>
          item.units > 0 && (
            <p key={index}>
              {item.units} {item.selectedDessert}
            </p>
          )
      )}
    </div>
  );
}

export default App;
