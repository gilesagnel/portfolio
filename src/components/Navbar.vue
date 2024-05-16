<template>
  <nav class="flex flex-nowrap justify-between items-center text-gray-700 dark:text-gray-300 xl:text-xl text-base pb-8 xl:pb-12 flex-col lg:flex-row lg:space-y-0 space-y-5">
    <!-- <div>
      <router-link class="pr-6 font-light hover:text-gray-500" to="/">{{$t('Home')}}</router-link>
      <router-link class="pr-6 font-light hover:text-gray-500" to="/">{{$t('Resume')}}</router-link>
      <button class="rounded-lg bg-turquoise dark:bg-blue-500 hover:bg-fakhti py-1 px-2 lg:py-2 lg:px-4 text-sm lg:text-base text-white font-semibold" @click="goToRouter('Contact')">
        {{$t('Contact')}}
      </button>

      <i v-if="!isDarkMode" @click="ToogleDarkMode" class="fas fa-moon ml-6 cursor-pointer border px-2 py-1 rounded-xl"></i>
      <i v-else @click="ToogleDarkMode" class="fas fa-sun ml-6 cursor-pointer text-yellow-500 border px-2 py-1 rounded-xl"></i>

    </div> -->
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
          { id: 0, flag: "us", language: "en", title: "English" },
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
        print(this.isDarkMode)
        this.$router.go(0)
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