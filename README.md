# Tree from object

## Task

Write a function `createTree` that creating list of `ul/li` from object.

Function `createTree(element, data)`

`element` - is a DOM element.

## Workflow

- Fork the task repository.
- Clone forked repository 
    ```bash
    git clone git@github.com:<user_name>>/<task_repository>.git
    ```
- Run `npm install`.

## Development mode 

- Run `npm run start` to start `http-server` on `http://localhost:8080`
    When you run server the command line window will no longer be available for 
    writing commands until you stop server (`ctrl + c`). All other commands you 
    need to run in new command line window.
- Make sure the code is clean. Run linters (`npm run lint`)
- Follow [the simplified JS styleguide](https://mate-academy.github.io/style-guides/javascript-standard-modified)
- Follow [HTML, CSS styleguide](https://mate-academy.github.io/style-guides/htmlcss.html)
- When your solution is complete `Deploy on gh-pages`

## Deploy on gh-pages

- Execute `npm run deploy`. This command will build your project to the 
`/dist` folder and push it to branch `gh-pages` in your remote repository. 

## Push your code to GitHub

- Add links to your `gh-page` in `readme.md`.
- Commit and push all recent changes
  ```bash
  $ git add .
  $ git commit -m 'commit message'
  $ git push origin master
  ```
- Create `Pull Request` (going forward `PR`) from forked repo `(<branch_name>)` to original repo (`master`).
- Add a link to `PR` to Google spreadsheet. `PR` must include updated `readme.md` with `Demo`.

## Project structure

- `src/` - directory for html, css, sass, js, image, fonts files
- `dist/` - directory for built pages

You should be writing code in `src/` directory.

### Livereload and syncronization with browsers

Task `$ npm run start`

When task is executed, gulp starts local web server BrowserSync and opens index.html.  

[About BrowserSync](http://www.browsersync.io/)  

Server uses `dist/` as a project root.

### Demo link

Add link here: `[DEMO LINK](https://<your_account>.github.io/<repo_name>/)`
``
### Screenshot of the tree
![screenshot](example/object-tree.png)

