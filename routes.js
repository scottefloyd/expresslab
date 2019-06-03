"use strict";

const express = require("express");
const items = express.Router(); 


const cartItems = [
  {
    id: 1,
    product: "Unicorn horn",
    price: 125,
    quantity: 10
  },
  {
    id: 2,
    product: "Bug attractant",
    price: 4.99,
    quantity: 20
  },
  {
    id: 3,
    product: "Leather socks",
    price: 25.99,
    quantity: 5
  }
]; 

  items.get("/cart-items", (req, res) => {
    res.json(cartItems);
    console.log(body);
    
  });

  // accept POST request at URI: /students
  items.post("/cart-items", (req, res) => {
    console.log(body);
    res.json(cartItems);
  });

  // accept PUT request at URI: /students
  items.put("/cart-items/:id", (req, res) => {
  //res.json();
  console.log(req.params.id);
  console.log(body);
  res.json(cartItems);
  });

  // accept DELETE request at URI: /students
  items.delete("/cart-items/:id", (req, res) => {
    console.log(req.params.id);
    
  res.json(cartItems);
  });

  module.exports = items;