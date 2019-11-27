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
    html += `<li>${key}</li><ul>${parser(data[key])}</ul>`;
  }

  return html;
}
