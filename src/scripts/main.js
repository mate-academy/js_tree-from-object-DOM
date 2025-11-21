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

const treeElem = document.querySelector('#tree');

function createTree(element, data) {
  const ulElemFood = document.createElement('ul');
  const keys = Object.keys(data);

  keys.forEach((key) => {
    const liElemFood = document.createElement('li');

    liElemFood.innerText = key;
    ulElemFood.append(liElemFood);

    const objKey = data[key];

    if (Object.keys(objKey).length > 0) {
      createTree(liElemFood, objKey);
    }
  });

  element.append(ulElemFood);
}

createTree(treeElem, food);
