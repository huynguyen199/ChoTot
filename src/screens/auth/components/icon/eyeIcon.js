import {StyleSheet} from "react-native"
import React from "react"
import Icons from "@common/Icon"
import {Icon} from "react-native-elements"
import Color from "@common/Color"

const EyeIcon = ({onPress, color = Color.grey}) => {
  return (
    <Icon
      onPress={onPress}
      type="ionicon"
      containerStyle={styles.iconStyle}
      iconStyle={styles.iconEye}
      name={Icons.Ionicons.eye}
      size={19}
      color={color}
    />
  )
}

const styles = StyleSheet.create({
  iconEye: {padding: 10, borderRadius: 50},
  iconStyle: {
    right: -10,
  },
})

export default EyeIcon
