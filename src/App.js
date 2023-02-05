import "./App.css";
// import Cards from "./components/cards";
import addCard from "./components/cardlar";
const cardData = [
  {
    id: 1,
    title: "New Desk(Wooden)",
    amount: 450,
    date: new Date(2023, 1, 26),
  },
  {
    id: 2,
    title: "Lamborgini",
    amount: 400000,
    date: new Date(2023, 1, 26),
  },
  {
    id: 3,
    title: "Iphone14",
    amount: 1500,
    date: new Date(2023, 1, 26),
  },
];
function App() {
  return (
    <div className="App">
      <addCard  info ={cardData}  />
    </div>
  );
}

export default App;
