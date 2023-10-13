/* eslint-disable no-undef */
'use strict';

const food = {
  'Drink': {
    'Wine': {},
    'Schnaps': {},
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

function createTree(element, data) {
  const listFood = document.createElement('ul');

  element.append(listFood);

  Object.keys(data).forEach(product => {
    const branch = document.createElement('li');

    branch.innerText = product;
    listFood.append(branch);
  });

  const branches = document.querySelectorAll('li');
  const listDrink = document.createElement('ul');
  const listFruit = document.createElement('ul');

  branches[0].append(listDrink);

  Object.keys(data.Drink).forEach(product => {
    const branch = document.createElement('li');

    branch.innerText = product;
    listDrink.append(branch);
  });

  branches[1].append(listFruit);

  Object.keys(data.Fruit).forEach(product => {
    const branch = document.createElement('li');

    branch.innerText = product;
    listFruit.append(branch);
  });

  const listRed = document.createElement('ul');
  const listYellow = document.createElement('ul');

  listFruit.childNodes[0].appendChild(listRed);

  Object.keys(data.Fruit.Red).forEach(product => {
    const branch = document.createElement('li');

    branch.innerText = product;
    listRed.append(branch);
  });

  listFruit.childNodes[1].appendChild(listYellow);

  Object.keys(data.Fruit.Yellow).forEach(product => {
    const branch = document.createElement('li');

    branch.innerText = product;
    listYellow.append(branch);
  });
}

createTree(tree, food);
