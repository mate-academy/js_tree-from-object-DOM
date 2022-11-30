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
  element.append(createUl(data));
}
function createUl(data) {
if (!Object.keys(data).length) return;

let ulElement = document.createElement('ul');

for (let key in data) {
  let liElement = document.createElement('li');
  liElement.innerHTML = key;

  let ulChildren = createUl(data[key]);
  if (ulChildren) {
    liElement.append(ulChildren);
  }

  ulElement.append(liElement);
}

return ulElement;
}

createTree(tree, food);
