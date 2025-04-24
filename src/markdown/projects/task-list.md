---
title: "Task List"
date: "2020-06-28"
image: "ejs-tasklist"
link: "https://ejs-tasklist.onrender.com/"
github: "https://github.com/Serenacula/ejs-tasklist"
type: "project"
features: ["node", "express", "ejs", "mongodb"]
posted: false
description: "This website is a simple task list. It is built using Node.js with Express in the backend, and EJS templating for the frontend. It also features a MongoDB database in the backend, to allow for persistence between user sessions."
---

This project was initially built in order to practice using the backend technologies Node.js and Express. It also uses the EJS templating package in the frontend, although I have since dropped this in favour of React. It is my first dynamic web app, with the backend being the focus of the effort.

The application's purpose was to provide a small tasklist of up to seven tasks, which the user could then tick off as the completed them throughout the day. Tasklists were named to allow multiple users to have individual tasklists, but no authentication was used as the app is very simple.

I later upgraded it to use MongoDB in the backend. This allowed for persistence between sessions, meaning a user could leave their tasklist and later come back. While MongoDB was my database system, I used the mongoose package to wrap it.

Since it required a full server, I deployed this site onto heroku.

While this is my only major project to feature backend work, I would like to return to learning the backend at some point in the future. In particular I found I had some difficulty with using MongoDB, so it would be good to devote some time to better learning database systems. I would also like to learn using an SQL-based database system in the future.
