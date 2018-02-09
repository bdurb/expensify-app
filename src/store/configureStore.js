import { createStore, combineReducers } from 'redux';

//Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);