
const initialData = {
    list: []
}

const toDoRedusers = (state = initialData, action) => {
    switch (action.type) {

        case "ADD_TO_DO":

            const { id, data } = action.payload;

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        case "DELETE_TO_DO":
              const newList = state.list.filter((ele) => ele.id !== action.id)
              return{
                  ...state,
                  list: newList
              }  
        
        case "REMOVE_ALL_TO_DO":
            return{
                list: []
            }      
        default: return state;


    }


}

export default toDoRedusers;