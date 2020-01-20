Vue.component('padre', {
    template: /*template*/
        `<div class="p-3 bg-dark text-white">
            <input type="text" class="form-control" v-model="parametro">
            <h1>COMPONENTE PADRE {{parametro}}</h1>
            <h1>NUMERO DEL COMPONENTE HIJO : <b>{{contadorPadre}}</b></h1>
            <hijo :parametro="parametro" @contadorHijo="contadorPadre=$event"></hijo>
        </div> `,
    data() {
        return {
            parametro: "PARAMETRO HIJO",
            contadorPadre: 0
        }
    }
});