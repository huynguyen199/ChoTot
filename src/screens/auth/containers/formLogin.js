import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import React, {useState} from "react"
import {Input} from "react-native-elements"
import Color from "@common/Color"
import ButtonLogin from "@components/button"
import SocialMethod from "./socialMethod"
import EyeIcon from "./icon/eyeIcon"
import EyeOffIcon from "./icon/eyeOffIcon"

const FormLogin = () => {
  const [isFocus, setIsFocus] = useState({acount: false, password: false})
  const [isVisible, setIsVisible] = useState(false)
  const [account, setAccount] = useState("")
  const [password, setPassword] = useState("")

  const handleInputFocus = (text) => {
    setIsFocus({
      [text]: true,
    })
  }
  const handleInputBlur = (text) => {
    setIsFocus({
      [text]: true,
    })
  }

  const showPasswords = () => {
    setIsVisible(!isVisible)
  }

  const onChangeAccount = (value) => {
    setAccount(value)
  }

  const onChangePassword = (value) => {
    setPassword(value)
  }

  return (
    <View style={styles.container}>
      <Input
        autoFocus
        placeholder="Nhập số điện thoại của bạn"
        inputContainerStyle={styles.inputStyle}
        value={account}
        onChangeText={onChangeAccount}
        containerStyle={
          !isFocus.acount
            ? styles.inputContainerStyle
            : styles.inputContainerHover
        }
        onFocus={() => handleInputFocus("acount")}
        onBlur={() => handleInputBlur("password")}
      />
      <Input
        placeholder="Nhập mật khẩu"
        rightIcon={
          !isVisible ? (
            <EyeIcon onPress={showPasswords} />
          ) : (
            <EyeOffIcon onPress={showPasswords} />
          )
        }
        value={password}
        inputContainerStyle={styles.inputContainerPass}
        onChangeText={onChangePassword}
        containerStyle={
          !isFocus.password
            ? styles.inputContainerStyle
            : styles.inputContainerHover
        }
      />
      <ButtonLogin
        style={styles.btnLogin}
        color={Color.grey}
        title={"Đăng nhập"}
      />
      <TouchableOpacity>
        <Text style={styles.textFoget}>Bạn quên mật khẩu</Text>
      </TouchableOpacity>
      <SocialMethod />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  inputContainerStyle: {
    borderColor: Color.grey,
    borderWidth: 1,
    height: 55,
    borderRadius: 10,
    marginTop: 20,
  },
  inputContainerHover: {
    borderColor: Color.black,
    borderWidth: 1,
    height: 55,
    borderRadius: 10,
    marginTop: 20,
  },
  textFoget: {
    alignSelf: "center",
    marginTop: 20,
    color: Color.blue,
    fontSize: 16,
    fontWeight: "700",
  },
  inputContainerPass: {borderBottomWidth: 0, top: 3},
  btnLogin: {marginTop: 20},
  inputStyle: {borderBottomWidth: 0, top: 3},
})

export default FormLogin
