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
  const arrOfFood = Object.keys(data);
  const wrap = document.createElement('ul');

  for (const f of arrOfFood) {
    const arrSubItems = Object.keys(data[f]);
    const foodItem = document.createElement('li');

    foodItem.textContent = f;
    wrap.appendChild(foodItem);

    const subItemWrap = document.createElement('ul');

    foodItem.appendChild(subItemWrap);

    for (const i of arrSubItems) {
      const subFoodItem = document.createElement('li');

      subFoodItem.textContent = i;
      subItemWrap.appendChild(subFoodItem);

      if (Object.keys(data[f][i]).length > 0) {
        const lastArr = Object.keys(data[f][i]);

        for (const item of lastArr) {
          const lastArrWrap = document.createElement('ul');

          subFoodItem.appendChild(lastArrWrap);

          const lastItem = document.createElement('li');

          lastItem.textContent = item;
          lastArrWrap.appendChild(lastItem);
        };
      }
    }
  };

  return tree.appendChild(wrap);
}

createTree(tree, food);
