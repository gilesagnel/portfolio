<template>
  <div>
    <section id="home" class="flex flex-col-reverse md:flex-row justify-left xl:space-x-54 lg:space-x-34 sm:space-x-12 xl:p-8  mx-auto">
      <div class="w-2/3 flex flex-col space-y-4 pr-60">
        <div class="mt-4 xl:mt-0">
          <h2 class="3xl:text-2xl text-greenBlue">
            <span class="text-white lg:text-5xl tracking-normal font-bold">{{$t('myName')}}</span>
          </h2>
        </div>
        <div>
          <h3 class="text-greenBlue text-3xl 2xl:text-6xl tracking-normal focus-in-expand ">{{ $t('job') }}</h3>
        </div>
        <div>
          <p class="text-sm lg:text-base leading-loose tracking-relaxed lg:leading-loose lg:tracking-relaxed text-slateGray whitespace-pre-line" >{{$t('Aboutme')}}</p>
        </div>
        
        <!-- See my resume -->
        <a href="https://drive.google.com/file/d/15yHJjoG8r2xnRB1i7hS9qlHPhuvbWs_2/view?usp=sharing" target="_blank" class="text-xs text-white lg:text-base bg-transparent w-full 2xl:w-1/3 hover:bg-greenBlue font-semibold uppercase text-center hover:text-white py-2 px-8 border border-white hover:border-transparent rounded">
          {{$t('seeResume')}}
        </a>

        <!-- Social media icons -->
        <v-links/>
        
      </div>
      <div class="w-1/3">
        <img class="2xl:w-2/3 slit-in-diagonal-1 rounded-lg" src="../assets/agnel.jpg" alt="Agnel"/>
      </div>
    </section>

    <!-- Scroll down -->
    <div class="flex justify-center items-center text-2xl text-gray-500 py-6">
      <!-- <div><a href="#skills"><i class="fas fa-chevron-down"></i></a></div> -->
    </div>

    <div id="aboutme" class="py-6">
      <AboutMe />
    </div>

    <!-- Skills Section -->
    <!-- <section id="skills" >
      <Skills/>
    </section> -->


    <!-- <scroll-to-top ref="scrollTop" /> -->

  </div>
</template>


<script>
import {mapGetters} from 'vuex'
// import typical from "vue-typical"
import VLinks from '../components/links.vue'
// import ScrollToTop from '../components/ScrollToTop.vue'
// import Skills from '../components/Skills.vue'
import AboutMe from '../components/AboutMe.vue'

export default {
  name: "Home",
  components: {VLinks, AboutMe},
  data() {
    return {};
  },
  computed:{
    ...mapGetters({isTranslated: 'isTranslated'})
  },
  methods:{
    goToResume(){
      this.$router.push({ name: 'Resume' })
    }
  },
  mounted(){
    window.addEventListener('scroll', this.$refs.scrollTop.scrollListener)
  },
  destroyed(){
    this.$store.commit('ToggleIsTranslated')
  }
};
</script>


<style scoped>
.typicalWrapper::after {
  content: "|";
  animation: blink 1s infinite step-start;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}

@keyframes slit-in-diagonal-1 {
  0% {
    transform: translateZ(-800px) rotate3d(1, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  54% {
    transform: translateZ(-160px) rotate3d(1, 1, 0, 87deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }
  100% {
    transform: translateZ(0) rotate3d(1, 1, 0, 0);
    animation-timing-function: ease-out;
  }
}

@keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0);
    opacity: 1;
  }
}

.slit-in-diagonal-1 {
  -webkit-animation: slit-in-diagonal-1 0.45s ease-out both;
  animation: slit-in-diagonal-1 0.45s ease-out both;
}

.focus-in-expand {
  animation: focus-in-expand 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
</style>
