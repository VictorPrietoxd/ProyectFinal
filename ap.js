let app = new Vue({
    el:'#app',
    data() {
        return{
            nombre: "Cajera",
            selecIngredientID: undefined,
            tipoIngredientes: [],
            counter: 0,
            modal: false,
            ingreds: {},
            cart: []
            // nombre: "Kevin",
            // categorias: ["carnes", "verduras", "condimentos", "extras", "embutidos"]
            
        };
    },
    mounted() {
        this.getTipoIngredientes();
    },
    computed: {
        counterCart(){
            // var busqueda = _.find(this.shared.cart, ['id',this.ingreds.id])
            // if(typeof busqueda == 'object'){
            //    return busqueda.counter
            // }else{
            //   return 0;
            // }
        },
        selecIngredient(){
            if (this.selecIngredientID) {
                return this.ingreds.find(p => p.id === this.selecIngredientID)
            }
            return this.ingreds[0]
        }
    },
    methods:{
        getTipoIngredientes() {
            axios
            .get('https://bembosv2.herokuapp.com/TipoIngredientes/')
                .then( response => {
                    this.tipoIngredientes = response.data
                    // console.log(response.data[1].ingrediente[1].ingrediente)
                    // console.log(response.data)

                    // this.tipo = response.data.lenght.tipo.nombre
                    // // console.log(response.data)

                    // this.tipo = () => {for(const i = 0; i < response.data.length; i++) {
                    //     return response.data[i].tipo.nombre;  // (o el campo que necesites)
                    // }}
                    // console.log(this.tipo(0))
                })
                .catch(e => console.log(e))
        },
        showMore(id){
            this.fetchOne(id)
        },
        async fetchOne(id){
            let result = await axios.get(`https://bembosv2.herokuapp.com/TipoIngredientes/${id}/`)
            this.ingreds = result.data.ingrediente
            this.modal = true
            console.log(this.ingreds)
        },
        addToCart(){
            this.cart.push(this.selecIngredient)
        }
        // selecIngredient(ingredId){
        //     this.selecIngredientID = ingredId
        // }
    }
});

let fb = document.getElementById("FB"),
tt = document.getElementById("TT"),
yt = document.getElementById("YT")

fb.addEventListener("click",()=>{
    window.open("https://www.facebook.com/bembos", '_blank')
})

tt.addEventListener("click",()=>{
    window.open("https://twitter.com/BembosOficial", '_blank')
})

yt.addEventListener("click",()=>{
    window.open("https://www.youtube.com/user/BembosCanal", '_blank')
})
