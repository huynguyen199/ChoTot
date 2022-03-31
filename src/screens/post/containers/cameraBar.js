import {View, Text, TouchableOpacity} from "react-native"
import React from "react"
import Color from "@common/Color"
import Icons from "@common/Icon"
import {Icon} from "react-native-elements"
import {StyleSheet} from "react-native"
import {useTranslation} from "react-i18next"

const CameraBar = ({onPress, isVisible}) => {
  const {t} = useTranslation()

  return (
    <>
      {isVisible ? (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.container}>
            <Icon
              name={Icons.Ionicons.camera}
              type="ionicon"
              color={Color.orange}
              size={80}
            />
            <Text style={styles.txtTitle}>{t("post:postOneToSix")}</Text>
          </View>
        </TouchableOpacity>
      ) : null}
    </>
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
