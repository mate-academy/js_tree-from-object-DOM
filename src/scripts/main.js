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
  for (let key in data) {
      let ul = document.createElement("ul");
      let li = document.createElement("li");

      li.innerText = key;
      ul.append(li);
      element.append(ul);

      if (Object.keys(data[key]).length > 0) {
        createTree(li, data[key]);
      }
  }
}

createTree(tree, food);

