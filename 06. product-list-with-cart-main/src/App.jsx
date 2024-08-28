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

  function addItemToCart(name, quantity) {
    const item = {
      name: name,
      quantity: quantity,
    };

    setItemsInCart((prevItems) => {
      if (quantity === 0) {
        return prevItems.filter((item) => item.name !== name);
      } else {
        const existingItem = prevItems.find((item) => item.name === name);
        if (existingItem) {
          return prevItems.map((item) =>
            item.name === name ? { ...item, quantity: quantity } : item
          );
        } else {
          return [...prevItems, item];
        }
      }
    });
  }

  return (
    <>
      <div className="container">
        <h1>Desserts</h1>
        <div className={`container-inner ${openModal ? "blur" : ""}`}>
          <Desserts addItemToCart={addItemToCart} />
          <Cart handleOpenModal={handleOpenModal} itemsInCart={itemsInCart} />
        </div>
        <Modal openModal={openModal} handleOpenModal={handleOpenModal} />
      </div>
    </>
  );
}

function Desserts({ addItemToCart }) {
  return (
    <>
      <div className="desserts-grid">
        {desserts.map((item) => (
          <div className="dessert-item" key={item.name}>
            <img src={item.img} alt={item.name} />
            <AddToCart name={item.name} addItemToCart={addItemToCart} />
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

function AddToCart({ name, addItemToCart }) {
  const [openButton, setOpenButton] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count === 0) {
      setOpenButton(false);
      setCount(1);
    }
  }, [count]);

  function click() {
    setOpenButton(true);
    addItemToCart(name, count);
  }

  function plus() {
    const newCount = count + 1;
    setCount(newCount);
    addItemToCart(name, newCount);
  }

  function minus() {
    const newCount = count - 1;
    setCount(newCount);
    addItemToCart(name, newCount);
  }

  return (
    <div>
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
    </div>
  );
}

function Cart({ handleOpenModal, itemsInCart }) {
  return (
    <div className="cart">
      <h2 onClick={handleOpenModal}>Cart</h2>
      <div>
        {itemsInCart.map((item) => (
          <div>
            <span>{item.quantity}</span> x <span>{item.name}</span>
          </div>
        ))}
      </div>
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
