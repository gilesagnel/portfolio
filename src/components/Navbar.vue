<template>
  <nav class="flex flex-nowrap justify-between items-center text-gray-700 dark:text-gray-300 xl:text-xl text-base pb-8 xl:pb-12 flex-col lg:flex-row lg:space-y-0 space-y-5">
    <div>
      <h1 @click="goToRouter('Home')" style="font-family: 'Fuggles', cursive;" class="text-6xl tracking-wider font-extralight cursor-pointer">
        Agnel Fernando
      </h1>
    </div>
    <div>
      <router-link class="pr-6 font-light hover:text-gray-500" to="/">{{$t('Home')}}</router-link>
      <router-link class="pr-6 font-light hover:text-gray-500" to="/">{{$t('Resume')}}</router-link>
      <button class="rounded-lg bg-turquoise dark:bg-blue-500 hover:bg-fakhti py-1 px-2 lg:py-2 lg:px-4 text-sm lg:text-base text-white font-semibold" @click="goToRouter('Contact')">
        {{$t('Contact')}}
      </button>

      <i v-if="!isDarkMode" @click="ToogleDarkMode" class="fas fa-moon ml-6 cursor-pointer border px-2 py-1 rounded-xl"></i>
      <i v-else @click="ToogleDarkMode" class="fas fa-sun ml-6 cursor-pointer text-yellow-500 border px-2 py-1 rounded-xl"></i>

    </div>
  </nav>
</template>


<script>
import i18n from "../i18n/index.js"

export default {
    name:'VNavbar',
    data(){
      return{
        IamNotInHome: true,
        choosenLanguage: "",
        choosenLan: "",
        isDarkMode: false,
        languages: [
          // { flag: 'ma', language: 'ma', title: 'Tifinagh' },
          { id: 0, flag: "us", language: "en", title: "English" },
          { id: 1, flag: "eg", language: "ar", title: "Arabic" },
          { id: 2, flag: "tr", language: "tr", title: "Turkish" },
          { id: 3, flag: "fr", language: "fr", title: "French" },
        ],
      }
    },
    watch:{
        $route (to){
            if(to.path != "/"){
              this.IamNotInHome = false
            }else{
              this.IamNotInHome = true
            }
        }
    },
    methods: {
      changeLocale(index) {
        i18n.locale = this.languages[index].language
        this.choosenLanguage = this.languages[index].flag
        this.choosenLan = this.languages[index].title
        this.$store.commit('ToggleIsTranslated')
        this.$refs.dropDown.hide()
      },
      goToRouter(destination){
        this.$router.push({ name: destination })
      },
      ToogleDarkMode(){
        this.isDarkMode ? localStorage.theme = 'light' : localStorage.theme = 'dark'
        this.$router.go(0)
      }
    },
    created(){
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      this.isDarkMode = true
    } else {
      document.documentElement.classList.remove('dark')
      this.isDarkMode = false
      }
    },
    mounted() {
      this.choosenLanguage = 'us'
    }
};
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Fuggles&display=swap");
</style>