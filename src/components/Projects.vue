<template>
    <div>
        <Title titlename="Projects" />
        <div class="flex container flex-wrap justify-center">
            <div v-for="(project, index) in projects" :key="index" class="flex flex-col w-2/5 h-1/3 m-6 bg-white shadow rounded-lg">
                <div class="flex justify-between">
                    <h3 class="text-xl px-5 py-3 text-emerald">{{ project.name }}</h3>
                    <a :href="project.link" target="_blank" class="self-center mr-2">
                        <img class="inline h-6 w-6 m-1 hover:shadow" src="../assets/link-icon.svg" alt="Link Icon"></a>
                </div>
                <div class="flex">
                    <img :src="project.image" />
                </div>
                <p class="mx-3 my-6">{{ project.description }}</p>
                <div class="flex flex-wrap m-3">
                    <div v-for="(tech, ti) in project.technologies" :key="ti"
                        class="flex items-center rounded-full bg-greenBlue shadow-lg shadow-greenBlue px-3 py-1 m-1.5 text-xs font-medium leading-5 text-white">
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
                    technologies: ['Pytorch', 'Python', 'Computer Vision', 'Generative Model']
                },
                {
                    name: 'Seed Image Classification',
                    link: 'https://github.com/gilesagnel/FGVC',
                    image: require('../assets/images/projects/seeds.png'),
                    description: 'Fine-Grained Image Classification for Seed Images',
                    technologies: ['Pytorch', 'Python', 'Computer Vision']
                },
                {
                    name: 'Student Dropout Prediction',
                    link: 'https://github.com/gilesagnel/StudentDropoutML',
                    image: require('../assets/images/projects/dropout.jpeg'),
                    description: 'The machine learning model will predict whether a student will drop out of the course based on the given data.',
                    technologies: ['Scikit-learn', 'Python', 'Jupyter']
                },
                {
                    name: 'Trajectory Following',
                    link: 'https://github.com/gilesagnel/TrajectoryFollowing',
                    image: require('../assets/images/projects/tf.png'),
                    description: 'Trajectory Following Robot use deep reinforcement learning',
                    technologies: ['Pytorch', 'Python', 'Reinforcement Learning', 'Deep Learning', 'ROS',
                                  'Gazebo']
                },
                {
                    name: 'Mountain Climping',
                    link: 'https://github.com/gilesagnel/DRL-games',
                    image: require('../assets/images/projects/mountain_car.png'),
                    description: 'Play the Mountain Climbing game using Hindsight Experience Replay (HER) and Deep Q-Network (DQN)',
                    technologies: ['Pytorch', 'Python', 'Reinforcement Learning', 'Deep Learning']
                },
                {
                    name: 'Breakout',
                    link: 'https://github.com/gilesagnel/DRL-games',
                    image: require('../assets/images/projects/breakout.png'),
                    description: 'Play the Atari Breakout game using a Deep Q-Network (DQN)',
                    technologies: ['Pytorch', 'Python', 'Reinforcement Learning', 'Deep Learning']
                },
                // Add more projects as needed
            ]
        };
    }
}
</script>
