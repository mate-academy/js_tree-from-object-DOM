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
  const ul = document.createElement('ul');

  Object.keys(data).forEach(topic => {
    const li = document.createElement('li');

    ul.append(li);
    li.innerText = topic;

    if (Object.keys(data[topic]).length > 0) {
      createTree(li, data[topic]);
    }
  });

  element.append(ul);
}

createTree(tree, food);
