import {TouchableOpacity} from "react-native"
import React from "react"
import Color from "@common/Color"
import {StyleSheet} from "react-native"
import {Icon} from "react-native-elements"
import Icons from "@common/Icon"

const RightHeader = () => {
  return (
    <TouchableOpacity style={styles.btnStyle}>
      <Icon
        name={Icons.Ionicons.chevronForward}
        type="ionicon"
        color={Color.black}
        size={26}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
export default RightHeader
