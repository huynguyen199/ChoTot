import {View, ActivityIndicator, StyleSheet} from "react-native"
import React from "react"
import Colors from "@common/Color"

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.orange} />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
})
