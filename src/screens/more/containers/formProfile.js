import {View, Dimensions, StyleSheet} from "react-native"
import React, {useState} from "react"
import {Avatar, Icon, Divider} from "react-native-elements"
import {TextInput} from "react-native-paper"
import Icons from "@common/Icon"
import Color from "@common/Color"
import InputPhone from "./inputPhone"
import InputDateOfBirth from "./inputDateOfBirth"
import DialogDateTime from "@components/datePickerDialog"

const {width} = Dimensions.get("window")

const FormProfile = () => {
  const [phone, setPhone] = useState(null)
  const [birthDay, setBirthDay] = useState(null)
  const [date, setDate] = useState(null)

  const [visible, setVisible] = useState(false)

  const onChangeVisible = (value) => {
    setVisible(value)
  }

  const onChangePhone = (value) => {
    setPhone(value)
  }

  const onChangeBirthDay = (value) => {
    setBirthDay(value)
  }
  const RightInput = (
    <TextInput.Icon
      name={() => (
        <Icon
          name={Icons.Material.edit}
          type="material"
          color={Color.grey}
          size={20}
        />
      )}
    />
  )

  return (
    <View>
      <View style={styles.container}>
        <Avatar
          size={80}
          rounded
          source={{uri: "https://randomuser.me/api/portraits/women/57.jpg"}}
          title="Bj"
          containerStyle={styles.containerStyle}>
          <Avatar.Accessory size={23} />
        </Avatar>
        <View style={styles.boxName}>
          <TextInput
            label={"Họ và tên"}
            style={styles.inputName}
            underlineColor="transparent"
            theme={{colors: "transparent"}}
            right={RightInput}
          />
        </View>
      </View>
      <View style={styles.boxInput}>
        <InputPhone value={phone} onChange={onChangePhone} />
        <Divider width={0.5} color={Color.grey} />
        <InputDateOfBirth
          openDialog={onChangeVisible}
          value={birthDay}
          onChange={onChangeBirthDay}
        />
      </View>
      <DialogDateTime
        visible={visible}
        onClose={onChangeVisible}
        value={date}
        onChange={setDate}
      />
    </View>
  )
}

export default FormProfile

const styles = StyleSheet.create({
  containerStyle: {backgroundColor: "grey"},
  boxInput: {marginHorizontal: 5},
  boxName: {marginLeft: 10},
  container: {
    backgroundColor: Color.white,
    borderColor: Color.grey,
    borderWidth: 0.5,
    flexDirection: "row",
    padding: 10,
    margin: 2,
  },
  inputName: {
    width: width / 2 + 80,
    backgroundColor: Color.white,
    height: 70,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.ghostWhite,
  },
})
