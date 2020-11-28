<template>
  <body>
    <div class="container home">
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

      <div class="homenamepic flex flex-col align-center items-center">
        <p class="text-3xl text-blue-800">Elvis Ibarra</p>
        <img
          class="profilepic"
          src="../assets/img/ElvisBanksy.jpg"
          alt="Image of Elvis Ibarra and his chocolate lab Banksy."
        />
      </div>

      <footer class="flex flex-col align-center items-center">
        <p class="text-base">&copy; Elvis Ibarra 2020</p>
      </footer>
    </div>
  </body>
</template>

<style scoped>
.container {
  max-width: 880px;
  margin: 0 auto;
  color: black;
  font-size: 1.6rem;
  font-family: Helvetica, Arial, sans-serif;
}

.container.home {
  border: solid black;
}

.container.home .homenamepic {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
@media (max-width: 500px) {
  .container.home .homenamepic {
    margin-top: 20px;
  }
}
.container.home .profilepic {
  width: auto;
  height: 300px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  align-self: center;
  margin: 30px 0;
}

@media (max-width: 500px) {
  .container.home .profilepic {
    margin: 30px;
  }
}
</style>
