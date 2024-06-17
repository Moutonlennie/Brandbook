<script>
import cardComponent from '@/componenten/cardComponent.vue';
import gebruikComponent from '@/componenten/gebruikComponent.vue';

export default {
    components: {
        cardComponent,
        gebruikComponent
    },
}
</script>

<template>
    <div id="brandbook-container">
        <div id="brandbook-left">
            <zijNavComponent :navItems="navItems"/>
            
        </div>
        <div class="page">
            <div id="brandbook-right">
                <div id="logo">
                    <div id="logo-titel">
                        <h1>Typografie</h1>
                        <div id="search">
                            <p>Search</p>
                            <i class="bi bi-search"></i>
                        </div>
                    </div>
                    <div id="koppen">
                        <div id="titel">
                            <h2>Koppen</h2>
                            <div id="download">
                                <p>Download font</p>
                                <i class="bi bi-download"></i>
                            </div>
                        </div>
                        <div id="typografieKoppen">
                            <h4>Vary</h4>
                            <div id="variatiesKoppen">
                                <p>light</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>  
                            </div>
                        </div>
                    </div>
<br>
                    <h2>Tekst</h2>
                    <div id="tekst"></div>
<br>
                    <gebruikComponent/>
                </div>
            </div>
        </div>
    </div>
</template>