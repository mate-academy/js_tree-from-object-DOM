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

function createTree(element, data) {
  const listFood = document.createElement('ul');

  tree.append(listFood);

  const liMeat = document.createElement('li');

  liMeat.textContent = (Object.keys(food))[0];
  listFood.append(liMeat);

  const ulMeat = document.createElement('ul');

  liMeat.append(ulMeat);

  for (const ingridient of Object.keys(food['Meat'])) {
    const fromMeat = document.createElement('li');

    fromMeat.textContent = ingridient;
    ulMeat.append(fromMeat);
  }

  const liFruit = document.createElement('li');

  liFruit.textContent = (Object.keys(food))[1];
  listFood.append(liFruit);

  const ulFruit = document.createElement('ul');

  liFruit.append(ulFruit);

  const liFruitRed = document.createElement('li');

  liFruitRed.textContent = (Object.keys(food['Fruit']))[0];
  ulFruit.append(liFruitRed);

  const fromFruitRed = document.createElement('ul');

  liFruitRed.append(fromFruitRed);

  for (const elementRed of Object.keys(food['Fruit']['Red'])) {
    const liFromFruitRed = document.createElement('li');

    liFromFruitRed.textContent = elementRed;
    fromFruitRed.append(liFromFruitRed);
  }

  const liFruitYellow = document.createElement('li');

  liFruitYellow.textContent = (Object.keys(food['Fruit']))[1];
  ulFruit.append(liFruitYellow);

  const fromFruitYellow = document.createElement('ul');

  liFruitYellow.append(fromFruitYellow);

  for (const elementYellow of Object.keys(food['Fruit']['Yellow'])) {
    const liFromFruitRed = document.createElement('li');

    liFromFruitRed.textContent = elementYellow;
    fromFruitYellow.append(liFromFruitRed);
  }
}

createTree(tree, food);
