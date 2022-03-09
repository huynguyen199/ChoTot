import React from "react"
import MainStack from "./main-stack"
import {createStackNavigator} from "@react-navigation/stack"

const Stack = createStackNavigator()

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainStack" component={MainStack} />
    </Stack.Navigator>
  )
}

export default RootStack
