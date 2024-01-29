const { createApp } = Vue;

createApp({
    data(){
        return{
            tasks: [
                {
                    text: "Fare la spesa",
                    done: true 
                },{
                    text: "Studiare per l'esame",
                    done: false 
                },{
                    text: "Trovare la voglia di uscire di casa",
                    done: false 
                },{
                    text: "Giocare a Rainbow Six Siege",
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
                    this.tasks = [...this.tasks];
                    this.newTask = "";
                }
            },
            removeTask(index){
                this.tasks.splice(index, 1);
                this.tasks = [...this.tasks];
            },
            completeTask(index){
                this.tasks[index].done = !this.tasks[index].done;
            }
        },
        mounted() {
            console.log(this.tasks);  // Stampa l'array completo in console al momento del montaggio (mount)
        },
}).mount('#app');
  