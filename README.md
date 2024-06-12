[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/6w5qaeE1)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=15075619)
# FinalProject-FE
A project share board to help you build a team and collaborate on exciting project ideas.

## Installation and Usage

1. Clone the repository onto your machine: `git clone https://github.com/bodonnell-DePaul/final-project-fe-Navnedia.git`


2. Install the npm dependencies: **`npm install --legacy-peer-deps`**

> [!WARNING]  
> Please be sure to use the **`--legacy-peer-deps`** flag when installing the npm packages! One of the libraries in this project relies on a different version of React. If you don't, it will scream at you and not work properly :(

3. Set up and get the [backend server-side](https://github.com/bodonnell-DePaul/final-project-back-end-Navnedia) running. By default, the backend sure runs on `localhost:5066`, but if you need to change the url/port on the front end, you can just update the `REACT_APP_API_BASE_URL` variable in the [`.env`](./.env) file.

4. Start the application frontend by running: `npm start`


## Requirements
Choose a project that fulfills the following requirements:

	1. Front end must be a react application
	2. Back end must be a dotnet application
		a. Must include GET, POST and PUT api calls
	3. Must have data persistence to a database.  This can be a SQL lite database, MS SQL, MySQL, Mongo, etc.  You can use multiple databases if you'd like. 
	4. The Entity Framework must handle all communication between the dotnet application and the database
	5. Your application must have a login page with support of Oauth2.0 Authentication and handle multiple users.
		a. It should have a workflow for creating a new account
		b. Authenticating against that new account
		c. Being able to login with that new account
	6. Must have multiple pages and/or views
	7. Project demo will be live during week 10 or by video and submitted via D2L
		a. Submission will require a document or PowerPoint presentation describing your project
			i. Describe each of the above requirements and how your project meets them
			ii. Why did you choose this specific project
			iii. If you had more time, what would you do differently
		b. Project  source code must be committed to GitHub.  If you submit a presentation but do not commit source code then you will receive a 0%.  


## Example projects:
	• Blogging Platform
	• Bank / ATM application
	• Personalized Weather Application
	• Chat application
	• Gradebook supporting multiple students
	• Reservation system (restaurants, equipment, cars, etc.)
	• Shopping application (limit the scope)
	• Finance app (Display stocks, Crypto etc.)
	• Crime alert by location/user
	• Book Review site
	• Resale of used items (aka Craigslist )
![image](https://github.com/bodonnell-DePaul/FinalProject-BE/assets/5862378/31482d6c-92fd-4dd1-af96-1232d4debd67)
