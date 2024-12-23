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

function createTree(element, data) {
  // check and create <ul> element
  if (element === null) {
    const ulTree = document.createElement('ul');

    ulTree.setAttribute('id', 'tree');

    document.body.appendChild(ulTree);
    createTree(ulTree, data);
  } else {
    const ul = document.createElement('ul');

    // iterate over the keys in the data object
    for (const key in data) {
      // create <li> element for each key
      const li = document.createElement('li');

      li.textContent = key;

      // check if the value is an object and not null
      if (typeof data[key] === 'object' && data[key] !== null) {
        createTree(li, data[key]);
      }
      ul.appendChild(li);
    }

    element.appendChild(ul);
  }
}
createTree(tree, food);
