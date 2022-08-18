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
  const ul = document.createElement('ul');
  const itemList = Object.keys(data);

  if (itemList.length > 0) {
    itemList.forEach(item => {
      const li = document.createElement('li');

      li.textContent = item;
      ul.append(li);

      if (Object.keys(data[item]).length > 0) {
        createTree(ul, data[item]);
      }

      element.append(ul);
    });
  }
}

createTree(tree, food);
