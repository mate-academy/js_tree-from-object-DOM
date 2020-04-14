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
  function createList(dataObject) {
    let list = `<ul>`;

    for (const key in dataObject) {
      list += `<li>${key} ${createList(dataObject[key])}</li>`;
    }
    list += `</ul>`;

    return list;
  }

  element.innerHTML = createList(data);
}

createTree(tree, food);
