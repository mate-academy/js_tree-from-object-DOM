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
  function createList(arrayLink) {
    const newLayer = [];

    newLayer.push(`<ul>`);

    for (const key in arrayLink) {
      newLayer.push(`<li>${key}</li>`);

      if (Object.keys(arrayLink[key].length > 0)) {
        newLayer.push(createList(arrayLink[key]));
      }
    }

    newLayer.push(`</ul>`);

    return newLayer.join('');
  }

  element.innerHTML = `
    ${createList(data)}
  `;
}

createTree(tree, food);
