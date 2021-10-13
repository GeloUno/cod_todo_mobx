import { ToDoList } from '../store/todos';
import { observer } from 'mobx-react-lite';
import ToDoItemView from './toDoItemView/toDoItemView';
import InputToDo from './inputToDo/inputToDo';
import Spinner from './spinner/spinner';

const ToDolist = observer(
  ({ store, isLoading }: { store: ToDoList; isLoading: boolean }) => {
    if (isLoading) {
      return <Spinner />;
    }

    return (
      <div>
        {store.listToDo.map((li) => {
          if (li.showAsEditForm) {
            return <InputToDo store={store} toDoId={li.id} key={li.id} />;
          } else {
            return (
              <ToDoItemView
                key={li.id}
                description={li.description}
                done={li.done}
                id={li.id}
                title={li.title}
                toggleDoneTodo={() => store.toggleDone(li.id)}
                dateCreate={li.dateCreate}
                deadline={li.deadline}
                isShowDetail={false}
                setIdToDoDetailView={() => store.setIdToDoDetailView(li.id)}
                removeToDo={() => store.removeToDoById(li.id)}
                showInEditForm={() => {
                  store.toggleShowOnEditForm(li.id);
                }}
              />
            );
          }
        })}
      </div>
    );
  }
);

export default ToDolist;
