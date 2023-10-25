# Alpha CRC Prompt Tool - React

This is a simple html UI that takes prompts from the user, and uses the gpt-4 model from openAI to generate a response.

## How to use

To get a response, the user can enter prompts into "Prompt", then click on the "Go" button.

The user can also enter source text if they choose to, the prompt will look at the source text to get context of what the user wants, and generate a response where both source text and prompts are considered.

If the user clicks on the "Go" button without entering a response, an alert will be displayed to tell the user that prompts are required.

User can also click on Extract Key Terms to get a list of Key Terms in the source text.

# See below for developer notes

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `serve -s build -l ${port}`

Once the build folder has been created, it contains everything required to be hosted.
Navigate to where the build folder is located, then use the command `serve -s build` to host it, port can be configured by adding `-l` or `-listen` followed by the port number.
