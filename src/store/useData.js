import { useReducer, createContext } from "react";

export const DataContext = createContext({
    data: [],
    addData: ({ title }) => {},
    deleteData: (id) => {},
})

const input_DATA = [{ id: 1, title: "ss"}]

function dataReducer(state, action) {
    switch (action.type){
        case 'ADD' :
            const id = new Date().toString()
            return [{...action.payload, id: id}, ...state]
        case 'DELETE':
            return state.filter((data) => data.id !== action.payload)
        default:
            return state
    }
}

function DataContextProvider({children}) {
    const [dataState, dispatch] = useReducer(dataReducer, input_DATA)

    function addData(dataInput) {
        dispatch({ type: 'ADD', payload: dataInput})
    }

    function deleteData(id) {
        dispatch({ type: 'DELETE', payload: id})
    }

    const value = {
        data: dataState,
        addData: addData,
        deleteData: deleteData,
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider