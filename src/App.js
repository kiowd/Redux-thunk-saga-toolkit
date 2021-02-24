import React from "react";
import "./styles.css";
import {Provider} from "react-redux";
import store from './redux/store';
import Shop from "./compos/Shop";

export default function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Hello Redux</h1>
      <Shop/>
      
      
    </div>
    </Provider>
  );
}
