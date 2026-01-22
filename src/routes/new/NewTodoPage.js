import {TodoForm} from "../../UI/TodoForm";
import {useTodos} from "../useTodos";

const NewTodoPage = ()=>{
    const {stateUpdaters}=useTodos()
    const {addTodo}=stateUpdaters
    return (
    <TodoForm
    label='Escribe tu nuevo Todo'
    submitText='Aniadir'
    submitEvent={(text)=>addTodo(text)}
    />
    )
}

export { NewTodoPage }