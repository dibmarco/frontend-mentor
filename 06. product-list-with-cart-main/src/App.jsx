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
  const [count, setCount] = useState(1);
  const [itemsInCart, setItemsInCart] = useState([]);

  function handleOpenModal() {
    setOpenModal(!openModal);
  }

  function plus() {
    setCount(() => count + 1);
  }

  function minus() {
    setCount(() => count - 1);
  }

  function addItemToCart(name, quantity) {
    const id = crypto.randomUUID();

    const item = {
      id: id,
      name: name,
      quantity: quantity,
    };

    setItemsInCart((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === name);
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, item];
      }
    });
  }

  return (
    <>
      <div className="container">
        <h1>Desserts</h1>
        <div className={`container-inner ${openModal ? "blur" : ""}`}>
          <Desserts
            openModal={openModal}
            count={count}
            setCount={setCount}
            plus={plus}
            minus={minus}
            addItemToCart={addItemToCart}
          />
          <Cart handleOpenModal={handleOpenModal} itemsInCart={itemsInCart} />
        </div>
        <Modal openModal={openModal} handleOpenModal={handleOpenModal} />
      </div>
    </>
  );
}

function Desserts({ count, setCount, plus, minus, addItemToCart }) {
  return (
    <>
      <div className="desserts-grid">
        {desserts.map((item) => (
          <div className="dessert-item" key={item.name}>
            <img src={item.img} alt={item.name} />
            <AddToCart
              name={item.name}
              count={count}
              setCount={setCount}
              plus={plus}
              minus={minus}
              addItemToCart={addItemToCart}
            />
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

function AddToCart({ name, count, setCount, plus, minus, addItemToCart }) {
  const [openButton, setOpenButton] = useState(false);

  useEffect(() => {
    if (count === 0) {
      setOpenButton(false);
      setCount(1);
    }
  }, [count, setCount]);

  return (
    <div
      className="add-to-cart--btn"
      onClick={() => {
        console.log(name);
        setOpenButton(true);
        addItemToCart(name, count);
      }}
    >
      {openButton ? (
        <div className="selections">
          <p onClick={minus}>-</p>
          {count}
          <p onClick={plus}>+</p>
        </div>
      ) : (
        <div>Add to Cart</div>
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
          <p>
            <span>{item.quantity}</span>
            <span>{item.name}</span>
          </p>
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
