import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Color from "../common/Color"
import {Icon} from "react-native-elements"
import News from "../screens/news/news"
import Profile from "../screens/more/profile"
import Notify from "../screens/notify/notify"
import CreateNews from "../screens/post/createnews"

import {homeTabs} from "../common/navigator"
import {useTranslation} from "react-i18next"
import {Host} from "react-native-portalize"
import {useRef} from "react"
import TabBarIconPost from "@containers/tabBarIconPost"
import HomePages from "./pages/home"

const Tab = createBottomTabNavigator()

const HomeTabs = () => {
  const {t} = useTranslation()
  const modalizeRef = useRef(null)

  const onOpen = () => {
    modalizeRef.current.open()
  }

  return (
    <Host>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Color.orange,
          tabBarInactiveTintColor: Color.black,
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
            tabBarLabel: t("home:home"),
            tabBarIcon: ({color, size}) => (
              <Icon name="home-outline" type="ionicon" color={color} />
            ),
            tabBarBadge: 3,
            headerShown: false,
          }}
          name={homeTabs.home}
          component={HomePages}
        />

        <Tab.Screen
          options={{
            tabBarLabel: t("home:newsManager"),
            tabBarIcon: ({color, size}) => (
              <Icon name="newspaper-outline" type="ionicon" color={color} />
            ),
            tabBarBadge: 3,
            headerShown: false,
          }}
          name={homeTabs.news}
          component={News}
        />
        <Tab.Screen
          options={{
            tabBarLabel: t("home:post"),
            tabBarIcon: ({color, size}) => (
              <TabBarIconPost
                color={color}
                size={size}
                modalizeRef={modalizeRef}
              />
            ),
            tabBarBadge: 3,
          }}
          listeners={{
            tabPress: (e) => {
              // Prevent default action
              e.preventDefault()
              onOpen()
            },
          }}
          name={homeTabs.createNews}
          component={CreateNews}
        />
        <Tab.Screen
          options={{
            tabBarLabel: t("home:notify"),
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
            tabBarLabel: t("home:add"),
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
    </Host>
  )
}

export default HomeTabs
