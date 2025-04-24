---
title: "Used and Loved Search Engine"
date: "2022-06-01"
image: "used-and-loved"
link: "https://usedandloved.com"
github: ""
type: "project"
features: ["javascript", "typescript", "neo4j", "jest", "docker", "bullmq"]
posted: true
description: "This was a 3 month project working for a startup. My job involved building the webscraper and database input for the website, which was then shown in a search engine for used goods."
---

This job was for a search engine that specialised in used goods. My job was primarily working in the backend with typescript, and involved building out the webscraper. This scraper would scan a list of websites (with permission from the owners) for second-hand products, and then import them into the database.

This project was at a much bigger scale than anything else I have done, and was built from the ground up. Since it needed to be able to deal with potentially hundreds of different websites, this meant that it wasn't feasible to build an individual scraper for each one.

Instead, I decided to build a generalised webscraper API, able to handle a variety of different website setups with only minimal input - the maintainer would be able to provide the details of where on the page to find product details, and then the API would handle everything else. This means fetching the product-list, fetching the data for each product, error-handling, data processing, sanitisation, etc., were all handled automatically.

Alongside this, I also built an automated testing infrastructure with jest, which was able to check that all the website products were correctly receiving product data, and that the data was formatted correctly. Rather than simply building individual tests, this allowed the maintainer to quickly add appropriate tests for any new websites being scraped, checking that data was correctly received, any vital data wasn't being missed, and that it was formatted correctly.

All the data from the webscraper then had to be entered into the Neo4J database. However, since that could potentially include millions of products from hundreds of websites, this system needed to be able to function at scale.

To handle this, I used a combination of BullMQ, which is a worker management package, and Neo4J's data-streaming API. This meant that as website data came in, it would be continuously added into the database, greatly increasing the efficiency at scale.

Everything in this project was done using Typescript, and was done inside Docker containers. I learnt a lot about both technologies in the process of this, and Typescript in particular has been an incredibly valuable addition to my repertoire. I plan to continue improving at it in the future.
