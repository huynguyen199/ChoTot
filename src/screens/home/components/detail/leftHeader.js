import React from "react"
import Icons from "@common/Icon"
import {Icon} from "react-native-elements"

const LeftHeader = ({onClose}) => {
  return (
    <Icon
      onPress={onClose}
      name={Icons.Ionicons.back}
      type="ionicon"
      color="black"
      size={35}
    />
  )
}

export default LeftHeader
