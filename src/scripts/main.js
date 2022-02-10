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
  const obj = Object.keys(data);
  const obj1 = Object.keys(data['Drink']);
  const obj2 = Object.keys(data['Fruit']);
  const obj3 = Object.keys(data['Fruit']['Red']);
  const obj4 = Object.keys(data['Fruit']['Yellow']);
  element.innerHTML = `
  <ul>
    <li>${obj[0]}</li>
      <ul>
        <li>${obj1[0]}</li>
        <li>${obj1[1]}</li>
      </ul>
    <li>${obj[1]}</li>
      <ul>
        <li>${obj2[0]}</li>
          <ul>
            <li>${obj3[0]}</li>
            <li>${obj3[1]}</li>
          </ul>
        <li>${obj2[1]}</li>
          <ul>
            <li>${obj4[0]}</li>
            <li>${obj4[1]}</li>
          </ul>
      </ul>
  </ul>`;
  return element;

}

createTree(tree, food);
