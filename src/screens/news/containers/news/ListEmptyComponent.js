import {View, StyleSheet, Dimensions, ActivityIndicator} from "react-native"
import React from "react"
import Colors from "@common/Color"
import Color from "@common/Color"
const {height} = Dimensions.get("window")

const ListEmptyComponent = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.orange} />
    </View>
  )
}

export default ListEmptyComponent

const styles = StyleSheet.create({
  container: {
    height: height / 1.3,
    backgroundColor: Color.ghostWhite,
    alignItems: "center",
    justifyContent: "center",
  },
})
