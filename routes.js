"use strict";
const express = require("express");
const items = express.Router();
const pool = require("./pg-connection-pool");

function selectAll(res) {
  pool
    .query("select * from ShoppingCart order by id")
    .then(result => res.json(result.rows));
}

items.get("/cart-items", (req, res) => {
  selectAll(res);
});

items.post("/cart-items", (req, res) => {
  pool
    .query("insert into ShoppingCart(product, price, quantity) values ($1::text, $2::real, $3::int)", [
      req.body.product,
      req.body.price,
      req.body.quantity
    ]).then(() => {
      selectAll(res);
    });
});

items.put("/cart-items/:id", (req, res) => {
  pool 
    .query("update ShoppingCart set product=$1::text, price=$2::real, quantity=$3::int where id=$4::int", [
      req.body.product,
      req.body.price,
      req.body.quantity, 
      Number(req.params.id)
    ]).then(() => {
      selectAll(res);
    });

});

items.delete("/cart-items/:id", (req, res) => {
  
  pool.query("delete from ShoppingCart where id=$1::int", [Number(req.params.id)]) 
      .then(() => {
      selectAll(res);
      });

});

module.exports = items;
