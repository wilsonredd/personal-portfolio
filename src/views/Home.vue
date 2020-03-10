<template>
<div class="home">
    <div class="header">
        <h2>Hey, I'm</h2>
        <h1>Wilson Redd</h1>
    </div>
    <div class="home-content">
        <div class="bio">
            <h1>Who Am I?</h1>
            <hr>
            <h2>Father, Car Enthusiast, Lover of Technology</h2>

            <p>My name is Wilson Redd. I am a student at Brigham Young University in
                Provo, Utah. I am studying Computer Science, but began studying mechanical engineering.
                After I graduate in April, I will work as a software engineer at Amazon Robotics in Boston,
                Massachusetts.</p>

            <p>I have been married for almost four years, have one super cute baby girl,
                and love spending time with my 7 brothers and sisters (and two parents).
                I grew up in Idaho, so whatever stereotypes you now have about me could
                possiblt be true.</p>

            <p>I am a lifelong learner. I enjoy reading "boring," non-fiction books and
                watching the news. I would love to become a construction crane operator or a
                helicopter pilot if the whole software engineering career falls through.</p>

            <p>Anything else? I am sure you will learn a lot more about me as you
                take a look at my portfolio and blog. If that does not cover it reach out
                to me via the contact tab.</p>
        </div>
        <div class="my-work">
            <h1>My Work</h1>
            <hr>
            <p>Check out the cool projects I have worked/am working on in my
                <router-link to="/portfolio"><strong>PORTFOLIO</strong></router-link>.</p>

            <p>Check out the interesting things I am learning on my
                <router-link to="/blog"><strong>BLOG</strong></router-link>.</p>


        </div>
    </div>
</div>
</template>

<script>

</script>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
}

.header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)),
        url('/images/landing-bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 450px;
    color: #FFFFFF;
}

h1 {
    font-family: 'Raleway', sans-serif;
}

.header>h2 {
    font-family: 'Lato', sans-serif;
}

.bio {
    margin: 30px 10px 0px 10px;
    text-align: center;
}

.bio>h2 {
    margin: 10px 0px 20px 0px;
}

.bio>p {
    margin: 10px 5px 0px 5px;
    text-align: left;
}

.my-work {
    text-align: center;
    margin: 30px 10px 10px 10px;
}

.my-work>hr {
    margin-bottom: 10px;
}

.my-work>p {
    margin: 10px 5px 0px 5px;
}

strong {
    font-family: 'Raleway', sans-serif;
    color: #2F4F4F;
}

@media only screen and (min-width: 901px) {
    .home-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 650px;
        margin: 0 auto;
    }

    .my-work {
        width: 100%;
    }
}
</style>
