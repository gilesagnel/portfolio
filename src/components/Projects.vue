<template>
    <div>
        <Title titlename="Projects" />
        <div class="flex container">
            <div v-for="(project, index) in projects" :key="index" class="flex flex-col w-1/3 h-1/3 m-6 bg-white shadow rounded-lg">
                <div class="flex justify-between">
                    <h3 class="text-xl px-5 py-3 text-emerald">{{ project.name }}</h3>
                    <a :href="project.link" target="_blank" class="self-center mr-2">
                        <img class="inline h-6 w-6 m-1 hover:shadow" src="../assets/link-icon.svg" alt="Link Icon"></a>
                </div>
                <div class="flex">
                    <img :src="project.image" />
                </div>
                <p class="mx-3 my-6">{{ project.description }}</p>
                <div class="flex mx-3 my-6">
                    <div v-for="(tech, ti) in project.technologies" :key="ti"
                        class="flex items-center rounded-full bg-greenBlue shadow-lg shadow-greenBlue px-3 py-1 mx-1.5 text-xs font-medium leading-5 text-white">
                        {{ tech }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Title from './Title.vue';

export default {
    name: 'Projects',
    components: {
        Title
    },
    data() {
        return {
            projects: [
                {
                    name: 'CycleGan',
                    link: 'https://github.com/gilesagnel/CycleGan',
                    image: require('../assets/images/projects/cycleGan.png'),
                    description: 'Implementation of CycleGan in Pytorch',
                    technologies: ['Pytorch', 'Python', 'bash']
                },
                {
                    name: 'Seed Image Classification',
                    link: 'https://github.com/gilesagnel/FGIC',
                    image: require('../assets/images/projects/seeds.png'),
                    description: 'Fine-Grained Image Classification for Seed Images',
                    technologies: ['Pytorch', 'Python', 'bash']
                },
                // Add more projects as needed
            ]
        };
    }
}
</script>
