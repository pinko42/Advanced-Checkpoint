import React from "react";
import "./App.css";
import ProductTable from './components/ProductTable'

const products = [
  { price: 20, name: "tshirt", category: "clothes" },
  { price: 30, name: "jeans", category: "clothes" },
  { price: 300, name: "phone", category: "electronics" },
  { price: 150, name: "smart watch", category: "electronics" },
];
const style = {
  color: 'red',
  fontSize: 20,
  backgroundColor: 'black'
};

function App() {
  return (
    <div className="App">
      <ProductTable style={style} arr={products}/>
    </div>
  );
}

export default App;
