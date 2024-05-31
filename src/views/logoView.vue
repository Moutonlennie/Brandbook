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
        </div>
        <div class="page">
            <div id="brandbook-right">
                <div id="logo">
                    <h1>Logo</h1>
                    <h2 id="hoofdlogo">Hoofdlogo</h2>
                    <div id="container-card">
                        <cardComponent/>
                    </div>
<br>
                    <h2 id="varianten">Varianten</h2>
                    <p>Geen card</p>
<br>
                    <gebruikComponent/>
                </div>
            </div>
        </div>
    </div>
</template>