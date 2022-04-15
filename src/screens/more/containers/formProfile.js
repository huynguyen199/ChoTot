import {View, Dimensions, StyleSheet} from "react-native"
import React, {useEffect, useState} from "react"
import {Avatar, Divider, Button} from "react-native-elements"
import {TextInput} from "react-native-paper"
import Color from "@common/Color"
import InputPhone from "./inputPhone"
import InputDateOfBirth from "./inputDateOfBirth"
import DialogDateTime from "@components/datePickerDialog"
import {launchImageLibrary} from "@utils/imagePicker"
import {uploadImage} from "@common/upload"
import {updateProfileInfo} from "@redux/slices/auth"
import {useDispatch} from "react-redux"
import Loading from "@components/loading"
import Toast from "@common/toast"
import {format} from "date-fns/esm"
const {width} = Dimensions.get("window")

const FormProfile = ({userInfo, loading}) => {
  const [phone, setPhone] = useState(null)
  const [name, setName] = useState(null)
  const [birthDay, setBirthDay] = useState(null)
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setPhone(userInfo.phone)
    setName(userInfo.name)
    setBirthDay(format(new Date(userInfo.dateOfBirth), "dd/MM/yyyy"))
  }, [userInfo])

  const onChangeVisible = (value) => {
    setVisible(value)
  }

  const onChangePhone = (value) => {
    setPhone(value)
  }

  const onChangeBirthDay = (value) => {
    setBirthDay(value)
  }
  const onChangeName = (value) => {
    setName(value)
  }

  const onSelectImage = async () => {
    const res = await launchImageLibrary()
    const fileUri = res.assets[0].uri
    const type = res.assets[0].type
    const fileName = res.assets[0].fileName
    const id = res.assets[0].id
    let file = {
      name: fileName,
      type,
      uri: fileUri,
      id,
    }
    await postImage(file)
  }
  const postImage = async (file) => {
    const formData = new FormData()
    formData.append("file", file)
    const response = await uploadImage(formData)
    const data = {avatarUrl: response.data.url}
    dispatch(updateProfileInfo(data))
      .unwrap()
      .then((data) => {
        if (data) {
          Toast.show("tải ảnh thành công")
        }
      })
  }
  const onSaveFullName = () => {
    const data = {name: name}
    dispatch(updateProfileInfo(data))
      .unwrap()
      .then((data) => {
        if (data) {
          Toast.show("cập nhật tên thành công")
        }
      })
  }

  if (loading) {
    return <Loading />
  }

  return (
    <View>
      <View style={styles.container}>
        <Avatar
          size={80}
          onPress={onSelectImage}
          rounded
          source={{uri: userInfo.avatarUrl}}
          containerStyle={styles.containerStyle}
        />
        <View style={styles.boxName}>
          <TextInput
            label={"Họ và tên"}
            style={styles.inputName}
            underlineColor="transparent"
            theme={{colors: "transparent"}}
            // right={RightInput}
            value={name}
            onChangeText={onChangeName}
          />
          {userInfo.name !== name && (
            <Button
              title="Lưu"
              onPress={onSaveFullName}
              containerStyle={styles.containerStyleButton}
              buttonStyle={styles.btnStyle}
              titleStyle={styles.titleStyle}
            />
          )}
        </View>
      </View>
      <View style={styles.boxInput}>
        <InputPhone
          userInfo={userInfo}
          value={phone}
          onChangeText={onChangePhone}
        />
        <Divider width={0.5} color={Color.grey} />
        <InputDateOfBirth
          userInfo={userInfo}
          openDialog={onChangeVisible}
          value={birthDay}
          onChangeText={onChangeBirthDay}
        />
      </View>
      <DialogDateTime
        visible={visible}
        onClose={onChangeVisible}
        value={birthDay}
        onChange={setBirthDay}
      />
    </View>
  )
}

export default FormProfile

const styles = StyleSheet.create({
  iconStyle: {marginLeft: 50},
  containerStyle: {backgroundColor: "grey"},
  boxInput: {marginHorizontal: 5},
  boxName: {marginLeft: 10, flexDirection: "row", alignItems: "center"},
  container: {
    backgroundColor: Color.white,
    borderColor: Color.grey,
    borderWidth: 0.5,
    flexDirection: "row",
    padding: 10,
    margin: 2,
  },
  inputName: {
    width: width / 2 + 30,
    backgroundColor: Color.white,
    height: 70,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.ghostWhite,
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
