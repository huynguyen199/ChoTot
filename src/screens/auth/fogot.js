import {View, StyleSheet} from "react-native"
import React, {useState} from "react"
import {Header, Icon, Input} from "react-native-elements"
import Icons from "@common/Icon"
import Color from "@common/Color"
import ButtonFogot from "@components/button/index"

const Fogot = () => {
  const [account, setAccount] = useState("")

  const onChangeAccount = (value) => {
    setAccount(value)
  }
  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.headerStyle}
        centerComponent={{text: "Quên mật khẩu", style: styles.heading}}
        leftComponent={
          <Icon
            name={Icons.Ionicons.back}
            type="ionicon"
            color="black"
            size={36}
          />
        }
        backgroundColor={Color.orange}
      />
      <View style={styles.body}>
        <Input
          autoFocus
          value={account}
          onChangeText={onChangeAccount}
          placeholder="Nhập số điện thoại của bạn"
          inputContainerStyle={styles.inputStyle}
          containerStyle={styles.inputContainerStyle}
          //   value={account}
          //   onChangeText={onChangeAccount}
        />
        <ButtonFogot
          style={styles.btnFoget}
          title={"Đồng ý"}
          color={Color.grey}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerStyle: {borderBottomWidth: 0},
  heading: {
    color: Color.black,
    fontSize: 22,
    fontWeight: "bold",
  },
  body: {
    flex: 1,
    marginHorizontal: 20,
  },
  inputStyle: {borderBottomWidth: 0, top: 3},
  inputContainerStyle: {
    borderColor: Color.grey,
    borderWidth: 1,
    height: 55,
    borderRadius: 10,
    marginTop: 30,
  },
  btnFoget: {marginTop: 20},
})
export default Fogot
