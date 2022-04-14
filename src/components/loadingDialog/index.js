import {Text, ActivityIndicator, StyleSheet} from "react-native"
import React from "react"
import {Dialog} from "react-native-elements"
import Color from "@common/Color"

const LoadingDialog = ({isVisible, onBackdropPress, title}) => {
  return (
    <Dialog isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <Dialog.Title title="Thông báo" titleStyle={styles.txtDialog} />
      <Text style={styles.txtTitle}>{title}</Text>
      <ActivityIndicator
        size="large"
        color={Color.orange}
        style={styles.styleProcess}
      />
    </Dialog>
  )
}

const styles = StyleSheet.create({
  styleProcess: {marginBottom: 10},
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
