import {View, Text, StyleSheet} from "react-native"
import React from "react"
import Color from "@common/Color"

const LeftHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>Quản lý tin đăng</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 46,
    justifyContent: "center",
    width: 200,
  },
  txtTitle: {fontSize: 18, fontWeight: "bold", color: Color.black},
})
export default LeftHeader
