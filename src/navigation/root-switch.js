import React from "react"
import MainStack from "./main-stack"
import {createStackNavigator} from "@react-navigation/stack"
import {rootSwitch} from "@common/navigator"
import AuthStack from "./authStack"

const Stack = createStackNavigator()

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={rootSwitch.main} component={MainStack} />
      <Stack.Screen name={"AuthStack"} component={AuthStack} />
    </Stack.Navigator>
  )
}

export default RootStack
