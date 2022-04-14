import {View, Text, TouchableOpacity, StyleSheet} from "react-native"
import React from "react"
import {SvgUri} from "react-native-svg"
import Color from "@common/Color"

const UtilityButton = ({uri, title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <SvgUri width={35} height={35} style={styles.svgIcon} uri={uri} />
        <Text style={styles.txtTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default UtilityButton

const styles = StyleSheet.create({
  txtTitle: {marginLeft: 10, color: Color.black},
  svgIcon: {marginLeft: 10},
  container: {
    backgroundColor: Color.white,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
})
