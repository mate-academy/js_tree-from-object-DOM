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

// function createTree(element, data) {
//   element.append(createTreeDOM(data));
// }

// function createTreeDOM(obj) {
//   if (!Object.keys(obj).length) {
//     return undefined;
//   }

//   let ul = document.createElement('ul');

//   for (const key in obj) {
//     const li = document.createElement('li');

//     li.innerHTML = key;

//     const childrenUl = createTreeDOM(obj[key]);

//     if (childrenUl) {
//       li.append(childrenUl);
//     }

//     ul.append(li);
//   }

//   return ul;
// }

// createTree(tree, food);

function createTree(element, data) {
  const ul = document.createElement('ul');

  for (const key in data) {
    if (!Object.entries(data[key]).length) {
      ul.insertAdjacentHTML('beforeend', `
        <li>${key}</li>`);

      element.append(ul);
    } else {
      const li = document.createElement('li');

      li.innerHTML = key;

      ul.append(li);

      element.append(ul);
      createTree(li, data[key]);
    }
  }
}

createTree(tree, food);
