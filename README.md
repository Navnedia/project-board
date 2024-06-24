# Project Board
A project share board to help you build a team and collaborate on exciting project ideas.

## Installation and Usage

1. Clone the repository onto your machine: `git clone https://github.com/bodonnell-DePaul/final-project-fe-Navnedia.git`


2. Install the npm dependencies: **`npm install --legacy-peer-deps`**

> [!WARNING]  
> Please be sure to use the **`--legacy-peer-deps`** flag when installing the npm packages! One of the libraries in this project relies on a different version of React. If you don't, it will scream at you and not work properly :(

3. Set up and get the [backend server-side](https://github.com/bodonnell-DePaul/final-project-back-end-Navnedia) running. By default, the backend sure runs on `localhost:5066`, but if you need to change the url/port on the front end, you can just update the `REACT_APP_API_BASE_URL` variable in the [`.env`](./.env) file.

4. Start the application frontend by running: `npm start`