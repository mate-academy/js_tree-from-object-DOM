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

function createTree(data) {
  let html = ``;

  if (typeof data === `string`) {
    html += `<li>${data}</li>`;
  } else if (typeof (data) === `object`) {
    html += `<ul>`;

    for (const key in data) {
      html += `<li>${key}</li>`;
      html += createTree(data[key]);
    }
    html += `</ul>`;
  }

  return html;
}

const tree = document.getElementById('tree');

tree.innerHTML = createTree(food);
