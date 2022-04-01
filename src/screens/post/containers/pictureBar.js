import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import React from "react"
import {Icon} from "react-native-elements"
import Icons from "@common/Icon"
import Color from "@common/Color"
import PictureList from "./pictureList"
import {useTranslation} from "react-i18next"

const PictureBar = ({images, onPress, isVisible, changeImages}) => {
  const {t} = useTranslation()
  if (isVisible) {
    return (
      <>
        <Text style={styles.txtTitle}>{t("images")}</Text>
        <View style={styles.boxRow}>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.boxCamera}>
              <Icon
                name={Icons.Material.addAPhoto}
                type="material"
                color={Color.orange}
                size={40}
              />
            </View>
          </TouchableOpacity>
          <PictureList changeImages={changeImages} images={images} />
        </View>
      </>
    )
  }
  return null
}

const styles = StyleSheet.create({
  txtTitle: {fontWeight: "bold", fontSize: 12},
  boxRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  boxCamera: {
    borderColor: Color.orange,
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
  },
})

export default PictureBar
