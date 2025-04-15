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

document.body.id = 'tree';

const tree = document.querySelector('#tree');

/* const entries = Object.entries(food);
  document.getElementById("tree").innerHTML = entries; */
function createTree(element, data) {
  const keys = Object.keys(data);
  const addUl = document.createElement('ul');

  element.appendChild(addUl);

  keys.forEach((key) => {
    const addLi = document.createElement('li');

    addLi.textContent = key;
    addUl.appendChild(addLi);

    const dataValue = data[key];

    if (Object.keys(dataValue).length > 0) {
      createTree(addLi, dataValue);
    }
  });
}

createTree(tree, food);
