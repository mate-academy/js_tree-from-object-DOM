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

const tree = document.getElementById('tree');

function createTree(element, data) {
  element.innerHTML = parser(data);
}

createTree(tree, food);

function parser(data) {
  let html = ``;

  for (const key in data) {
    html += `<li>${key}${parser(data[key])}</li>`;
  }

  return html === `` ? html : `<ul>${html}</ul>`;
}
