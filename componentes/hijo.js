Vue.component('hijo', {
    template: /*template*/
        `<div class="p-4 bg-danger">
            <h2>COMPONENTE HIJO <b>{{parametro}}</b></h2>
            <h2>NUMERO DEL COMPONENTE HIJO: <b>{{contadorHijo}}</b></h2>
            <button class="btn btn-success" @click="contador">+</button>
        </div>`,
    props: ['parametro'],
    data() {
        return {
            contadorHijo: 0
        }
    },
    methods: {
        contador() {
            this.contadorHijo++;
            this.$emit('contadorHijo', this.contadorHijo);
        }
    },
    mounted() {
        this.$emit('contadorHijo', this.contadorHijo);
    }
})