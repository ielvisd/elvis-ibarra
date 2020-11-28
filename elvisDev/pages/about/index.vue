<template>
  <body>
    <div class="container lambda">
      <header class="rest">
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
                  <a
                    class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-pink-600 hover:opacity-75"
                    href="#pablo"
                  >
                    <i
                      class="fab fa-twitter text-lg leading-lg text-pink-600 opacity-75"
                    /><span class="ml-2">Resume</span>
                  </a>
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
                  <a
                    class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-pink-600 hover:opacity-75"
                    href="#pablo"
                  >
                    <i
                      class="fab fa-pinterest text-lg leading-lg text-pink-600 opacity-75"
                    /><span class="ml-2">Projects</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-pink-600 hover:opacity-75"
                    href="#pablo"
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
      </header>

      <section class="weekly">
        <h2 class="mt-4 mb-4">About Me</h2>

        <div class="text-content mb-4">
          <div class="abouthomenamepic">
            <img
              class="aboutprofilepic"
              src="../../assets/img/ElvisBanksy.jpg"
              alt="Image of Elvis Ibarra and his chocolate lab Banksy."
            />
          </div>

          <h4 class="mb-4"><span class="aboutday">Hello! 👋</span></h4>

          <p class="text-base">
            My name is Elvis Ibarra and I am a full stack web engineer 👨‍💻 who is
            passionate about new technologies 🔗, education 📚, and mission
            driven work ❤️. I have prior experience in civil engineering (5+
            years) working on design 🎨, construction management 👷 &
            sustainability 🌳 and teaching high school STEM classes (5+ years)
            👨‍🏫.

            <br />
            <br />
            I attended U.C. Berkeley 🐻 where I obtained my bachelors in Civil
            Engineering 🏗️. Last year I decided to pursue my interest in coding
            and computer programming and began a 9 month journey at Lambda
            School 🏫 to become a Full Stack Web Engineer where I have built a
            multitude of projects with technologies such as HTML/CSS,
            JavaScript, & React to name a few 🔥.

            <br />
            <br />
            When I’m not programming you can find me on the mats practicing
            Jiu-Jitsu 🤼 or out walking my dogs 🐶🐕🐩.

            <br />
            <br />
            Thank you for visiting my page, have a great day! 👋
          </p>
        </div>
        <div class="twitter">
          <div class="text-content">
            <p>
              Follow me on Twitter:
              <a
                href="https://twitter.com/eltoritoelvis?ref_src=twsrc%5Etfw"
                class="twitter-follow-button"
                data-size="large"
                data-show-count="false"
                >Follow @eltoritoelvis</a
              >
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
            </p>
          </div>

          <a
            class="twitter-timeline"
            data-width="500"
            data-height="400"
            data-theme="dark"
            data-link-color="#EF62A4"
            href="https://twitter.com/eltoritoelvis?ref_src=twsrc%5Etfw"
            >Tweets by ElToritoElvis</a
          >
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>
      </section>
      <footer>
        <p>&copy;Elvis Ibarra 2018</p>
      </footer>
    </div>
  </body>
</template>

<style scoped>
.container {
  max-width: 880px;
  margin: 0 auto;
  color: black;
  font-family: Helvetica, Arial, sans-serif;
  border: 2px solid black;
}

.weekly {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 3%;
  margin-top: -12px;
}
.weekly .intro {
  margin-top: 0;
}

.weekly .cs14 {
  color: #ef62a4;
}
.weekly .weeklytitle {
  color: darkblue;
}
.weekly .daytags {
  color: #ef62a4;
}
.weekly h4 {
  margin-top: 0;
}
.weekly .day {
  color: darkblue;
}
.weekly p {
  line-height: 1.5rem;
}
.weekly h2 {
  text-decoration: underline;
  font-weight: bold;
}

.weekly .text-content p {
  margin-top: 0;
}
.weekly .text-content h4 {
  font-weight: bold;
}

.twitter-tweet {
  border: dashed #ef62a4;
}

.postImages {
  border: dashed #ef62a4;
}

footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.aboutprofilepic {
  width: auto;
  height: 300px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  align-self: center;
  margin: 0;
  margin-bottom: 20px;
  border: solid darkblue;
}
.abouthomenamepic {
  display: flex;
  flex-direction: column;
  margin-top: 0;
}
</style>
