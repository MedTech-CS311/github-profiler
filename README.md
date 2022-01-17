# Github Profiler

This project is a React Application built with class components. It fetches your information from Github thanks to the [running tests](https://docs.github.com/en/rest) and outputs it in a layout that is very similar to the one found in the Profile Section in [Github](https://github.com/). 

## Overview

This project is composed of 5 components:
- App
- Navbar
- Profile
- RepositoriesList
- SingleRepository

This project is sending 2 requests to Github API:
- **GET** `/user` to get the user info
- **GET** `/user/repos` to get the user repos
## Start the project

- [ ] Install the dependencies and start the project
```
$ npm install
$ npm start
```

This project needs the user's Github `token` in order to successfuly fetch the data from the API. The token needs to be stored in the `.env` file as an environment variable.
To add your token, you should:

- [ ] Get your token from Github. You can find the steps online.
- [ ] Copy the file called `.env.example` and rename it to `.env`
- [ ] Paste your token there
- [ ] Restart the sever


## Your job

We want to migrate this project to use [React Hooks](https://reactjs.org/docs/hooks-intro.html) in Functional Components to be more scalable in the future.
Go ahead and enjoy refactoring the project to use Hooks following these steps:

- [ ] Substitute the Class components with Functional components
- [ ] Refactor the state variables using `useState` hook
- [ ] Refactor the lifecycle methods using `useEffect` hook 