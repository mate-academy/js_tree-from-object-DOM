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

function createTree(data, element) {
  // WRITE YOUR CODE HERE

  const appendElement = function(value, objToappend) {
    const ulist = document.createElement('ul');
    const li = document.createElement('li');

    li.innerText = value;
    ulist.append(li);
    objToappend.append(ulist);

    return ulist;
  };

  for (const [key, value] of Object.entries(data)) {
    if (Object.keys(value).length > 0) {
      const list = appendElement(key, element);

      createTree(value, list);
    } else {
      appendElement(key, element);
    }
  }
}

createTree(food, tree);
