#Frontend services for PMB 2017 Web Platform

This project is initiated with [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate), see docs folder or visit their repo for further documentations and issues.

Tech used:
1. React
1. Redux
1. Redux-saga
1. React-router
1. Styled-components
1. Superagent
1. ServiceWorker
1. Eslint

Installation and how-tos:
1. Install NPM and Yarn
1. Clone this repository and go to the folder
1. Run `yarn` to install dependencies
1. Run `yarn start` to run this repository locally
1. If you want to add new component or container run `yarn generate` and follow the steps
1. You can ask further questions and errors you encounter to line: kennydharmawan and Google.

Development flows:
  - New Feature or functionality:
    1. `git pull origin master`
    1. `git checkout {FEATURE_NAME}`
    1. Develop your feature on that branch, do commits as usual
    1. When finished, do `git fetch origin master` to update your local master and do `git merge master` in your branch, fix any conflicts that arise
    1. After fixing conflicts (if there are any), submit a pull request
  - Hotfix:
    1. `git pull origin master`
    1. Fix problem in master, commit and push when done
