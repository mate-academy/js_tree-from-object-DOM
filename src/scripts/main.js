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

  element.innerHTML = `
    <ul>
      <li>${keys[0]}
        <ul>
          ${keys2.map(key => `
            <li>${key}</li>
          `).join('')}
        </ul>
      </li>

      <li>${keys[1]}
        <ul>
          <li>${keys3[0]}
            <ul>
              ${keys4[0].map(key => `
                <li>${key}</li>
              `).join('')}
            </ul>
          </li>

          <li>${keys3[1]}
            <ul>
              ${keys4[1].map(key => `
                <li>${key}</li>
              `).join('')}
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  `;
}

createTree(tree, food);
