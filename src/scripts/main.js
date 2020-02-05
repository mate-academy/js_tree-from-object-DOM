'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
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
  function hasObjectKey(obj) {
    let insertList = '';

    for (const key in obj) {
      if (Object.keys(obj[key]).length === 0) {
        insertList += `<li>${key}</li>`;
      } else {
        insertList += `
          <li>${key}
            <ul>${hasObjectKey(obj[key])}</ul>
          </li>
        `;
      }
    }

    return insertList;
  }

  const insert = hasObjectKey(data);

  tree.insertAdjacentHTML('afterbegin', `<ul>${insert}</ul>`);
}

createTree(tree, food);
