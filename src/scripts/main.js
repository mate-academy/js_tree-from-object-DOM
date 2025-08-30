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
  const mainList = document.createElement('ul');

  for (const foodType in data) {
    const foodTypeListItem = document.createElement('li');

    foodTypeListItem.textContent = foodType;

    const subItems = data[foodType];

    if (Object.keys(subItems).length > 0) {
      const subList = document.createElement('ul');

      for (const subItem in subItems) {
        const foodItem = document.createElement('li');

        foodItem.textContent = subItem;

        const subSubItems = subItems[subItem];

        if (Object.keys(subSubItems).length > 0) {
          const subSubList = document.createElement('ul');

          for (const subSubItem in subSubItems) {
            const subSubListItem = document.createElement('li');

            subSubListItem.textContent = subSubItem;
            subSubList.append(subSubListItem);
          }

          foodItem.append(subSubList);
        }

        subList.append(foodItem);
      }

      foodTypeListItem.append(subList);
    }

    mainList.append(foodTypeListItem);
  }

  element.append(mainList);
}

createTree(tree, food);
