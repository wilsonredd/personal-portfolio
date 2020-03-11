<template>
<div class="wrapper">
    <h1>My Portfolio</h1>
    <div class="projects">
        <div class="project" v-for="project in projects" :key="project.id">
            <img :src="'/images/'+project.image" alt="">
            <div class="description">
                <h1>{{project.title}}</h1>
                <p>{{project.date}}</p>
                <div class="tags">
                    <p v-for="tag in project.tags" :key="tag.id">{{ tag.tag }}</p>
                </div>
                <p>{{project.description}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Portfolio',
    computed: {
        projects() {
            return this.$root.$data.portfolio;
        }
    },
}
</script>

<style scoped>
.wrapper {
    padding: 0px 10px 0px 10px;
    font-family: 'Lato', sans-serif;
}

.wrapper>h1 {
    text-align: center;
}

.projects {
    display: flex;
    flex-direction: column;
}

h1 {
    font-size: 32px;
    font-family: 'Raleway', sans-serif;
}

.project {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px 0px 10px 0px;
    border-bottom: 1px solid #ddd;
    /* margin: 0; */
}

.project:last-of-type {
    border-bottom: none;
}

.project img {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 300px;
}

.description {
    display: flex;
    flex-direction: column;
}

.description p {
    margin: 0;
}

.tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 5px 0px 5px 0px;
    justify-content: center;
    align-items: center;
}

.tags>p {
    margin-right: 5px;
    padding: 0px 5px 0px 5px;
    text-align: center;
    border-radius: 5%;
    border: 2px solid #EDE576;
}

@media only screen and (min-width: 901px) {
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 700px;
        margin: 0 auto;
    }

    .project {
        flex-direction: row;

    }

    .description {
        margin-left: 10px;
    }

    .description h1 {
        font-size: 24px;
    }
}
</style>
