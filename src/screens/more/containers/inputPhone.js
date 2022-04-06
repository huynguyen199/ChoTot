import {View, StyleSheet} from "react-native"
import React from "react"
import {TextInput} from "react-native-paper"
import Color from "@common/Color"
import {Button} from "react-native-elements"

const InputPhone = () => {
  return (
    <View style={styles.container}>
      <TextInput
        label={"Số điện thoại"}
        style={styles.inputStylePhone}
        underlineColor="transparent"
        theme={{colors: "transparent"}}
      />
      <Button
        title="Lưu"
        containerStyle={styles.containerStyleButton}
        buttonStyle={styles.btnStyle}
        titleStyle={styles.titleStyle}
      />
    </View>
  )
}

export default InputPhone

const styles = StyleSheet.create({
  titleStyle: {
    color: "white",
  },
  btnStyle: {backgroundColor: "rgba(255, 193, 7, 1)"},
  containerStyleButton: {
    height: 40,
    width: 60,
    marginRight: 10,
  },
  inputStylePhone: {
    backgroundColor: Color.white,
    height: 50,
    flex: 1,
    borderTopEndRadius: 0,
    borderTopStartRadius: 0,
    borderWidth: 1,
    borderColor: Color.ghostWhite,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
})
