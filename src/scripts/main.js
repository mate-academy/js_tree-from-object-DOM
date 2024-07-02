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

const tree = document.querySelector('body');

function createTree(element, data) {
  const ulElement = document.createElement('ul');

  ulElement.setAttribute('id', 'tree');

  for (const property in data) {
    const liElement = document.createElement('li');

    if (Object.keys(data[property]).length !== 0) {
      createTree(liElement, data[property]);
      liElement.insertAdjacentText('afterbegin', property + ':');
    } else {
      liElement.insertAdjacentText('afterbegin', property);
    }

    ulElement.insertAdjacentElement('beforeend', liElement);
  }

  element.insertAdjacentElement('beforeend', ulElement);
}

createTree(tree, food);
