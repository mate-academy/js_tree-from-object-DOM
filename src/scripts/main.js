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
    'Yellow':  {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  // WRITE YOUR CODE HERE

  for (let item in data) {
    let ul = document.createElement('ul')
    let li = document.createElement('li')
  
    ul.append(li)
    li.textContent = item;
    element.append(ul)

    createTree(ul, data[item])

  }

}

createTree(tree, food);
