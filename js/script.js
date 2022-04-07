// Copyright (c) 2022 Grace s All rights reserved
//
// Created by: Grace S
// Created on: Mar 2022
// This file contains the JS functions for index.html

"use strict";

function calculate () {
  
  // input
  let width = parseInt(document.getElementById('width').value)
  let length = parseInt(document.getElementById('length').value)
  let height = parseInt(document.getElementById('height').value)
  
  // process
  let surfaceArea = 2*(width * length + height * length + height  * width)
  
  // output
  document.getElementById('surface-area').innerHTML = 'The surface area of the rectangular prism is: ' + surfaceArea + ' cm²'
}

 // Volume process for user input
function calculateVolume () {
  
  // input
  let widthVolume = parseInt(document.getElementById('width-volume').value)
  let lengthVolume = parseInt(document.getElementById('length-volume').value)
  let heightVolume = parseInt(document.getElementById('height-volume').value)
  
  // process
  let rectangularPrismVolume = (widthVolume * lengthVolume * heightVolume)
  
  // output
  document.getElementById('volume').innerHTML = 'The volume of the rectangular prism is ' + rectangularPrismVolume + ' cm<sup>3</sup>'
}