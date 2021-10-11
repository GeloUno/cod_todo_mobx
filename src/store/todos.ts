
import { makeAutoObservable } from 'mobx'
// import { observer } from 'mobx-react-lite'
import { nanoid } from 'nanoid'

export interface IToDo {
    id: string;
    title: string;
    description: string;
    done: boolean
}

export class ToDo {
    id: string;
    title: string;
    description: string;
    done: boolean

    constructor({ title, description, done, id }: { title: string, description: string, done: boolean, id: string }) {
        makeAutoObservable(this);
        this.id = id;
        this.title = title;
        this.description = description;
        this.done = done
    }

    public toggleDoneTodo() {
        this.done = false
    }
}

export class ToDoList {
    list: Array<ToDo> = []
    constructor(list: Array<ToDo>) {
        makeAutoObservable(this);
        this.list = list;
    }
    addToDo(todo: ToDo) {
        this.list.push(todo)
        // console.log(`list`, this.list)
    }
    toggleDone(id: string) {
        this.list.find(li => {
            if (li.id === id) {
                li.done = !li.done
            }
        })

    }
}


export const storeList: Array<ToDo> = [
    new ToDo({ description: 'example1', done: false, title: 'some1', id: nanoid() }),
    new ToDo({ description: 'example2', done: true, title: 'some2', id: nanoid() }),
]
// observable({ store })

export const mystore: ToDoList = new ToDoList(storeList)
// export const store = observable(store1)



