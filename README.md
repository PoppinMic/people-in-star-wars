## Thoughts

This app is using SW Api to get people data and render some of the data in a table. When a user click on a table row, a popup will come up and show more detailed data including films name that people appeared.

The people and films title are in separate URLs, so when the Table component mount, I did 2 api calls. (The films one can also be delayed to when a user row is clicked). From observation of the api, we know that people data is paginated but films are not. There are only 7 films so I decided to just do films request once and store the data in store as an object Dictionary for people data to lookup later.

About code/files structure, the code is not perfect yet. There are much more can be done.

1. Code splitting and refactor. That one Saga can be separated to multiple ones. The code should be more elegant when I got more familiar with this redux middleware.

2. About container and components: I didn't really separate them all up because I felt like it's too over engineering. After all, with the official release of **react hooks**, I think this pattern will be less and less. Check out what Dan Abramov said himself (https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

3. Types. I didn't use propTypes for now since I will refactor the code use Typescript anyway.

4. More unit testing. Especially for sagas.

5. You can see what I was trying to add in braches and what I am planning to do with this in open issues.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
