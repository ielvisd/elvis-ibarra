---
title: 'Project Week: Front End'
description: 'Lambda School: FSW14 - Sprint 10'
img: https://images.unsplash.com/photo-1518349619113-03114f06ac3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2100&q=80
alt: 'Project Week: Front End'
author:
  name: Elvis Ibarra
  bio: All about Elvis, what he does, and where he works
  img: ElvisBanksy.jpg
tags:
  - javascript
  - react
  - lambda school
  - web development
---

<section class="weekly">
      <h2><span class="cs14">FSW14</span> Sprint 10 - <span class="weeklytitle">Project Week: Front-End</span></h2>
      <p class="intro">
        It is Friday morning the day after we (FSW14) completed Project Week for the Front End portion of the Full
        Stack Web Development Curriculum at LambdaSchool. We were tasked with building a minimum viable product (MVP)
        for a note taking app in React called "Lambda Notes" for our "client", which was our instructor. This project
        was really challenging but so much fun. I completed MVP early Thursday morning but didn't put the finishing
        touches on the project until about half an hour to demo time. Probably the most thrilling week so far in my
        time at LambdaSchool.  </p>
      <div class="top-content">
        <div class="text-content">
          <h4><span class="daytags">Day 1: </span> <span class="day">Project Setup & Getting the Data
            </span></h4>
          <p>
            Having been through a project week already while attending LambdaSchool I was much better prepared this go
            around because I kind of knew what to expect going in. The project was a to-do notes app that we had to
            create using React given some design files which were just visuals for what the app should look like. We
            worked on the project from Monday to Thursday at 2pm at which point some of our cohort presented to the
            group and that was followed by a smaller group presentation with your project manager. I had setup my
            Trello board the previous night and had an idea for what MVP looked like. The app needed to fetch notes
            from a server, display them, display a single note, edit a note, and delete a post. Using Redux was a
            "stretch goal" and thus not required but I felt comfortable with it from the previous week and it seemed
            like a logical choice for this app, I cleared that with my Project Manager and got underway.</p>
          <div class='postImagesContainer'> <dynamic-image src="/images/day1.png" alt="Github day 1 commits"></dynamic-image>
</div>
          <p> The above image is from my Github account and shows the "commits" or saves that I did throughout the day.
            Day 1 was pretty smooth. I wanted to start easy and not overwhelm myself by trying to implement all the MVP
            features at once so I focused on getting my notes to appear using a POST and doing the styling for the main
            portions. I was feeling good about my progress after day 1 and was at 2/6 on the MVP list.</p>
        </div>
        <div class="text-content">
          <h4><span class="daytags">Day 2: </span> <span class="day">Posting a Note & Reload Issues Emerge
            </span></h4>
          <p>I started to run into issues that would last up until Thursday morning when it all came together. I
            focused on getting a POST request to work and was having trouble getting my page to render all the notes
            after using a POST request without doing a hard reload of the site. I tried lots of different things and at
            the end of the day I decided that at least it was working and that maybe if I focused on implementing some
            of the other MVP features I would fix this on time. This is when I started to get a working Route
            implemented which got me to look into WithRouter which solved my reload issue. Well, that and calling
            another GET request after my POST request in the POST action. I started to wrap my connect with a
            WithRouter function from my middleware and that moved my Router methods from the Context area of my React
            tools to my Props. If that made no sense to you don't worry, I basically fixed my reload issue which gave
            me confidence going into day 3. If I had a working POST method, then PUT and DELETE weren't far behind. </p>
          <div class='postImagesContainer'>
           <dynamic-image src="/images/day2.png" alt="Github day 2 commits"></dynamic-image></div>
          <p>I was at 3/6 MVP and feeling okay about the project and the week so far. For some reason I thought we had
            until Friday for this project and something clicked on this night that the project was actually due
            Thursday! I still thought I could wrap MVP up by Wednesday night so I wasn't too worried. </p>
        </div>
        <div class="text-content">
          <h4><span class="daytags">Day 3:</span> <span class="day">WithRouter Saves the Day MVP a Day Away</span></h4>
          <p>
            Wednesday was Halloween and also the the day I spent the most time with this project. It was quite spooky.
            I spent most of the day coding away and by the end of the night I had gotten MVP with some quirks and
            styling that didn't feel quite right. I definitely was not happy with my product that night but I had the
            following day to change my simple inputs that were placeholders for a full form and get my delete modal
            finished which is what I needed to feel satisfied with my project. I was feeling awesome about being able
            to problem solve and make progress every single day.</p>
          <div class='postImagesContainer'>
           <dynamic-image src="/images/day3.png" alt="Github day 2 commits"></dynamic-image>
          </div>
          <p>Even though I was at 6/6 on the MVP list I was not complete in my head until I had a working modal and a
            form with multi-line text and not just 2 inputs on a screen. 1 day to go.
          </p>
        </div>
        <div class="text-content">
          <h4><span class="daytags">Day 4:</span> <span class="day">Demo Day - Lambda Notes - FSW14</span></h4>
          <p>The delete modal was a little tricker than I thought but since I had most of the morning to focus on it I
            got that and my form conversion done right at around 1:30pm. It was so cool to see something that you
            created come to life and work as expected. Sure there are things I could improve but this was mine and it
            worked =) At 2pm we all met to watch some of our classmates present. Awesome stuff. We have some very
            talented individuals in my cohort who did some really cool things with their projects. One of the major
            differences from this go around to last project week was that this time my reaction was "That's awesome, I
            can see how they did that and can't wait to implement that on my next project." instead of "Wow, that's so
            awesome, I have no idea how they did and I'll never be that good".</p>
          <div class='postImagesContainer'>
           <dynamic-image src="/images/day3.png" alt="Github day 2 commits"></dynamic-image></div>
        </div>
        <p>At the end of the day I presented a 6/6 MVP project to my group which used Redux (1 stretch goal) and I am
          hosting on Github Pages here: <a class="lambda text-blue-800" href="https://ielvisd.github.io/front-end-project-week/"
            target="_blank">Front End Project - Lambda Notes</a></p>
      </div>
      <p class="weeklyp">Such a fun week. I learned so much and am so lucky to have such an awesome group of people
        around me. I could not have pulled off this project without the awesome instructors, project managers and my
        fellow FSW14 cohort at LambdaSchool. Even though we've only known each other for 10 weeks it truly feels like a
        family. Which reminds me that this was also our last week with Dustin Myers who was a great instructor and am
        thankful for the time he spent with our cohort. As a final note my project was initially built out of 2000px x
        2000px design files which is why the app seems huge and I didn't have time to optimize it for smaller screens
        or anything like that since I spent so much time getting it to work and display correctly at this size in the
        first place. There's plenty more I would improve but I'm happy what what I got.
      </p>

  </section>
