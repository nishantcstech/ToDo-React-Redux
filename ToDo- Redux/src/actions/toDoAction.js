export const addTodo = (data) => {
    return{
        type: "ADD_TO_DO",
        payload : {
            id: new Date().getTime().toString(),
            data: data

        }
    }
}

export const deleteTodo = (id) => {
    return{
        type: "DELETE_TO_DO",
        id
    }
}

export const removeAllTodo = () => {
    return{
        type: "REMOVE_ALL_TO_DO"
    }
}