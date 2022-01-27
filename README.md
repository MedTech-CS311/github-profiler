# Github Profiler

This project is a React Application that fetches your information from Github thanks to the [running tests](https://docs.github.com/en/rest) and outputs it in a layout that is very similar to the one found in the Profile Section in [Github](https://github.com/).

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

Fork the repository from Github and clone it locally using:

```
$ git clone link_to_your_repository
```

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

We want to migrate this project to use [ReduxJS Toolkit](https://redux-toolkit.js.org/) in Functional Components built with Hooks.

You should start doing your work in a seperate branch to not mess the existing code. Go ahead and create a new branch out of the **HOOKS BRANCH** following this command:

```
$ git checkout hooks
$ git checkout -b redux
```

Go ahead and enjoy refactoring the project to use Redux following these steps:

- [ ] Install the dependencies needed to implement Redux. If you haven't guessed it yet:

```
$ npm i --save @reduxjs/toolkit react-redux
```

### Setting up redux

- [ ] Create a new directory called redux under the `/src` directory. It will hold all the files related to redux.
- [ ] Under `/src/redux` directory, create a file called `store.js`, a directory called `actions` and another one called `reducers`.
- [ ] Inside the `reducers` directory, create your root reducer inside a file called `index.js`. Initially, we'll do that by passing an empty object to the root reducer.
- [ ] Import the root reducer from store.js and use it to create your store.
- [ ] Import the store in the `/index.js` file.
- [ ] Import the `Provider` from `react-redux` in the `/index.js` file and use it to provide your application with the store.

### Implementing the profile slice

- [ ] Inside the `reducers/` directory, create a file called `profile.reducer.js`.
- [ ] Inside the `profile.reducer.js` file, use [createSlice](https://redux-toolkit.js.org/api/createslice) to create a new slice called `profileSlice`. The initialeState should be an object with one property called `profileData` initialized to an empty object
- [ ] Export this slice and use it in the root reducer. The profile slice should be called `profile`
- [ ] Under `actions/` directory, create a file called `profile.actions.js`.
- [ ] Inside that file, implement a `fetchProfile` action with [createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk)
- [ ] Export the action and handle it in the `profile.reducer` with the `extraReducers`.
- [ ] In the Profile component, use `useSelector` hook to select the `profileData` from the `profile` slice.
- [ ] Substitute the use of the local state by the `profileData` coming from the store.
- [ ] Import the action and use `useDispatch` hook to dispatch it from `Profile` component.

### Implementing the Repos Slice

- [ ] Following the same steps, create `repos.actions` and `repos.reducer` and implement the needed selectors in `RepositoriesList` Component.

## Advanced:

### Implement Loaders

- [ ] Make use of the ExtraReducers in Profile and Repos slices to render loaders when the request is being handled. You can use this [Loader](https://www.npmjs.com/package/react-loader-spinner)

### Error Handling

- [ ] Make use of the ExtraReducers in Profile and Repos slices to render errors in a [snackbar](https://www.npmjs.com/package/react-simple-snackbar) to show the error messages.

### Implement Organisations Slice

- [ ] As we did with repositories, create a new Components called `OrganisationsList` and `SingleOrganisation` inside the directory `/components/organisations` to render organisations in a similar layout to that on Github.

![organisations-layout](https://github.com/MedTech-CS311/github-profiler/blob/hooks/organisations.png?raw=true)

- [ ] Create the slice and the actions needed to fetch user's organisations from Github by using its API.

- [ ] Update the Navbar to have 2 buttons, one for `organisations` and one for `repositories` and add the needed routing

### Implement Create Organisation and Create Repository

- [ ] Create the components and actions needed to implement Create Organisation and Create Repository features

After finishing, don't forget to push your changes and make a Pull Request
