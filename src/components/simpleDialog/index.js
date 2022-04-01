import {Text, TouchableOpacity, StyleSheet} from "react-native"
import React from "react"
import {Dialog} from "react-native-elements"
import Color from "@common/Color"
import {useTranslation} from "react-i18next"

const SimpleDialog = ({isVisible, onBackdropPress, title}) => {
  const {t} = useTranslation()

  return (
    <Dialog isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <Dialog.Title title="Thông báo" titleStyle={styles.txtDialog} />
      <Text style={styles.txtTitle}>{title}</Text>
      <TouchableOpacity onPress={onBackdropPress}>
        <Text style={styles.textBtn}>{t("close")}</Text>
      </TouchableOpacity>
    </Dialog>
  )
}

const styles = StyleSheet.create({
  txtTitle: {textAlign: "center"},
  txtDialog: {textAlign: "center"},
  textBtn: {
    textAlign: "center",
    color: Color.orange,
    fontSize: 24,
    marginTop: 10,
  },
})

export default SimpleDialog
