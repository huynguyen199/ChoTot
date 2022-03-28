import {View, Text, StyleSheet} from "react-native"
import React from "react"
import Color from "@common/Color"

const PanelTop = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>Quản lý tin đăng</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    padding: 14,
  },
  txtTitle: {
    fontWeight: "bold",
    color: Color.black,
    fontSize: 16,
  },
})
export default PanelTop
