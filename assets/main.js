const { createApp } = Vue;

createApp({
    data(){
        return{
            tasks: [
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

            newTask:" ",
        };
    },
        methods: {
            addTask(){
                if (this.newTask.trim() !== ""){
                    this.tasks.push({text: this.newTask, done: false })
                    this.newTodo = "";
                }
            },
        },
}).mount('#app');
  