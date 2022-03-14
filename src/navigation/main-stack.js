import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
// import cart from "../screens/cart"
import HomeTabs from "./home-tabs"
import {mainStack} from "@common/navigator"

const Stack = createStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{gestureEnabled: false}}
      initialRouteName={mainStack.home_tab}>
      <Stack.Screen
        options={{headerShown: false}}
        name={"HomeTab"}
        component={HomeTabs}
      />
    </Stack.Navigator>
  )
}

export default MainStack
