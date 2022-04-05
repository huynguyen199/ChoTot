import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import {homePage} from "@common/navigator"
import Home from "@screens/home/home"
import Category from "@screens/home/category"

const Stack = createStackNavigator()

const HomePages = () => {
  return (
    <Stack.Navigator
      screenOptions={{gestureEnabled: false}}
      // initialRouteName={mainStack.homeTab}
    >
      <Stack.Screen
        options={{headerShown: false}}
        name={homePage.home}
        component={Home}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={"category"}
        component={Category}
      />
    </Stack.Navigator>
  )
}

export default HomePages
