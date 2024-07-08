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

const tree = document.querySelector('#tree');

function createTree(element, data) {
  Object.keys(data).forEach((key) => {
    const listItem = document.createElement('li');

    listItem.innerText = key;

    if (Object.keys(data[key]).length > 0) {
      const newList = document.createElement('ul');

      createTree(newList, data[key]);
      listItem.append(newList);
    }

    element.append(listItem);
  });

  return element;
}

createTree(tree, food);

// function createTree(element, data) {
//   const list = document.createElement('ul');
//   element.append(list);

//   Object.keys(data).forEach((key) => {
//     const listItem = document.createElement('li');

//     listItem.innerText = key;

//     if (Object.keys(data[key])) {
//       const newList = document.createElement('ul');

//       createTree(newList, data[key]);
//       listItem.append(newList);
//     }

//     element.append(listItem);
//   });
//   element.insertAdjacentElement('beforeend', list);

//   return element;
// }
