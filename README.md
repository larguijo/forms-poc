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

## Key findings
Under my subjective opinion I'll define a series of criterias to define which library is better in those aspects. In the table below I will evaluate which one is better (if any).

<table>
<tr>
<th>Evaluated aspect</th>
<th>Description</th>
<th>Comments</th>
<th>Formik</th>
<th>React-Hook-Forms (RHF)</th>
</tr>
<tr>
<td>Amount of code</td>
<td>In what library the code is more consise</td>
<td>Code written is less in RHF as the register function takes care of the binding, on change and other events.
Formik has their own wrappers for fields, however you can't use them when using React-Bootstrap</td>
<td></td>
<td>&#10004;</td>
</tr>
<tr>
<td>Debbuging with Dev-tools</td>
<td>How easy is to identify form data using Chrome Dev Tools</td>
<td>Form values are stored under "Formik" component in "values" key. Easy to see what's going on.
In RHF you only have one component, which is good since we don't have as many wrapper component as in Formik. But the values are hard to visualize, as we have a lot Hooks that handle them.
</td>
<td>&#10004;</td>
<td></td>
</tr>
<tr>
<td>Integration with other libraries</td>
<td>How easy is to integrate with other libraries like react-bootstrap and react-select</td>
<td>No relevant differences with react-select. Formik a little bit verbose since Field and Form components can't be used.
But for react-select the set up looks nasty and non-intuitive. https://react-hook-form.com/get-started look for "Work with UI library" section.
</td>
<td>&#10004;</td>
<td></td>
</tr>
<tr>
<td>Validation</td>
<td>How easy is to validate form values</td>
<td>Formik can be validated using Schema using Yup and a validate function. RHF has a "by-field" validation. Which makes unintuitive the validation for multiple field condition. No documentation for this type of validation found.
</td>
<td>&#10004;</td>
<td></td>
</tr>

<tr>
<td>Implementation</td>
<td>Internal implementation</td>
<td>RHF seems to be slightly faster than Formik and amount of renders are less.
</td>
<td></td>
<td>&#10004;</td>
</tr>

<tr>
<td>Comunity usage</td>
<td>Which one is used the most by the community</td>
<td>Formik is been used a lot more than RHF and activity in GIT is also better for Formik.
</td>
<td></td>
<td>&#10004;</td>
</tr>

</table>

## Conclusion
Formik seems to be a better options to create forms in our projects.