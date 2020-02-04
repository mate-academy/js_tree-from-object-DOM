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
  const keys = Object.keys(data);
  const keys2 = [];
  const keys3 = [];
  const keys4 = [];

  for (const key in data[keys[0]]) {
    keys2.push(key);
  }

  for (const key in data[keys[1]]) {
    keys3.push(key);
    keys4.push(Object.keys(data[keys[1]][key]));
  }

  function map(arr) {
    return arr.map(key => `<li>${key}</li>`).join('');
  }

  element.innerHTML = `
    <ul>
      <li>${keys[0]}
        <ul>
          ${map(keys2)}
        </ul>
      </li>

      <li>${keys[1]}
        <ul>
          <li>${keys3[0]}
            <ul>
              ${map(keys4[0])}
            </ul>
          </li>

          <li>${keys3[1]}
            <ul>
              ${map(keys4[1])}
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  `;
}

createTree(tree, food);
