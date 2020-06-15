'use strict';

const food = {

  'Meat': {
    'Pork': {
    },
    'Beef': {
    },
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
  let activeElement = element;

  const startElements = () => {
    const createElement = document.createElement('ul');

    activeElement.append(createElement);
    activeElement = createElement;
  };

  const endElements = () => {
    activeElement = activeElement.parentElement;
  };

  const cycle = (unit) => {
    startElements();

    for (const key in unit) {
      activeElement.insertAdjacentHTML(
        'beforeend',
        `<li>${key}</li>`
      );

      if ((Object.keys(unit[key]).length) > 0) {
        cycle(unit[key]);
      }
    }
    endElements();
  };

  cycle(data);
};

createTree(tree, food);
