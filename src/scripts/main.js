'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');
const drink = [];
const fruit = [];
const red = [];
const yellow = [];
let count = 0;

function createTree(element, data) {
  /* drink */
  const ul = document.createElement('ul');
  const ul1 = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  /* fin drink */

  const ul2 = document.createElement('ul');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');

  const ul3 = document.createElement('ul');
  const li5 = document.createElement('li');
  const li6 = document.createElement('li');

  const ul4 = document.createElement('ul');
  const li7 = document.createElement('li');
  const li8 = document.createElement('li');

  document.querySelector('body').append(ul);

  for (const key in data) {
    count++;

    const li = document.createElement('li');

    li.classList.add(`li${count}`);
    ul.append(li);
    li.append(key);
  }

  for (const val in data.Drink) {
    drink.push(val);
  }

  for (const val in data.Fruit) {
    fruit.push(val);
  }

  for (const val in data.Fruit.Red) {
    red.push(val);
  }

  for (const val in data.Fruit.Yellow) {
    yellow.push(val);
  }

  document.querySelector('.li1').append(ul1);
  document.querySelector('.li1 ul').append(li1, li2);
  document.querySelector('.li1 ul li').textContent = drink[0];
  document.querySelector('.li1 ul li:last-child').textContent = drink[1];

  document.querySelector('.li2').append(ul2);
  document.querySelector('.li2 ul').append(li3, li4);
  document.querySelector('.li2 ul li:first-child').append(fruit[0], ul3);
  document.querySelector('.li2 ul li:last-child').append(fruit[1], ul4);
  document.querySelector('.li2 ul li:first-child ul').append(li5, li6);

  document.querySelector('.li2 ul li ul li').append(red[0]);
  document.querySelector('.li2 ul li ul li:last-child').textContent = red[1];

  document.querySelector('.li2 ul li:last-child ul').append(li7, li8);

  document
    .querySelector('.li2 ul li:last-child ul li:first-child')
    .append(yellow[0]);

  document
    .querySelector('.li2 ul li:last-child ul li:last-child')
    .append(yellow[1]);
}
createTree(tree, food);
