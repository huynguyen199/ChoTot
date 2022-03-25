import {View, Text} from "react-native"
import React from "react"
import Color from "@common/Color"
import Icons from "@common/Icon"
import {Icon} from "react-native-elements"
import {StyleSheet} from "react-native"
import {useTranslation} from "react-i18next"

const CameraBar = () => {
  const {t} = useTranslation()

  return (
    <View style={styles.container}>
      <Icon
        name={Icons.Ionicons.camera}
        type="ionicon"
        color={Color.orange}
        size={80}
        // style={styles.iconStyle}
      />
      <Text style={styles.txtTitle}>{t("post:postOneToSix")}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.ghostWhite,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderColor: Color.orange,
    borderWidth: 1,
    borderStyle: "dashed",
    marginTop: 10,
  },
  txtTitle: {fontWeight: "bold"},
})

export default CameraBar
