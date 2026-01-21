import React from 'react';
import {ChangeAlert} from '../../UI/ChangeAlert';
import {CreateTodoButton} from '../../UI/CreateTodoButton';
import {EmptyTodos} from '../../UI/EmptyTodos';
import {Modal} from '../../UI/Modal';
import {TodoCounter} from '../../UI/TodoCounter';
import {TodoForm} from '../../UI/TodoForm';
import {TodoHeader} from '../../UI/TodoHeader';
import {TodoItem} from '../../UI/TodoItem';
import {TodoList} from '../../UI/TodoList';
import {TodoSearch} from '../../UI/TodoSearch';
import {TodosError} from '../../UI/TodosError';
import {TodosLoading} from '../../UI/TodosLoading';
import {useTodos} from '../useTodos';

function HomePage() {
    const { state, stateUpdaters } = useTodos();

    const {
        error,
        loading,
        searchedTodos,
        totalTodos,
        completedTodos,
        openModal,
        searchValue,
    } = state;

    const {
        setOpenModal,
        addTodo,
        completeTodo,
        deleteTodo,
        setSearchValue,
        sincronizeTodos,
    } = stateUpdaters;

    return (
        <React.Fragment>
            <TodoHeader loading={loading}>
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>

            <TodoList
                error={error}
                loading={loading}
                totalTodos={totalTodos}
                searchedTodos={searchedTodos}
                searchText={searchValue}
                onError={() => <TodosError />}
                onLoading={() => <TodosLoading />}
                onEmptyTodos={() => <EmptyTodos />}
                onEmptySearchResults={
                    (searchText) => <p>No hay resultados para {searchText}</p>
                }
            >
                {todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onEdit={() => console.log('editando....')}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                )}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm
                        addTodo={addTodo}
                        setOpenModal={setOpenModal}
                    />
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
            />

            <ChangeAlert
                sincronize={sincronizeTodos}
            />
        </React.Fragment>
    );
}

export {HomePage};
