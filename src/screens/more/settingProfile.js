import {View, StyleSheet} from "react-native"
import React from "react"
import Color from "@common/Color"
import {Header} from "react-native-elements"
import LeftHeader from "./containers/leftHeader"
import FormProfile from "./containers/formProfile"

const SettingProfile = () => {
  return (
    <View style={styles.container}>
      <Header leftComponent={<LeftHeader />} backgroundColor={Color.orange} />
      <FormProfile />
    </View>
  )
}

export default SettingProfile

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Color.ghostWhite},
})
