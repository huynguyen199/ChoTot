import React from "react"
import {authStack} from "../common/navigator"
import Login from "@screens/auth/login"
import {createStackNavigator} from "@react-navigation/stack"
import Fogot from "@screens/auth/fogot"
import Register from "@screens/auth/register"

const Stack = createStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={authStack.login}
      screenOptions={{gestureEnabled: false}}>
      <Stack.Screen
        options={{headerShown: false}}
        name={authStack.login}
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={authStack.register}
        component={Register}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={authStack.forgot}
        component={Fogot}
      />
    </Stack.Navigator>
  )
}

export default AuthStack
