import { createStore, combineReducers,compose,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { UserId_reduce, new_reduce } from './reduce'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; 

const reduce = combineReducers({
    Id_user: UserId_reduce,
    New_employee : new_reduce
})

export const store = createStore(reduce,composeEnhancers(applyMiddleware(thunk))) 