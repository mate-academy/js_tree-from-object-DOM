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

  element.append(ul);

  Object.keys(data).forEach(topic => {
    const li = document.createElement('li');

    ul.append(li);
    li.innerText = topic;
    createTree(ul, data[topic]);
  });
}

createTree(tree, food);
