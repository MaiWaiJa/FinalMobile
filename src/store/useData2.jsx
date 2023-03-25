/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import React, {useContext, useReducer, createContext} from 'react';

export const DataContext = createContext({
  activity: [],
  addActivity: ({ title }) => {},
  deleteActivity: (id) => {},
});

const Activity_DATA = [
  {
    title: "Test"
  }
]

function activityReducer(state, action) {
  switch (action.type){
    case 'ADD' :
        const id = new Date().toString()
        return [{...action.payload, id: id}, ...state]
    case 'DELETE':
        return state.filter((activity) => activity.id !== action.payload)
    default:
        return state
  }
}

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {

  const [activityState, dispatch] = useReducer(activityReducer, Activity_DATA)

  function addActivity(activityData) {
      dispatch({ type: 'ADD', payload: activityData})
  }

  function deleteActivity(id) {
      dispatch({ type: 'DELETE', payload: id})
  }

  const contextValue = {
    activity: activityState,
    addActivity: addActivity,
    deleteActivity: deleteActivity,
  }

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
