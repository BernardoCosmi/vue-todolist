const{createApp}=Vue;

const app=createApp({
    data(){
        return{
            todo:[
                {
                    text: "Fare la spesa",
                    done: false 
                },{
                    text: "Studiare per l'esame",
                    done: true 
                },{
                    text: "Pulire la casa",
                    done: false 
                },{
                    text: "Andare in palestra",
                    done: true 
                }
            ],
            
        };
    },
}).mount('#app');
  