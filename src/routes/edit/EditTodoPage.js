import {useLocation, useParams} from "react-router-dom";
import {TodoForm} from "../../UI/TodoForm";
import {useTodos} from "../useTodos";

const EditTodoPage = ()=>{
    const location = useLocation();
    const params=useParams()
  const id=Number(params.id)
    const {state,stateUpdaters}=useTodos()
    const {editTodo} = stateUpdaters;
    const {loading, getTodo} = state;
    let todoText;

    if(location.state?.todo){
    todoText=location.state.todo.text
        console.log(location.state)
    }else  if(loading){
        return<h1>cargando...</h1>
    }else{
        const todo=getTodo(id)
        todoText=todo.text
    }
    return (
        <TodoForm
            label='edita tu Todo'
            defaultTodoText={todoText}
            submitText='Editar'
            submitEvent={(newText)=>editTodo(id,newText)}
        />
    )
}

export { EditTodoPage }