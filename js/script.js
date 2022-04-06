// Copyright (c) 2022 Grace s All rights reserved
//
// Created by: Grace S
// Created on: Mar 2022
// This file contains the JS functions for index.html

"use strict";

function myButtonClicked () {
  // this function displays "My Text for Button!"
  
  document.getElementById('hello-world').innerHTML = 'Hello there! Welcome to Asia! We are the largest and most populated continent in the WORLD. There are millions of places where you can come and travel here, as we have 48 different countries!'
}

function calculate () {
  // input
  let base = parseInt(document.getElementById('base-of-triangle').value)
  let height = parseInt(document.getElementById('height-of-triangle').value)
  
  // process
  let area = base * height/2
  let perimeter = (base * height)/2
  
  // output
  document.getElementById('area').innerHTML = 'The area of the triangle is: ' + area + ' cm²'
}