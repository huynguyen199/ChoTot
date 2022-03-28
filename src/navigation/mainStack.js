import React from "react"
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack"
import HomeTabs from "./homeTabs"
import Detail from "@screens/home/detail"
import {mainStack} from "@common/navigator"
import Post from "@screens/post/post"
import City from "@screens/post/modal/city"
import District from "@screens/post/modal/district"
import Ward from "@screens/post/modal/ward"

const Stack = createStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{gestureEnabled: false}}
      initialRouteName={mainStack.homeTab}>
      <Stack.Group>
        <Stack.Screen
          options={{headerShown: false}}
          name={mainStack.homeTab}
          component={HomeTabs}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={mainStack.detail}
          component={Detail}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={mainStack.post}
          component={Post}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: "modal",
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name={mainStack.city} component={City} />
        <Stack.Screen name={mainStack.district} component={District} />
        <Stack.Screen name={mainStack.ward} component={Ward} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default MainStack
