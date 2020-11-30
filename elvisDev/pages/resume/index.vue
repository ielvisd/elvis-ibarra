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

    <iframe
      class="-mt-24"
      src="https://resume.creddle.io/embed/7br3kyyjls4"
      width="880"
      height="1100"
    ></iframe>

    <footer>
      <p>&copy;Elvis Ibarra 2018</p>
    </footer>
  </div>
</template>

<style scoped>
.container {
  max-width: 880px;
  margin: 0 auto;
  color: bg-gray-900;
  font-size: 1.6rem;
  font-family: Helvetica, Arial, sans-serif;
}

.resume header {
  margin: 20px 0;
  padding: 0 5%;
  width: 100%;
}
.resume header nav {
  display: flex;
  justify-content: space-between;
}
@media (max-width: 500px) {
  .resume header nav {
    flex-direction: column;
    align-items: center;
  }
}
.resume header a {
  color: #ef62a4;
  text-decoration: none;
}
@media (max-width: 500px) {
  .resume header a {
    margin: 5px 0;
    font-size: 2rem;
  }
}

.resume .Workexperience a {
  color: #ef62a4;
}
.resume header a:hover {
  text-decoration: underline;
  color: white;
}
.resume h3 {
  font-size: 2rem;
  color: #ef62a4;
  font-weight: bold;
}
.resume h4 {
  font-size: 1.75rem;
  color: black;
  font-weight: bold;
}
.resume .Namepic {
  display: flex;
  justify-content: space-between;
  border-top: solid black;
  font-weight: bold;
}
.resume .Namepic .profilepic {
  width: auto;
  height: 300px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  margin: 75px 5%;
  align-self: center;
  border: solid black;
}
@media (max-width: 500px) {
  .resume .Namepic .profilepic {
    display: none;
  }
}
.resume .Namepic h1 {
  font-size: 3rem;
  color: #ef62a4;
}
.resume .Namepic .middletext {
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  padding-top: 10%;
  padding-bottom: 15%;
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
.resume .Namepic .middletext button:hover {
  background: solid blue;
}
@media (max-width: 500px) {
  .resume .Namepic .middletext {
    justify-content: space-around;
    height: 150px;
    padding-top: 0%;
    padding-bottom: 20px;
  }
}
@media (max-width: 500px) {
  .resume .Namepic {
    margin-top: 75px;
  }
}
.resume .main-content .IntroSkills {
  display: flex;
  border-top: solid black;
  padding: 30px 0%;
}

.resume .languages h3 {
  margin-bottom: 20px;
}
.resume .main-content .IntroSkills h3 {
  margin-bottom: 5px;
  font-size: 2rem;
  color: #ef62a4;
  font-weight: bold;
}
.resume .main-content .topcontent {
  width: 50%;
  padding-left: 7%;
  padding-right: 7%;
}
.resume .main-content .topcontent a {
  color: #ef62a4;
}
.resume .main-content .topcontent ul.skills {
  margin-top: 0;
  list-style-type: square;
}
.resume .Workexperience {
  border-top: solid black;
  padding: 30px 7%;
}
.resume .Workexperience .workcontent {
  margin-top: 20px;
}
.resume .Workexperience .workcontent p {
  margin: 5px 0;
}
.resume .Workexperience .workcontent h4 {
  margin-bottom: 5px;
}
.resume .languages {
  padding: 0 7%;
}
.resume footer {
  margin-top: 20px;
  text-align: center;
  font-weight: bold;
}
</style>
