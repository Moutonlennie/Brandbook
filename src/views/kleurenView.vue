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
                        <h1>Kleuren</h1>
                        <div id="search">
                            <p>Search</p>
                            <i class="bi bi-search"></i>
                        </div>
                    </div>
                    <h2>Merkkleuren</h2>
                    <h3>Primaire</h3>
                    <div id="kleuren-container">
                        <div id="kleuren-marijn">
                            <h4>Marijn</h4>
                            <p>HEX: #0366FB</p>
                            <p>PMS: 285 C</p>
                            <p class="bottom-margin">CYMYK: 100 45 0 0</p>
                        </div>

                        <div id="kleuren-grijs">
                            <h4>Grijs</h4>
                            <p>HEX: #F2F8FC</p>
                            <p>PMS: 656 C</p>
                            <p class="bottom-margin">CYMYK: 10 2 0 0</p>
                        </div>
                    </div>

                    <h3>Secundaire</h3>
                    <div id="kleuren-containterTwee">
                        <div id="kleuren-baby">
                            <h4>Baby</h4>
                            <p>HEX: #00C7FF</p>
                            <p>PMS: 2985 C</p>
                            <p class="bottom-margin">CYMYK: 65 0 0 0</p>
                        </div>

                        <div id="kleuren-indigo">
                            <h4>Indigo</h4>
                            <p>HEX: #6D12F3</p>
                            <p>PMS: 2098 C</p>
                            <p class="bottom-margin">CYMYK: 92 97 0 0</p>
                        </div>

                        <div id="kleuren-orchidee">
                            <h4>Ochidee</h4>
                            <p>HEX: #B17DFF</p>
                            <p>PMS: 265 C</p>
                            <p class="bottom-margin">CYMYK: 35 55 0 0</p>
                        </div>

                        <div id="kleuren-aardbei">
                            <h4>Aardbei</h4>
                            <p>HEX: #ff535A</p>
                            <p>PMS: 656 C</p>
                            <p class="bottom-margin">CYMYK: 10 2 0 0</p>
                        </div>

                        <div id="kleuren-saffraan">
                            <h4>Saffraan</h4>
                            <p>HEX: #FDB813</p>
                            <p>PMS: 142 C</p>
                            <p class="bottom-margin">CYMYK: 0 30 100 0</p>
                        </div>

                        <div id="kleuren-jade">
                            <h4>Jade</h4>
                            <p>HEX: #15D383</p>
                            <p>PMS: 2412 C</p>
                            <p class="bottom-margin">CYMYK: 70 0 55 0</p>
                        </div>

                        <div id="kleuren-zwart">
                            <h4>Zwart</h4>
                            <p>HEX: #000000</p>
                            <p>PMS: PMS black</p>
                            <p class="bottom-margin">CYMYK: 0 0 0 100</p>
                        </div>
                    </div>

<br>
                    <gebruikComponent/>
                </div>
            </div>
        </div>
    </div>
</template>