<template>
<div id="app">
    <div id="menu">
        <div id="brand">
            <router-link to="/">
                <img src="/images/logo.png">
            </router-link>
        </div>
        <div id="nav">

            <router-link to="/portfolio">
                <div class="menu-item portfolio-link">
                    <p>PORTFOLIO</p>
                </div>
            </router-link>

            <router-link to="/blog">
                <div class="menu-item blog-link">
                    <p>BLOG</p>
                </div>
            </router-link>
        </div>
    </div>
    <router-view />
    <div class="footer">
        <a href="https://github.com/wilsonredd/personal-portfolio.git" target="_blank">
            https://github.com/wilsonredd/personal-portfolio.git </a>
    </div>
</div>
</template>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
}

#menu {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5px;
    grid-template-areas: "brand nav";
    padding: 20px 5px 20px 5px;
    margin: 0px 5px 10px 5px;
    border-bottom: 1px solid #e3e3e3;
}

#brand {
    display: flex;
    justify-content: center;
    align-items: center;
}

#brand img {
    height: 100px;
}

ul {
    list-style-type: none;
}

#nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#nav a:hover {
    text-decoration: none;
}

.menu-item {
    display: flex;
    flex-direction: column;
    font-size: 1.1em;
    font-family: 'Raleway', sans-serif;
}

.router-link-active {
    text-decoration: none !important;
}

.menu-item p {
    margin: 0px;
    color: #2F4F4F;
}

.blog-link {
    margin-top: 20px;
}

.footer {
    margin: 0;
    padding: 5px;
    text-align: center;
}

.footer>a {
    color: #2F4F4F;
    text-decoration: none;
}

@media only screen and (min-width: 901px) {
    #menu {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: "none brand nav";
    }

    #brand {
        grid-area: brand;
    }

    #nav {
        grid-area: nav;
        flex-direction: row;
    }

    .menu-item {
        font-size: 1.5em;
    }

    .blog-link {
        margin: 0;
        margin-left: 50px;
    }
}
</style>
