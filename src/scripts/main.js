'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');
const foodList = Object.keys(food);
const meatList = Object.keys(food['Meat']);
const fruitList = Object.keys(food['Fruit']);
const redFruit = Object.keys(food['Fruit']['Red']);
const yellowFruit = Object.keys(food['Fruit']['Yellow']);

function createTree(element, data) {
  tree.innerHTML = `
    <ul class="food">
      ${foodList.map(item => `
        <li class="food__item meat">${item}
          <ul class="food-type"></ul>
        </li>
      `).join('')}
    </ul>
  `;

  const foodTypeList = document.querySelectorAll('.food-type');

  foodTypeList[0].innerHTML = `
    ${meatList.map(item => `
      <li class="meat__item">${item}</li>
    `).join('')}
  `;

  foodTypeList[1].innerHTML = `
    ${fruitList.map(item => `
      <li class="fruit__color fruit">${item}
        <ul class="fruit-type__list"></ul>
      </li>
    `).join('')}
  `;

  const fruitTypeList = document.querySelectorAll('.fruit-type__list');

  fruitTypeList[0].innerHTML = `
    ${redFruit.map(item => `
      <li class="fruit__red">${item}</li>
    `).join('')}
  `;

  fruitTypeList[1].innerHTML = `
    ${yellowFruit.map(item => `
      <li class="fruit__yellow">${item}</li>
    `).join('')}
  `;
}

createTree(tree, food);
