import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

// interface is used to define structure of objects
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const {id, title, completed} = response.data as Todo
    logTodo(id, title, completed)
})

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
      TODO with ID: ${id}
      and title "${title}"
      is ${completed ? 'finished' : 'not finished'}
    `);
}

/* compile and run the script with: "ts-node index.ts" */
