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

  const about = Object.entries(data);

  for (let i = 0; i < about.length; i++) {
    // if (about[i][1] instanceof Object) {
    if (Object.keys(about[i][1]).length !== 0) {
      element.insertAdjacentHTML('beforeend', `
      <ul>
        <li class ='last'> ${about[i][0]}
        </li>
      </ul>
      `);

      const base = element.lastElementChild.querySelector('[class ="last"]');

      createTree(base, about[i][1]);
    } else {
      element.insertAdjacentHTML('beforeend', `
    <ul>
      <li> ${about[i][0]}
      </li>
    </ul>
    `);
    }
  }
}

createTree(tree, food);
