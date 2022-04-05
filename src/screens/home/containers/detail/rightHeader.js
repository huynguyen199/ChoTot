import {View, StyleSheet} from "react-native"
import React from "react"
import Icons from "@common/Icon"
import {Icon} from "react-native-elements"
import Color from "@common/Color"
const RightHeader = () => {
  return (
    <View style={styles.container}>
      <Icon
        name={Icons.Ionicons.heartOutline}
        type="ionicon"
        color={Color.black}
        size={35}
        style={styles.styleIcon}
      />
      <Icon
        name={Icons.Ionicons.share}
        type="ionicon"
        color={Color.black}
        size={35}
        style={styles.styleIcon}
      />
      <Icon
        name={Icons.Ionicons.ellipsis_vertical}
        type="ionicon"
        color={Color.black}
        size={35}
        style={styles.styleIcon}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flexDirection: "row"},
  styleIcon: {
    marginRight: 10,
  },
})

export default RightHeader
