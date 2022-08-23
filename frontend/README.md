# Getting Started with Portfolio Full Stack

  

This project was created by [Codest-x](https://github.com/codest-x) and [Jean-Dev](https://github.com/Jean-Dv) .

I [Codest-x](https://github.com/codest-x) create the frontend using React, TypeScript, Sass and some libraries like:

- [React Parallax Tilt](https://www.npmjs.com/package/react-parallax-tilt):  Create hover tilt animation on components.
- [React Awesome Reveal](https://www.npmjs.com/package/react-awesome-reveal): Fade animations for components
- [SweetAlert2](https://www.npmjs.com/package/sweetalert): Show custom alerts.
- [EmailJs](https://www.emailjs.com/docs/): Send emails through the page form.

Remember that this project is using ESLint and Prettier, if you want to modify something about the configuration of this you can go to `/src/.eslintrc.json or /src/.prettierrc`

If you don't know about these libraries, you can watch this documentation:
- [Eslint](https://eslint.org/docs/latest/)
- [Prettier](https://prettier.io/docs/en/index.html)

The other components, pages, and other things were created from zero.

## Installation and Usage

**Available Scripts**

In the project directory, you can run:

First you need to install all dependencies, you can that using yarn or npm:

You only need to type  `yarn or npm install` in console, and wait while the installation finish.

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn test`

At this moment this project has no tests created, maybe later I will try to add some tests.

### `yarn build`

You don't need to do this necessarily, if you want to upload this page to [vercel.com](https://vercel.com/dashboard), vercel will make the build and start the project for you.

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified, and the filenames include the hashes.
Your app is ready to be deployed!
  
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project, so you have full control over them. All the commands except `eject` will still work, but they will point to the copied scripts, so you can tweak them. At this point, you’re on your own.


You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Usage

**Modify Assets and Pallets Colors**

If you want to modify the assets images to give a different aspect to the page, you can go to: 

    ./src/assets/images
  You can modify whatever you want, but remember that you need to change the name on all imports of the different images

Also, if you want to modify the color palette of the website, you can go to:

    ./src/styles/_vars.scss
    
In this file are all the styles variables of the website, light Mode and dark Mode, feel free to change whatever you want, you only need to change the variables in the _vars.scss file, and automatically the color of all the page change too.

In the `./src/styles/index.scss` are the global styles for all the page, the style for the scrollbar and all the styles for the sweet alert component.

**Modify Fields Of The Page**

There is a file called config.json in `/src/config/config.json`

In this file you can config all the fields needed for the page, like author data, emailConfig for emailJS service, and all the social buttons that you want.

If you change something on this file, you will need to change the imports and usages in the page.

Here is a little explication of the data that you will need.

**useFullName** (True or False): This field manage what do you want to show in the page, the fullname including firstName and lastName or only the firstName.

**author**: This Object field contain all the information about you (author), like firstName, lastName, carrer, location, email.

- **cvURL**: This field is not necessary, but if you want to add this is the URL to your curriculum PDF, to download or show directly from the website.

**emailConfig**: This Object contains the information for the service of emailJS, you only need to register in [emailJS](https://dashboard.emailjs.com/sign-up), then you can see a dashboard like this:

![EmailJS Dashboard](https://i.ibb.co/BjdY9Rv/Screenshot-2022-08-22-191017.png)

Only Click in Add New Service, and select the service that you want, and configure that, then you need to fill the nex fields:

- **serviceID**: This field appears on the home page of the dashboard, you can do click on the service that you create and see that.

![ServiceID](https://i.ibb.co/cxwBb04/Screenshot-2022-08-22-191351.png)

**templateID**: You need to go to the option templates, then you need to create a template file like this:
![TemplateID](https://i.ibb.co/vXkDgKZ/Screenshot-2022-08-22-191539.png)

And save that, then you need to copy the templateID, you can open your template and go to settings, and you see that like the last step.

**publicAPIKEY**: Last, you need to go to account and copy your publicAPIKey.

**social**: This Array contains all the social media that you want to show, only you need to add the URL to the website and the name of the media, make sure that the name was correct, because the icon comes from the name.

It is all you can enjoy your new portfolio.
