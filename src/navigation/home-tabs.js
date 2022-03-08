import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Example1 from "../screens/Example1"
import Example2 from "../screens/Example2"
import Example4 from "../screens/Example4"
import Example3 from "../screens/Example3"

const Tab = createBottomTabNavigator()

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
        name="Example1"
        component={Example1}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
        name="Example2"
        component={Example2}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
        name="Example3"
        component={Example3}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
        name="Example4"
        component={Example4}
      />
    </Tab.Navigator>
  )
}

export default HomeTabs
