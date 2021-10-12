
import { makeAutoObservable } from 'mobx'
// import { observer } from 'mobx-react-lite'
import { nanoid } from 'nanoid'

// export interface IToDo {
//     id: string;
//     title: string;
//     description: string;
//     done: boolean;
//     dateCreate: Date;
//     deadline: Date;
// }

export class ToDo {
    id: string;
    title: string;
    description: string;
    done: boolean;
    dateCreate: Date;
    deadline: Date;
    showAsEditForm: boolean;

    constructor({ title, description, done, id, deadline }: { title: string, description: string, done: boolean, id: string, deadline: Date }) {
        makeAutoObservable(this);
        this.id = id;
        this.title = title;
        this.description = description;
        this.done = done;
        this.deadline = deadline;
        this.dateCreate = new Date()
        this.showAsEditForm = false
    }

    public toggleDoneTodo() {
        this.done = false
    }
}

// export interface IToDoList {
//     list: Array<ToDo>;
//     idToDoDetailView: string;
//     addToDo(todo: ToDo): void;
//     toggleDone(id: string): void
//     setIdToDoDetailView(id: string): void
//     getToDoById(id: string): ToDo | undefined
// }

export class ToDoList {
    listToDo: Array<ToDo> = []
    idToDoDetailView?: string;
    constructor(list: Array<ToDo>) {
        makeAutoObservable(this);
        this.listToDo = list;
    }
    addToDo(todo: ToDo) {
        this.listToDo.push(todo)
        console.log(`ADD listToDo`, this.listToDo)
    }
    toggleDone(id: string) {
        this.listToDo.forEach(li => {
            if (li.id === id) {
                li.done = !li.done
            }
        })
    }
    setIdToDoDetailView(id: string) {
        console.log(`id`, id)
        this.idToDoDetailView = id
        console.log(`this.idToDoDetailView`, this.idToDoDetailView)
    }

    getToDoById(id: string): ToDo | undefined {
        return this.listToDo.find(item => item.id === id)
    }
    removeToDoById(id: string) {
        const data = this.listToDo.filter(item => item.id !== id)
        this.listToDo = data
    }
    toggleShowOnEditForm(id: string) {
        this.listToDo.forEach(item => {
            if (item.id === id) {
                item.showAsEditForm = !item.showAsEditForm
            }
        })
    }
    saveEditedToDo(todo: ToDo) {
        this.listToDo.forEach(item => {
            console.log("<- LOG -> file: todos.ts -> line 90 -> ToDoList -> saveEditedToDo -> item.id", item.id)
            if (item.id === todo.id) {

                item.showAsEditForm = false;
                item.title = todo.title;
                item.description = todo.description
                item.deadline = todo.deadline
            }
        })
        console.log(`SAVE listToDo`, this.listToDo)
    }
}


export const storeList: Array<ToDo> = [
    new ToDo({ description: 'example1', done: false, title: 'some1', id: "1", deadline: new Date('2021-10-10') }),
    new ToDo({ description: 'example2', done: true, title: 'some2', id: "2", deadline: new Date('2022-01-01') }),
]

export const mystore: ToDoList = new ToDoList(storeList)




