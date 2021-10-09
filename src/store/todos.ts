
import { action, computed, makeAutoObservable, makeObservable, observable } from 'mobx'
// import { observer } from 'mobx-react-lite'
import { nanoid } from 'nanoid'


interface ToDo {
    id: string,
    title: string,
    description: string,
    done: boolean
}

class ToDo implements ToDo {
    id: string;
    title: string;
    description: string;
    done: boolean

    private constructor({ title, description, done }: ToDo) {
        makeAutoObservable(this,
            //      {
            //     done: observable,
            //     getTodo: computed
            // }
        )
        this.id = nanoid();
        this.title = title;
        this.description = description;
        this.done = done
    }

    // public get getTodo(): Omit<ToDo, "getTodo" | "AddTodo" | "toggleDoneTodo"> {
    //     return {
    //         title: this.title,
    //         description: this.description,
    //         id: this.id,
    //         done: this.done,
    //     }
    // }

    // public set AddTodo(todo: ToDo) {
    //     this.title = todo.title;
    //     this.description = todo.description;
    //     this.done = todo.done;
    //     this.id = this.id
    // }


    public toggleDoneTodo() {
        this.done = !this.done;
    }
}


const store: Array<ToDo> = [];
