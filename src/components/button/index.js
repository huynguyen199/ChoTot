import {View, Text, TouchableOpacity, StyleSheet} from "react-native"
import React from "react"
import Color from "@common/Color"

const Button = ({onPress, style, title, color = Color.blue}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <View style={[styles.container, {backgroundColor: color}]}>
        <Text style={styles.txtTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  txtTitle: {fontSize: 22, color: Color.white},
})

export default Button
