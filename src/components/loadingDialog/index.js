import {StyleSheet} from "react-native"
import React from "react"
import {Dialog} from "react-native-elements"
import Color from "@common/Color"
import {ActivityIndicator} from "react-native"

const LoadingDialog = ({isVisible, onBackdropPress}) => {
  return (
    <Dialog isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <Dialog.Title title="Đang tải" titleStyle={styles.txtDialog} />
      <ActivityIndicator size="large" color={Color.orange} />
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

export default LoadingDialog
