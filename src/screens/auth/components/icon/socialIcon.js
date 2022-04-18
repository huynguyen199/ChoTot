import React from "react"
import {Avatar} from "react-native-elements"

const SocialIcon = ({style, uri, size = 64}) => {
  return (
    <Avatar
      size={size}
      rounded
      source={{uri: uri}}
      title="Bj"
      containerStyle={style}
    />
  )
}

export default SocialIcon
