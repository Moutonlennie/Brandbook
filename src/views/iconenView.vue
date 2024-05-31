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
                    <h1>Logo</h1>
                    <h2>Hoofdlogo</h2>
                    <div id="container-card">
                        <cardComponent/>
                    </div>
<br>
                    <h2>Varianten</h2>
                    <p>Geen card</p>
<br>
                    <gebruikComponent/>
                </div>
<br><br>
                <div id="kleuren">
                    <h1>Kleuren</h1>
                    <h2>Merkkleuren</h2>
<br>
                    <h3>Primaire</h3>
                    <p>Geen kleuren</p>
<br>
                    <h3>Secundaire</h3>
                    <p>Geen kleuren</p>
<br>
                    <gebruikComponent/>
                </div>
<br><br>
                <div id="Typografie">
                    <h1>Typografie</h1>
                    <h2>Koppen</h2>
                    <p>Geen typografie</p>
<br>
                    <h2>Tekst</h2>
                    <p>Geen typografie</p>
<br>
                    <gebruikComponent/>
                </div>
<br><br>
                <div id="Elementen">
                    <h1>Elementen</h1>
                    <p>Geen element gevonden</p>
<br>
                    <gebruikComponent/>
                </div>
<br><br>
                <div id="Iconen">
                    <h1>Iconen</h1>
                    <p>Geen icoon gevonden</p>
<br>
                    <gebruikComponent/>
                </div>
            </div>
        </div>
    </div>
</template>