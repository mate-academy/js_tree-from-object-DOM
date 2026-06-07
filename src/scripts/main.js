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

// debugger;

const tree = document.querySelector('#tree');

// function createTree(element, data) {
//   const ul = document.createElement('ul');

//   for (const branch in data) {
//     if (Object.keys(data[branch]).length === 0) {
//       ul.insertAdjacentHTML('beforeend', `<li>${branch}</li>`);
//     } else {
//       ul.insertAdjacentElement('beforeend', createTree(ul, data[branch]));
//     }
//   }

//   return ul;
// }

function createTree(element, data) {
  const ul = document.createElement('ul');
  // create new branch

  for (const branch in data) {
    const li = document.createElement('li');
    // create new list item

    li.insertAdjacentText('beforeend', `${branch}`);
    // add name to the list item

    if (Object.keys(data[branch]).length > 0) {
      createTree(li, data[branch]);
      // if branch has childs, do the same cycle for them
    }

    ul.insertAdjacentElement('beforeend', li);
    // add current list item to branch
  }

  element.insertAdjacentElement('beforeend', ul);
  // add completed barnch to parent branch
}

createTree(tree, food);
