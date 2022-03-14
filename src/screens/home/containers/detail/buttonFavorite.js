import {View, Text, StyleSheet} from "react-native"
import React from "react"
import {Icon} from "react-native-elements"
import Color from "@common/Color"

const ButtonFavorite = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtSaveNews}>Lưu tin</Text>
      <Icon name="newspaper-outline" type="ionicon" color="black" size={20} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 45,
    backgroundColor: "red",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  txtSaveNews: {
    color: Color.red,
  },
})
export default ButtonFavorite
