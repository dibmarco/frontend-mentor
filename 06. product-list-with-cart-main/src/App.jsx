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
  const [openModal, setOpenModal] = useState(false);
  const [itemsInCart, setItemsInCart] = useState([]);

  function handleOpenModal() {
    setOpenModal(!openModal);
  }

  function addItemToCart(name, quantity, price) {
    const item = {
      name: name,
      quantity: quantity,
      price: price,
    };

    setItemsInCart((prevItems) => {
      if (quantity === 0) {
        return prevItems.filter((item) => item.name !== name);
      } else {
        const existingItem = prevItems.find((item) => item.name === name);
        if (existingItem) {
          return prevItems.map((item) =>
            item.name === name
              ? { ...item, quantity: quantity, price: quantity * price }
              : item
          );
        } else {
          return [...prevItems, item];
        }
      }
    });
  }

  function removeItemFromCart(name) {
    setItemsInCart((prevItems) =>
      prevItems.filter((item) => item.name !== name)
    );
  }

  return (
    <>
      <div className="container">
        {/* <h1>Desserts</h1> */}
        <div className={`container-inner ${openModal ? "blur" : ""}`}>
          <Desserts itemsInCart={itemsInCart} addItemToCart={addItemToCart} />
          <Cart
            itemsInCart={itemsInCart}
            handleOpenModal={handleOpenModal}
            removeItemFromCart={removeItemFromCart}
          />
        </div>
        <Modal openModal={openModal} handleOpenModal={handleOpenModal} />
      </div>
    </>
  );
}

function Desserts({ itemsInCart, addItemToCart }) {
  return (
    <>
      <div className="desserts-grid">
        <h1 className="title">Desserts</h1>
        {desserts.map((item) => {
          const isInCart = itemsInCart.some(
            (itemInCart) => itemInCart.name === item.name
          );
          return (
            <div className="dessert-item" key={item.name}>
              <img
                src={item.img}
                alt={item.name}
                className={`dessert-image ${isInCart ? "in-cart" : ""}`}
              />
              <AddToCart
                itemsInCart={itemsInCart}
                name={item.name}
                price={item.price}
                addItemToCart={addItemToCart}
              />
              <div>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>${item.price.toFixed(2)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

function AddToCart({ itemsInCart, name, price, addItemToCart }) {
  const [openButton, setOpenButton] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const itemInCart = itemsInCart.find((item) => item.name === name);

    if (!itemInCart) {
      setOpenButton(false);
      setCount(1);
    }
  }, [itemsInCart, name]);

  useEffect(() => {
    if (count === 0) {
      setOpenButton(false);
      setCount(1);
    }
  }, [count]);

  function click() {
    setOpenButton(true);
    addItemToCart(name, count, price);
  }

  function plus() {
    const newCount = count + 1;
    setCount(newCount);
    addItemToCart(name, newCount, price);
  }

  function minus() {
    const newCount = count - 1;
    setCount(newCount);
    addItemToCart(name, newCount, price);
  }

  return (
    <>
      {openButton ? (
        <div className="add-to-cart--btn selections">
          <p onClick={minus}>-</p>
          {count}
          <p onClick={plus}>+</p>
        </div>
      ) : (
        <div className="add-to-cart--btn" onClick={click}>
          Add to Cart
        </div>
      )}
    </>
  );
}

function Cart({ handleOpenModal, itemsInCart, removeItemFromCart }) {
  const totalItemsInCart = itemsInCart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const grandTotal = itemsInCart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2 onClick={handleOpenModal}>Cart ({totalItemsInCart})</h2>
      <div>
        {itemsInCart.map((item) => (
          <div>
            <span>{item.quantity}</span> x <span>{item.name}</span>{" "}
            <span>${item.price.toFixed(2)}</span>{" "}
            <span
              className="remove-item"
              onClick={() => removeItemFromCart(item.name)}
            >
              &times;
            </span>
          </div>
        ))}
      </div>
      <div className="grand-total">Grand Total: ${grandTotal.toFixed(2)}</div>
    </div>
  );
}

function Modal({ openModal, handleOpenModal }) {
  return (
    <div className={`modal ${openModal ? "" : "hidden"}`}>
      <p onClick={handleOpenModal}>Modal</p>
    </div>
  );
}

export default App;
