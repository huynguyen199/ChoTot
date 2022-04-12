import React from "react"
import SearchProduct from "@screens/home/searchProduct"
import {createStackNavigator} from "@react-navigation/stack"
import {homePage} from "@common/navigator"
import Home from "@screens/home/home"
import Category from "@screens/home/category"
import History from "@screens/home/history"
import ProductFound from "@screens/home/productFound"

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
        options={{headerShown: false, animationEnabled: false}}
        name={homePage.history}
        component={History}
      />
      <Stack.Screen
        options={{headerShown: false, animationEnabled: false}}
        name={homePage.searchProduct}
        component={SearchProduct}
      />
      <Stack.Screen
        options={{headerShown: false, animationEnabled: false}}
        name={homePage.foundProduct}
        component={ProductFound}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={homePage.category}
        component={Category}
      />
    </Stack.Navigator>
  )
}

export default HomePages
