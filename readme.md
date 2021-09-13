# Gumroad Challenge

This repository contains my source code of the [Gumroad Challenge](https://gumroad.notion.site/Coding-challenge-v2-f7aa85150edd41eeb3537aae4632619f).

## Approach

I started by creating a simple web site consisting of a single HTML, CSS, and JS file each. I ensured that the site would render with a small amount of CSS and a simple `console.log` function just to make sure everything was wired up correctly.

From there I iterated on the front end until I acheived near complete functionality, while storing data locally to simulate communicating with an API. Once I ensured all functionality was working locally, I created an Express app to both host the front end code and the API. Fauna was used for data storage since it was quick to spin up and I could use an NPM package I wrote to perform simple CRUD operations against indexes & collections. ([@brianmmdev/faunaservice](https://www.npmjs.com/package/@brianmmdev/faunaservice))

This concluded the MVP portion of the challenge. For the v2 portion, I separated the Express API and React front-end into separate folders in the repository, taking a mono-repo approach. I utilized styled-components and hooks within React to keep things clean & consistent (I'm a big fan of single file components).

Once the React front end was tested locally, I built a GitHub Action to deploy the app to Heroku. The Action builds the front end into a `dist` directory, moves it into the `public` directory of the API, and commits all changes to Heroku. There are currently no automated triggers since I am working fully off the master branch, however in a real-world environment I would generally automate releases into a staging environment from master, and work entirely off of a dev branch in a trunk-based approach.

## Infrastructure Decisions

To be entirely honest, I chose resources I knew would give me little trouble in setting up as I wanted to focus more on building the front-end and less on infrastructure setup. I had a reference for automating deployment of mono-repo projects since I had done it already with the [custom bot](https://github.com/fullstack-chat/fsc-core/tree/master/fsc.bot) I run for a Discord I run. I chose Fauna for storage since I wrote the NPM package I used for CRUD operations and was familar with how to set it up quickly.

## Infrastructure Alternatives

Alternate approaches I could have taken are utilizing Netlify & Netlify Functions, AWS Serverless Stack (API Gateway, Lambda, S3, CloudFront), or hosting it on a VM with Ubtuntu & Systemd unit services. Other storage services I could have used are MongoDB, DynamoDB, MS SQL Server, MySQL, or Postgres.