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
  // WRITE YOUR CODE HERE
  const list = document.createElement('ul');

  function createList(dataList) {
    let string = '';

    for (const key in dataList) {
      if (Object.keys(dataList[key]).length !== 0) {
        string += `<li>${key}<ul>${createList(dataList[key])}</ul></li>`;
      } else {
        string += `<li>${key}</li>`;
      }
    }

    return string;
  }

  list.insertAdjacentHTML('beforeend', createList(data));

  element.append(list);
}

createTree(tree, food);
