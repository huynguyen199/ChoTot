import {View, Text, StyleSheet} from "react-native"
import React from "react"
import Color from "@common/Color"
import {TextInput} from "react-native-paper"
import Icons from "@common/Icon"
import {Icon} from "react-native-elements"
import {TouchableOpacity} from "react-native"

const InputDateOfBirth = ({value, onChange, openDialog}) => {
  if (value) {
    return (
      <>
        <TextInput
          label={"Ngày sinh"}
          value={value}
          onChange={onChange}
          style={styles.inputBirthDay}
          underlineColor="transparent"
          theme={{colors: "transparent"}}
        />
      </>
    )
  }
  return (
    <TouchableOpacity onPress={() => openDialog(true)}>
      <View style={styles.container}>
        <Text style={styles.txtBirthDay}>Thêm ngày sinh</Text>
        <Icon
          name={Icons.Material.edit}
          type="material"
          color={Color.grey}
          size={20}
        />
      </View>
    </TouchableOpacity>
  )
}

export default InputDateOfBirth

const styles = StyleSheet.create({
  txtBirthDay: {color: "orange"},
  container: {
    backgroundColor: "white",
    height: 50,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  inputBirthDay: {
    backgroundColor: Color.white,
    height: 50,
    borderTopEndRadius: 0,
    borderTopStartRadius: 0,
    borderWidth: 1,
    borderColor: Color.ghostWhite,
  },
})
