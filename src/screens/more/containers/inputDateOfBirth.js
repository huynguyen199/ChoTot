import {View, Text, StyleSheet} from "react-native"
import React from "react"
import Color from "@common/Color"
import {TextInput, Colors} from "react-native-paper"
import Icons from "@common/Icon"
import {Button, Icon} from "react-native-elements"
import {TouchableOpacity} from "react-native"
import {useDispatch} from "react-redux"
import {updateProfileInfo} from "@redux/slices/auth"
import {convertToDate, formatDate} from "@utils/date"
import Toast from "@common/toast"

const InputDateOfBirth = ({value, onChangeText, openDialog, userInfo}) => {
  const dispatch = useDispatch()

  const onSaveBirthDate = () => {
    const data = {dateOfBirth: convertToDate(value)}
    dispatch(updateProfileInfo(data))
      .unwrap()
      .then(() => {
        Toast.show("cập nhật ngày sinh thành công")
      })
  }

  if (value) {
    return (
      <>
        <TouchableOpacity onPress={() => openDialog(true)}>
          <View style={styles.containerInput}>
            <TextInput
              label={"Ngày sinh"}
              value={value}
              onChangeText={onChangeText}
              disabled
              keyboardType={"number-pad"}
              style={styles.inputBirthDay}
              underlineColor="transparent"
              theme={{colors: "transparent"}}
            />
            {formatDate(userInfo.dateOfBirth) !== value && (
              <Button
                title="Lưu"
                onPress={onSaveBirthDate}
                containerStyle={styles.containerStyleButton}
                buttonStyle={styles.btnStyle}
                titleStyle={styles.titleStyle}
              />
            )}
          </View>
        </TouchableOpacity>
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
  containerInput: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    alignItems: "center",
  },
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
    flex: 1,
  },
  containerStyleButton: {
    height: 40,
    width: 60,
  },
  btnStyle: {backgroundColor: "rgba(255, 193, 7, 1)"},
  titleStyle: {
    color: "white",
  },
})
