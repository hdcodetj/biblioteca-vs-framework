const app = Vue.createApp({

    data() {

        return {

            novoEstudo: "",

            estudos: []

        };

    },


    methods: {

        adicionar() {

            this.estudos.push(this.novoEstudo);

            this.novoEstudo = "";

        },


        ordenar() {

            this.estudos.sort();

        }

    }

});


app.mount("#app");