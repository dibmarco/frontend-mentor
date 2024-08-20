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
    <div>
      {desserts.map((dessert) => (
        <div>
          <img src={dessert.img} alt={dessert.name} width="150" />
          <p>{dessert.name}</p>
          <p>{dessert.description}</p>
          <p>{dessert.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
