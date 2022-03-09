import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import Color from "../common/Color"
import {Icon} from "react-native-elements"
import Home from "../screens/home/home"
import News from "../screens/news/news"
import Profile from "../screens/more/profile"
import Notify from "../screens/notify/notify"
import CreateNews from "../screens/post/createnews"

import {homeTabs} from "../common/navigator"

const Tab = createBottomTabNavigator()

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Color.orange,
        // tabBarInactiveTintColor: "blue",
        tabBarStyle: {
          height: 55,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          margin: 0,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: "Tang chủ",
          tabBarIcon: ({color, size}) => (
            <Icon name="home-outline" type="ionicon" color={color} />
          ),
          tabBarBadge: 3,
        }}
        name={homeTabs.home}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Quản lý tin",
          tabBarIcon: ({color, size}) => (
            <Icon name="newspaper-outline" type="ionicon" color={color} />
          ),
          tabBarBadge: 3,
        }}
        name={homeTabs.news}
        component={News}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Đăng tin",
          tabBarIcon: ({color, size}) => (
            <Icon name="create-outline" type="ionicon" color={color} />
          ),
          tabBarBadge: 3,
        }}
        name={homeTabs.createnews}
        component={CreateNews}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Thông báo",
          tabBarIcon: ({color, size}) => (
            <Icon name="notifications-outline" type="ionicon" color={color} />
          ),
          tabBarBadge: 3,
        }}
        name={homeTabs.notify}
        component={Notify}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Thêm",
          tabBarIcon: ({color, size}) => (
            <Icon
              name="ellipsis-horizontal-outline"
              color={color}
              type="ionicon"
              size={size}
            />
          ),
          tabBarBadge: 3,
        }}
        name={homeTabs.me}
        component={Profile}
      />
    </Tab.Navigator>
  )
}

export default HomeTabs
