import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import cartReducer from '../features/cart/reducer'
import itemsReducer from '../features/item-listing/reducer'

const rootReducer = combineReducers({
  cart: cartReducer,
  items: itemsReducer,
  form: formReducer,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store