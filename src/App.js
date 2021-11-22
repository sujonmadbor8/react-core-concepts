import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const nayoks = ["Razzak", "sujon", "Jasim", "Alomgir", "Salman"];
  const friends = [
    { name: "Sujon Madbor", age: 22, city: "Dhaka" },
    { name: "Shohag Ahmed", age: 24, city: "sylhet" },
    { name: "Abdur Rahman Rakib", age: 22, city: "Dhaka" },
    { name: "Boro vai", age: 30, city: "sylhet" },
    { name: "Choto vai", age: 18, city: "sylhet" },
  ];
  const products = [
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$60.99" },
    { name: "PDF", price: "$6.99" },
    { name: "primium", price: "$400.99" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Photo></Photo>
        {/* <Photos></Photos> */}
        {/* <Users></Users>
        <Counter></Counter>
        <Example></Example>
        {/* {products.map((product) => (
          <Product product={product}></Product>
        ))} */}
        {/* {friends.map((friend) => (
          <Friend friend={friend}></Friend>
        ))}{" "}
        */}
      </header>
    </div>
  );
}
const Photo = () => {
  const [photos, setPhoto] = useState(0);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setPhoto(data));
  }, []);
  console.log(photos);
  const photoStyle = {
    height: "100px",
    width: "100px",
    margin: "10px",
    borderRadius: "10px",
  };

  return (
    <div>
      {photos.map((photo) => (
        <img style={photoStyle} src={photo.url} />
      ))}
    </div>
  );
};

const Users = () => {
  const [users, setUsers] = useState(10);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {users.map((user) => (
          <li>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(1);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div
      style={{
        border: "1px solid yellow",
        borderRadius: "5px",
        backgroundColor: "orange",
        padding: "5px",
      }}
    >
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

function Product(props) {
  const productStyle = {
    border: "1px solid grey",
    borderRadius: "10px",
    backgroundColor: "violet",
    height: "200px",
    width: "200px",
    float: "left",
    margin: "5px",
  };
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  );
}

function Friend(props) {
  const { name, age, city } = props.friend;
  return (
    <div
      style={{
        color: "white",
        backgroundColor: "red",
        borderRadius: "20px",
        height: "200px",
        width: "250px",
        padding: "30px",
        margin: "10px",
        textAlign: "left",
      }}
    >
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>City: {city}</h3>
    </div>
  );
}
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;
