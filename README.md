1. Replace `<your_account>` with your Github username in the link
    - [DEMO LINK](https://clavigo.github.io/js_tree-from-object-DOM/)
2. Follow [this instructions](https://github.com/mate-academy/js_task-DOM-guideline)
    - Run `npm run test` command to test your code;
    - Run `npm run test:only -- -n` to run fast test ignoring linter;
    - Run `npm run test:only -- -l` to run fast test with additional info in console ignoring linter.

# Tree from object
Write a function `createTree(element, data)` that creates a nested list of `ul/li` from an object.
Use keys as list items.

`element` - is a DOM element

`data` - is a nested object

> Hint: use [Recursion](https://javascript.info/recursion)

![screenshot of the tree](example/object-tree.png)
