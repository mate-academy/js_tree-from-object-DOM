'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

document.body
  .appendChild(document.createElement('div'))
  .setAttribute('id', 'tree');

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const list = document.createElement('ul');

  element.appendChild(list);

  for (const i in data) {
    const listElement = document.createElement('li');

    listElement.textContent = i;
    list.appendChild(listElement);

    if (Object.keys(data[i]).length > 0) {
      const subList = document.createElement('ul');

      listElement.appendChild(subList);

      for (const j in data[i]) {
        const subListElement = document.createElement('li');

        subListElement.textContent = j;
        subList.appendChild(subListElement);

        if (Object.keys(data[i][j]).length > 0) {
          const subSubList = document.createElement('ul');

          subListElement.appendChild(subSubList);

          for (const k in data[i][j]) {
            const subSubListElement = document.createElement('li');

            subSubListElement.textContent = k;
            subSubList.appendChild(subSubListElement);
          }
        }
      }
    }
  }
}

createTree(tree, food);

// I know what that code looks absurdly (for me for sure) bacause I do the same things two-tree times 
// but also I do not have any idea how to change this
