# Getting Started with Portfolio Full Stack

  

This project was created by [Codest-x](https://github.com/codest-x) and [Jean-Dev](https://github.com/Jean-Dv) .

I [Jean-Dv](https://github.com/Jean-Dv) create the backend using Express, Node.Js (Runtime), and database with MongoDb:


Remember that this project is using ts-standard like linter and format code.

If you don't know about these libraries, you can watch this documentation:
- [Eslint](https://eslint.org/docs/latest/)
- [Prettier](https://prettier.io/docs/en/index.html)

# Instalation and Usage

**Available Scripts**

First you need to install all dependencies, you can that using yarn or npm:

You only need to type  `yarn or npm install` in console, and wait while the installation finish. Also you need to create several configuration files which are:

- `.env.development.local`
- `.env.test.local`
- `.env (production)`

### `npm run dev`

Runs the app in the development mode.
Open [http://localhost:8080](http://localhost:8080) to view it in the browser. If you put another port inside the `.env.development.local` file change the port to localhost.
The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run lint`

Run the ts-standard linter to look at errors in the code

### `npm run build`

Convert all the `.ts` files to `.js`, this will allow us to upload the project to production through heroku. (It will be explained later)

### `npm run start`

Run the project in production mode by default choose the file found in `./build/bin/www.js`.

### `npm run update:repos`

This is a custom script so that we can update the database repositories that we set up in the Mongo Mongo Atlas database, it should be run as a cronjob. (I will explain later how to configure said cronjob in heroku)

## Usage

### Create `MONGO_URI`

To create the Mongo Atlas database follow this [tutorial](https://docs.rackspace.com/blog/creating-and-connecting-to-a-database-in-mongodb-atlas/).

### Create `GITHUB_API_TOKEN`
To create the github token you have to follow this [tutorial](https://docs.github.com/en/enterprise-server@3.3/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). <br>
But select the following scopes.
![Scopes](https://i.ibb.co/qRJzFB5/1661217845-screensht.png)

### Modified environment variables

To use this backend you will have to place the following data in the aforementioned files:

```
PORT=8000
MONGO_URI="Uri what gives you mongo atlas"
SALTROUNDS=10
SECRETKEY="Create encrypted text at this url https://djecrety.ir/"

// Mailer leave the following data empty but place it in the file
MAIL_HOST=
MAIL_PORT=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REFRESH_TOKEN=

// Github

GITHUB_API_URL=https://api.github.com
GITHUB_API_TOKEN="Token created by github. (We already teach how)"
```
## Deployment

### 1. Create your account in Heroku
### 2. Create new app
Enter the following link so you can see your Heroku apps and you can also create one (https://dashboard.heroku.com/apps)
![Create New App](https://i.ibb.co/DK04H1z/1661218274-screensht.png)
### 3. Configure your heroku app with your github
After the previous step you are redirected to the configuration page of your application, you must click on Github (Connect to Github). <br>
After accepting all Github permissions, the following screen will appear
![Screen onnect github](https://i.ibb.co/pRtZ46C/1661218637-screensht.png)
**You will only have to search for your repository or the fork to ours and click connect**
### 4. Configure cron job
To configure the aforementioned cron job you will only have to go to resources in the same configuration of your Heroku application, search for Heroku Scheduler and click on submit order from. As it's shown in the following
![Screen in resources](https://i.ibb.co/TmTFKTb/1661218887-screensht.png)
![Screen in submit order from](https://i.ibb.co/pwrg4yg/1661218902-screensht.png)
### 5. Add cron job in heroku scheduler
To add it you will have to click on the link that appears. (Heroku Scheduler) <br>
![Heroku Scheduler resources](https://i.ibb.co/16dRG7q/1661219105-screensht.png)
- **Create job** <br>
![Heroku Scheduler](https://i.ibb.co/x7fkxkr/1661219225-screensht.png)
- **Job editor** <br>
![Heroku Job Editor](https://i.ibb.co/TrmNSjd/1661219329-screensht.png)

**Just save job and ready we have configured our backend**
