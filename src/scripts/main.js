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
const [drink, fruit] = Object.keys(food);

function createTree(element, data) {
  tree.insertAdjacentHTML('afterbegin', `
    <ul>
      <li>
        ${drink}
        <ul>
        <li>
          ${Object.keys(data.Drink)[0]}
        </li>
        <li>
          ${Object.keys(data.Drink)[1]}
        </li>
        </ul>
      </li>
      <li>
        ${fruit}
        <ul>
          <li>
            ${Object.keys(data.Fruit)[0]}
            <ul>
              <li>
                ${Object.keys(data.Fruit.Red)[0]}
              </li>
              <li>
              ${Object.keys(data.Fruit.Red)[1]}
            </li>
            </ul>
          </li>

          <li>
          ${Object.keys(data.Fruit)[1]}
            <ul>
              <li>
                ${Object.keys(data.Fruit.Yellow)[0]}
              </li>
              <li>
              ${Object.keys(data.Fruit.Yellow)[1]}
              </li>
            </ul>
        </li>
        </ul>
      </li>
    </ul>
  `);
}

createTree(tree, food);
