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
  const [itemsInCart, setItemsInCart] = useState([]);

  function addItemInCart(name, price, count) {
    setItemsInCart((prevItems) => {
      if (count === 0) {
        return prevItems.filter((item) => item.selectedDessert !== name);
      } else {
        const existingItem = prevItems.find(
          (item) => item.selectedDessert === name
        );
        if (existingItem) {
          return prevItems.map((item) =>
            item.selectedDessert === name
              ? { ...item, units: count, totalPrice: price * count }
              : item
          );
        } else {
          return [
            ...prevItems,
            { selectedDessert: name, units: count, totalPrice: price * count },
          ];
        }
      }
    });
  }

  function removeItemInCart(name) {
    setItemsInCart((prevItems) =>
      prevItems.filter((item) => item.selectedDessert !== name)
    );
  }

  return (
    <div className="container">
      <DessertItems
        desserts={desserts}
        itemsInCart={itemsInCart}
        addItemInCart={addItemInCart}
      />
      <Cart itemsInCart={itemsInCart} removeItemInCart={removeItemInCart} />
    </div>
  );
}

function DessertItems({ desserts, addItemInCart, itemsInCart }) {
  return (
    <div>
      <h1>Desserts</h1>
      <div className="desserts-grid">
        {desserts.map((dessert) => {
          const isInCart = itemsInCart.some(
            (item) => item.selectedDessert === dessert.name
          );
          return (
            <div
              className={`dessert-item ${isInCart ? "in-cart" : ""}`}
              key={dessert.name}
            >
              <img src={dessert.img} alt={dessert.name} />
              <AddToCartBtn
                name={dessert.name}
                price={dessert.price}
                addItemInCart={addItemInCart}
                itemsInCart={itemsInCart} // Pass itemsInCart to AddToCartBtn
              />
              <div className="dessert-description-content">
                <p className="dessert-name">{dessert.name}</p>
                <p className="dessert-description">{dessert.description}</p>
                <p className="dessert-price">${dessert.price.toFixed(2)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AddToCartBtn({ name, price, addItemInCart, itemsInCart }) {
  const [openButton, setOpenButton] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    // Check if the current item is still in the cart
    const itemInCart = itemsInCart.find(
      (item) => item.selectedDessert === name
    );
    if (!itemInCart) {
      // If the item is removed from the cart, reset the button state
      setOpenButton(false);
      setCount(1);
    }
  }, [itemsInCart, name]);

  function handlePlus() {
    const newCount = count + 1;
    setCount(newCount);
    addItemInCart(name, price, newCount);
  }

  function handleMinus() {
    if (count <= 1) {
      setOpenButton(false);
      addItemInCart(name, price, 0); // Remove from cart if count is 0
    } else {
      const newCount = count - 1;
      setCount(newCount);
      addItemInCart(name, price, newCount);
    }
  }

  function handleClick() {
    setCount(1); // Reset count to 1
    setOpenButton(true);
    addItemInCart(name, price, 1); // Start with a count of 1
  }

  return openButton ? (
    <div className="add-to-cart--btn open">
      <p
        className="minus-item"
        onClick={handleMinus}
        aria-label="Decrease quantity"
      >
        -
      </p>
      {count}
      <p
        className="plus-item"
        onClick={handlePlus}
        aria-label="Increase quantity"
      >
        +
      </p>
    </div>
  ) : (
    <div className="add-to-cart--btn" onClick={handleClick}>
      Add to Cart
    </div>
  );
}

function Cart({ itemsInCart, removeItemInCart }) {
  // Calculate the grand total
  const grandTotal = itemsInCart.reduce(
    (acc, item) => acc + item.totalPrice,
    0
  );

  return (
    <div className="cart">
      <p>Cart</p>
      {itemsInCart.map((item) => (
        <p key={item.selectedDessert}>
          {item.units} x {item.selectedDessert} ${item.totalPrice.toFixed(2)}{" "}
          <span
            className="remove-item"
            onClick={() => removeItemInCart(item.selectedDessert)}
          >
            ❌
          </span>
        </p>
      ))}
      <p className="grand-total">Grand Total: ${grandTotal.toFixed(2)}</p>
    </div>
  );
}

export default App;
