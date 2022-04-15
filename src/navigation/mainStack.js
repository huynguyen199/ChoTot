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
import SettingProfile from "@screens/more/settingProfile"

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
        <Stack.Screen
          options={{headerShown: false}}
          name={mainStack.settingProfile}
          component={SettingProfile}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: "modal",
          headerShown: false,
        }}>
        <Stack.Screen name={mainStack.city} component={City} />
        <Stack.Screen
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          name={mainStack.district}
          component={District}
        />
        <Stack.Screen
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          name={mainStack.ward}
          component={Ward}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default MainStack
