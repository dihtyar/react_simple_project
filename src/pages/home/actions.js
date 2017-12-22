export const ADD_TODO = 'ADD_TODO';

export function addTodo(id, name) {
    let error = '';
    if(!name){
        error = 'Необходимо внести название';
    }
    return{
        type: ADD_TODO,
        id, name, error
    };
}
