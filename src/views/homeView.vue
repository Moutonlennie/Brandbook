<template>
    <header class="headerHome">
        <div id="home-text">
            <h3>Brandbook</h3>
            <h1>PMO</h1>
        </div>
        <div id="home-image">
            <img class="img-hero" src="@/assets/Visual_Home.png" alt="logo">
        </div>
    </header>

    <main class="mainHome">
        <div id="home-intro">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat</p>
        </div>
    </main>

    <div id="container-card">
        <div id="card">
            <div class="cards">
                <img class="card-img" src="@/assets/logo_pmo.png" alt="logo pmo">
                <div id="card-text">
                    <h1>Logo</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <button @click="navigateTo('brandbook/logo')" class="btn-card">Ontdek</button>
            </div>

            <div class="cards">
                <img class="card-img" src="@/assets/kleuren.png" alt="logo pmo">
                <div id="card-text">
                    <h1>Kleuren</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <button @click="navigateTo('brandbook/kleuren')" class="btn-card">Ontdek</button>
            </div>


            <div class="cards">
                <img class="card-img" src="@/assets/lettertype.png" alt="Lettertype">
                <div id="card-text">
                    <h1>Lettertype</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <button @click="navigateTo('brandbook/typografie')" class="btn-card">Ontdek</button>
            </div>


            <div class="cards">
                <img class="card-img" src="@/assets/elementen.png" alt="Elementen">
                <div id="card-text">
                    <h1>Elementen</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <button @click="navigateTo('brandbook/elementen')" class="btn-card">Ontdek</button>
            </div>


            <div class="cards">
                <img class="card-img" src="@/assets/iconen.png" alt="Iconen">
                <div id="card-text">
                    <h1>Iconen</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <button @click="navigateTo('brandbook/iconen')" class="btn-card">Ontdek</button>
            </div>

 

        </div>
    </div>
</template>

<script>
export default {
    methods: {
        navigateTo(route) {
            this.$router.push({ path: `/${route}` });
        },
    },
}
</script>
