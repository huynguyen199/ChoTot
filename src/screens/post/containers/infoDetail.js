import {View, Text} from "react-native"
import React from "react"
import Color from "@common/Color"
import CameraBar from "./cameraBar"
import {TextInput} from "react-native-paper"
import {StyleSheet} from "react-native"
import AutoComplete from "./autoComplete"
import Button from "@components/button/index"
import PictureBar from "./pictureBar"
import {useTranslation} from "react-i18next"

const InfoDetail = ({onOpen}) => {
  const {t} = useTranslation()

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.txtTitle}>{t("post:details")}</Text>
      </View>
      <View style={styles.formInput}>
        <PictureBar />
        <CameraBar />
        <TextInput
          style={[styles.inputStyle, styles.inputStylePrice]}
          selectionColor={"red"}
          underlineColor="transparent"
          theme={{colors: "transparent"}}
          label="Tên"
        />
        <TextInput
          style={[styles.inputStyle, styles.inputStylePrice]}
          selectionColor={"red"}
          underlineColor="transparent"
          theme={{colors: "transparent"}}
          label="Giá"
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.inputStyle, styles.inputStyleDetail]}
          selectionColor={"red"}
          underlineColor="transparent"
          theme={{colors: "transparent"}}
          label="Miêu tả"
          multiline
        />
        <AutoComplete
          onPress={onOpen}
          panel={"Địa chỉ"}
          style={styles.styleAutoComplete}
        />
        <Button
          title={"ĐĂNG TIN"}
          style={styles.btnStyle}
          color={Color.orange}
          titleStyle={styles.btnStyleTitle}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 50,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderRadius: 10,
    borderColor: Color.orange,
    borderWidth: 1,
    backgroundColor: Color.white,
  },
  container: {
    backgroundColor: Color.grey,
    padding: 15,
    marginTop: 10,
  },
  txtTitle: {
    fontWeight: "bold",
  },
  inputStyleName: {marginTop: 10},
  inputStylePrice: {marginTop: 10},
  inputStyleDetail: {marginTop: 10, height: 200},
  btnStyleTitle: {fontSize: 16, fontWeight: "bold", color: "white"},
  styleAutoComplete: {marginTop: 10},
  btnStyle: {marginTop: 10},
  formInput: {margin: 10},
})

export default InfoDetail
