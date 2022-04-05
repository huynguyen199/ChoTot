import {View, StyleSheet} from "react-native"
import React from "react"
import {Icon} from "react-native-elements"

const RightComponent = () => {
  return (
    <View style={styles.container}>
      <Icon name="newspaper-outline" type="ionicon" color="black" size={26} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default RightComponent
