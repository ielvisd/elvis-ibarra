---
title: 'Adding Data Persistence to Web APIs'
description: 'Lambda School: FSW14 - Sprint 12'
img: https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2221&q=80
alt: 'Adding Data Persistence to Web APIs'
author:
  name: Elvis Ibarra
  bio: All about Elvis, what he does, and where he works
  img: ElvisBanksy.jpg
tags:
  - lambda school
  - web development
---

 <section class="weekly">
      <p class="intro">
        This week has been packed with information. This week focused on databases and how to use them with our Web APIs (Application Programming Interface(s)) It feel's so nice to make a database from scratch and really get to see what all these words in your code finally mean. It's really magical. I appreciate databases like I never have in the past. This was also the first time our cohort was asked to apply to become project managers for an upcoming part-time cohort. I applied for the position on Sunday, the day the application opened, read on to day 3 to see how my interview went and onto day 4 to see if I got in or not! </p>
      <div class="top-content">
        <div class="text-content">
      <h4><span class="daytags">Day 1: </span> <span class="day">Introduction to Relational Databases and SQL
        </span></h4>
        <p> Day 1 focused on the concept of a Relational Database and how to write Structured Query Language (SQL) to communicate with said database. This was definitely the "easiest" day of the week. The language is really straight forward and easy to use. Our project was to write some queries which I was able to do after looking at the documentation examples and to create a table using SQLite with some constraints on the entries. I finished MVP and was feeling pretty good about the day. I should note that this was a day off from live-lecture due to a holiday but we were still expected to do the project after watching a pre-recorded lecture.
      <div class="text-content">
        <h4><span class="daytags">Day 2: </span> <span class="day">Inserting and Modifying Data
          </span></h4>
        <p> After this week I'm starting to think that writing a review Thursday night isn't good enought and I should be doing this every night... too much information and this has been so helpful to my understanding. For example, I wasn't even completely clear what knex was doing until the morning of day 4 even though I successfully used it on day 2. Before we get to that we learned how to manipulate data using basic CRUD commands in SQL and then learned how to use knex to write these same commands but to our web API. This is where I got a little lost and didn't realize that the knex docs were meant to be used very literally. This was completely my fault in that I didn't read the training kit closely enough, it was even in bold letters! 🤦 I don't know, I think that I was on autopilot and wasn't even aware that I was using knex and not SQL somehow. This wouldn't clear up until the morning of day 4. </p>
      </div>
      <div class="text-content">
        <h4><span class="daytags">Day 3:</span> <span class="day">Querying Data, Migrations, and Seeding</span></h4>
        <p>This day focused on using Knex to create migrations which made our tables and our seeds to send data to those tables. I also had my interview for the PM position on this day. Tip to future PM applicants, make sure your webcam is on and in front of you (was one of the things I was commended on). The interview went well and I was told that I would find out either way the following day. Back to the databases... migrations are any changes to our database. The way knex does this is really cool. I had some issues which my peers helped me fix by doing a rollback and then remigrating my tables in the right order. It was a stretch goal to use a join for two tables which would allow me to display records from each that were related and that was what got me thinking about what knex truly was. I got stuck on this problem trying pure SQL methods and went to sleep frustrated.
        </p>
      </div>
      <div class="text-content">
        <h4><span class="daytags">Day 4:</span> <span class="day">Introduction to Data Modeling</span></h4>
        <p>This day was all about the big picture of how to model a database and what sorts of relationships and tests you should be thinking about. We covered the types of relationships data can have "one to one", "one to many" and "many to many", including how to implement these with primary keys/foreign keys. I definitely need to see some more examples but this was great for a an intro to the topic with a real demo and project. Speaking of the project it was really detailed today. Before I started working on it however I asked a peer and a got help from my PM to fix my stretch problem from the night before. The problem was that I was not using the knex documentation correctly. Once I saw my error the week became very clear. </p><p>I got back to the project of the day. We had to build the back-end for a recipe book with all kinds of constraints. I spent most of my time thinking of my data structure and having my aha moment with knex playing with migrations and seeding. I was confused on how to reference a separate table but this was mainly due to being tired from a long day. This might be my only 1 star project in my Github repo. Didn't finish MVP because I ran out of time.</p><p> Also, I got the part time PM position! It's official. I will be a PM for FSWPT4 starting after Thanksgiving break. Let's me see the curriculum from a fresh perspective and lets me be more involved with Lambda and help some people who are going to be in a position I was in just a few short weeks ago. Looking forward to it! So glad I wrote this, I feel ready for tomorrow's sprint.   </p>
      </div>
      <div class="text-content">
          <h4><span class="daytags">Day 5:</span> <span class="day">Sprint 12 - Relational Database Management Systems (RDBMS)</span></h4>
          <p> For this sprint we used Node.js, Express.js and Knex to build a RESTful API for a project tracker application that persisted data to a SQLite database. There were definitely a lot of moving parts to this project and I needed ~45 minutes extra to finish MVP but I as super proud of myself for troubleshooting and getting it setup the way that I wanted to. After lunch we met with our instructor and he went over some of the nuances of the project and showed us even more material before sending us off to break.  </p><p>To wrap the day up I had my orientation for my lambda PM internship and the orientation with the cohort that I'll be a PM for. It was fascinating to hear the orientation again through a new lens. Looking forward to my new role and am thankful to Lambda for the opportunity. </p>
        </div>
      </div>
      <p class="weeklyp">Glad to get to a break in the program but not a break from coding! Currently in talks with my small group in my cohort to work on a project over break, we have a lot of ideas we just need to decide on one and go =) Some of the things we are talking about I would have had no clue how to implement a few weeks ago but am super confident we could come up with something decent in a week's time. I might let you know how it goes! </p>
    </section>
