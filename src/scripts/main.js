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
  const output = [];

  for (const prop in data) {
    if (Object.keys(data[prop]).length !== 0) {
      output.push(`
      <li>${prop}
        ${createTree(undefined, data[prop])}</li>
      `);
    } else {
      output.push(`<li>${prop}</li>`);
    }
  }

  if (element !== undefined) {
    element.innerHTML = `
      <ul>
        ${output.join('')}
      </ul>
    `;
  } else {
    return `
      <ul>
        ${output.join('')}
      </ul>
    `;
  }
}

createTree(tree, food);
