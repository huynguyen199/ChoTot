import {View, StyleSheet} from "react-native"
import React from "react"
import {TextInput} from "react-native-paper"
import Color from "@common/Color"
import {Button} from "react-native-elements"
import {useDispatch} from "react-redux"
import Toast from "../../../common/toast"
import {updateProfileInfo} from "@redux/slices/auth"

const InputPhone = ({value, onChangeText, userInfo}) => {
  // dispatch(updateProfileInfo(data))
  const dispatch = useDispatch()

  const onSaveNumberPhone = () => {
    const data = {phone: value}
    dispatch(updateProfileInfo(data))
      .unwrap()
      .then((res) => {
        if (res) {
          Toast.show("Cập nhật số điện thoại thành công")
        }
      })
  }

  return (
    <View style={styles.container}>
      <TextInput
        label={"Số điện thoại"}
        value={value}
        onChangeText={onChangeText}
        style={styles.inputStylePhone}
        keyboardType={"numeric"}
        underlineColor="transparent"
        theme={{colors: "transparent"}}
      />
      {userInfo.phone !== value && (
        <Button
          title="Lưu"
          onPress={onSaveNumberPhone}
          containerStyle={styles.containerStyleButton}
          buttonStyle={styles.btnStyle}
          titleStyle={styles.titleStyle}
        />
      )}
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
