import React from "react";

import ReactDOM from "react-dom";

import { createStore } from "redux";

import Counter from "./components/Counter";

import counterState from "./reducers";

const store = createStore(counterState)

const rootElement = document.getElementById('root')


const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={()=>store.dispatch({type:'INCREMENT'})}
    onDecrement={()=>store.dispatch({type:'DECREMENT'})}
  />
  , rootElement)

  render()