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
  function createUl(obj) {
    const ul = document.createElement('ul');

    for (let i = 0; i < Object.keys(obj).length; i++) {
      const li = document.createElement('li');

      li.innerHTML = Object.keys(obj)[i];
      ul.appendChild(li);

      if (Object.keys(obj[Object.keys(obj)[i]]).length) {
        const nextIteration = createUl(obj[Object.keys(obj)[i]]);

        ul.appendChild(nextIteration);
      }
    }

    return ul;
  }

  tree.appendChild(createUl(data));
}
createTree(tree, food);
