<template>
  <div class="container resume">
    <nav
      class="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-900 mb-3"
    >
      <div
        class="container px-4 mx-auto flex flex-wrap items-center justify-between"
      >
        <div
          class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
        >
          <a
            class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-pink-600"
            href="/"
          >
            Elvis.dev
          </a>
          <button
            class="text-pink-600 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            @click="toggleNavbar()"
          >
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <div class="lg:flex lg:flex-grow items-center">
          <ul class="flex flex-col lg:flex-row list-none ml-auto">
            <li class="nav-item">
              <NuxtLink
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-pink-600 hover:opacity-75"
                to="/about"
              >
                <i
                  class="fab fa-facebook-square text-lg leading-lg text-pink-600 opacity-100"
                /><span class="ml-2">About</span>
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-pink-600 hover:opacity-75"
                to="/resume"
              >
                <i
                  class="fab fa-twitter text-lg leading-lg text-pink-600 opacity-75"
                /><span class="ml-2">Resume</span>
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-pink-600 hover:opacity-75"
                to="/blog"
              >
                <i
                  class="fab fa-pinterest text-lg leading-lg text-pink-600 opacity-75"
                /><span class="ml-2">Blog</span>
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-pink-600 hover:opacity-75"
                to="/projects"
              >
                <i
                  class="fab fa-pinterest text-lg leading-lg text-pink-600 opacity-75"
                /><span class="ml-2">Projects</span>
              </NuxtLink>
            </li>
            <li class="nav-item">
              <a
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-pink-600 hover:opacity-75"
                href="mailto:ielvisd@gmail.com"
                target="_blank"
              >
                <i
                  class="fab fa-pinterest text-lg leading-lg text-pink-600 opacity-75"
                /><span class="ml-2">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="resume">
      <h1 class="projectstitle">Projects</h1>

      <div class="projectscontent">
        <section class="projects first">
          <div class="middletext">
            <h1>Jiujitsio</h1>
            <h2>
              A Brazilian jiu-jitsu journal 📓to record your training sessions,
              techniques & sparring data.
            </h2>
            <a class="journal" href="https://jiujits.io/#/devJournal"
              >Development Journal</a
            >

            <a
              class="projectButton"
              href="https://jiujits.io"
              target="_blank"
              rel="noopener noreferrer"
              >Jiujitsio</a
            >
          </div>
          <div class="projectimgdiv">
            <img
              class="projectimg"
              src="https://images.unsplash.com/photo-1515025617920-e1e674b5033c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1628&q=80"
              alt="Two people practicing jiu jitsu"
            />
          </div>
        </section>

        <section class="projects middle">
          <div class="middletext">
            <h1>FlexLog</h1>
            <h2>
              Flexlog is an app for where people can create and track their
              fitness progress and scheduled workouts.
            </h2>
            <a
              class="journal"
              href="https://elvisibarra-labs9-journal.netlify.com/"
              >Development Journal</a
            >
            <a
              class="projectButton"
              href="https://github.com/Lambda-School-Labs/labs9-workout-tracker"
              target="_blank"
              rel="noopener noreferrer"
              >FlexLog</a
            >
          </div>
          <div class="projectimgdiv">
            <img
              class="projectimg"
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80"
              alt="A person working out"
            />
          </div>
        </section>
        <section class="projects first">
          <div class="middletext">
            <h1>Lambda Notes</h1>

            <h2>
              Built with React/Redux Front End Deployed to Github Pages &
              Postgres Back End Deployed to Heroku
            </h2>
            <a
              class="projectButton"
              type="button"
              href="https://ielvisd.github.io/front-end-project-week/"
              >Lambda Notes</a
            >
          </div>
          <div class="projectimgdiv">
            <img
              class="projectimg"
              src="https://images.unsplash.com/photo-1587815280777-90694ad8c4ac?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80"
              alt="Post it notes on a wall"
            />
          </div>
        </section>

        <section class="projects middle">
          <div class="middletext">
            <h1>S&J Architects</h1>
            <h2>A mobile first designed web page</h2>
            <a
              class="projectButton"
              type="button"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ielvisd/User-Interface-Project-Week"
              >S&J Architects</a
            >
          </div>
          <div class="projectimgdiv">
            <img
              class="projectimg"
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80"
              alt="A side of a building"
            />
          </div>
        </section>

        <section class="projects first">
          <div class="middletext">
            <h1>Check Out My Github Page:</h1>
            <a
              class="projectButton"
              type="button"
              href="https://github.com/ielvisd"
              target="_blank"
              rel="noopener noreferrer"
              >@ielvisd</a
            >
          </div>
          <div class="projectimgdiv">
            <img
              class="projectimg"
              src="../../assets/img/ElvisBanksy.jpg"
              alt="Elvis and his chocolate lab Banksy"
            />
          </div>
        </section>

        <section class="projects middle">
          <div class="middletext">
            <h1>Follow Me on Twitter</h1>
            <a
              href="https://twitter.com/eltoritoelvis?ref_src=twsrc%5Etfw"
              class="twitter-follow-button"
              data-show-count="false"
              >Follow @eltoritoelvis</a
            >
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </div>
          <div class="projectimgdiv">
            <a
              class="twitter-timeline"
              data-height="250"
              data-theme="dark"
              href="https://twitter.com/ElToritoElvis?ref_src=twsrc%5Etfw"
              >Tweets by ElToritoElvis</a
            >
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </div>
        </section>
      </div>
    </div>
    <footer class="flex align-center items-center justify-center">
      <p>&copy;Elvis Ibarra 2018</p>
    </footer>
  </div>
</template>

<style scoped>
.container {
  max-width: 880px;
  margin: 0 auto;
  color: black;
  font-family: Helvetica, Arial, sans-serif;
  @apply border-2 border-gray-900 rounded;
}

.projectButton {
  border: none;
  width: 80%;
  padding: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  border-radius: 10px;
  text-decoration: none;
  background: #ef62a4;
  color: #fff;
  text-align: center;
  cursor: pointer;
}

.projects {
  margin-top: 0;
  display: flex;
  text-align: center;
  padding: 20px 20px;
}
@media (max-width: 500px) {
  .projects {
    width: 100%;
  }
}
.projects .middletext {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  align-self: center;
}
.projects .middletext h1 {
  font-weight: bold;
}
@media (max-width: 500px) {
  .projects .middletext {
    width: 100%;
  }
}
.projects button {
  padding: 30px 20%;
  background: #ef62a4;
}
.projects button a {
  text-decoration: none;
  color: white;
}
.projects .projectimgdiv {
  margin: 0 auto;
}
.projects .projectimgdiv .projectimg {
  border-radius: 50%;
  width: 300px;
  height: auto;
}
@media (max-width: 500px) {
  .projects .projectimgdiv {
    display: none;
  }
}
.projects.first {
  background: gainsboro;
}
.projects.middle {
  flex-direction: row-reverse;
}

.projectstitle {
  text-align: center;
  margin: 12px;
  color: darkblue;
  padding: 10px 0;
}
</style>
