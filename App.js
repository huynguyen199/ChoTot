import React from "react"

import {NavigationContainer} from "@react-navigation/native"
import Router from "./src/navigation/rootSwitch"
import store from "./src/redux/store"
import {Provider} from "react-redux"
import "./src/configI18n"

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  )
}

export default App
