import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const nayoks = ["Anwar", "Jafor", "Alomgir", "Salman Shah"];
  const products = [
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$60.99" },
    { name: "PDF Reader", price: "$6.99" },
    { name: "Premium version", price: "$669.99" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {nayoks.map((nayok) => (
            <li>{nayok}</li>
          ))}
          {products.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
        {products.map((pd) => (
          <Product product={pd}></Product>
        ))}
      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrese</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    boder: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
  };
  console.log(props);
  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h3>Dynamic Users: {users.name}</h3>
      <ul>
        {users.map((user) => (
          <li>{user.phone}</li>
        ))}
      </ul>
    </div>
  );
}

function Person(props) {
  return (
    <div style={{ border: "2px solid gold", width: "400px", margin: "20px" }}>
      <h3>My Name: {props.name}</h3>
      <h4>My Profession: {props.job}</h4>
    </div>
  );
}
export default App;
