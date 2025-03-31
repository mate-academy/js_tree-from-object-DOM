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

const tree = document.createElement('div');

tree.setAttribute('id', 'tree');
document.body.appendChild(tree);

function createTree(element, data) {
  const scheme = document.createElement('ul');
  let firstIteration = true;

  const generateHTMLList = function (sourceJSObject, reproducedHTML = scheme) {
    const isEmpty = Object.keys(sourceJSObject).length === 0;
    const isObject = typeof sourceJSObject === 'object';
    let pathToInsideUL = reproducedHTML;

    if (!isObject || isEmpty) {
      return null;
    } else {
      if (firstIteration) {
        firstIteration = false;
      } else {
        reproducedHTML.appendChild(document.createElement('ul'));
        pathToInsideUL = reproducedHTML.firstElementChild;
      }

      Object.keys(sourceJSObject).forEach((key) => {
        pathToInsideUL.appendChild(document.createElement('li'));
        pathToInsideUL.lastElementChild.textContent = key;
        generateHTMLList(sourceJSObject[key], pathToInsideUL.lastElementChild);
      });
    }

    return scheme;
  };

  const list = generateHTMLList(data);

  element.appendChild(list);
}

createTree(tree, food);
