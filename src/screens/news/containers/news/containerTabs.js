import {View, Text, StyleSheet} from "react-native"
import React from "react"
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import Color from "@common/Color"

const Tab = createMaterialTopTabNavigator()
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Đang hiển thị</Text>
    </View>
  )
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
    </View>
  )
}

const ContainerTabs = () => {
  return (
    <Tab.Navigator screenOptions={styles.screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  screenOptions: {
    tabBarActiveTintColor: Color.black,
    tabBarLabelStyle: {fontSize: 12, fontWeight: "bold"},
    tabBarItemStyle: {width: "auto"},
    tabBarStyle: {backgroundColor: Color.white},
    tabBarIndicatorStyle: {backgroundColor: Color.orange, height: 2},
  },
  container: {flex: 1, justifyContent: "center", alignItems: "center"},
})
export default ContainerTabs
