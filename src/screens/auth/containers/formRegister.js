import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import React, {useState} from "react"
import {Input} from "react-native-elements"
import Color from "@common/Color"
import ButtonLogin from "@components/button"
import SocialMethod from "./socialMethod"
import EyeIcon from "./icon/eyeIcon"
import EyeOffIcon from "./icon/eyeOffIcon"

const FormRegister = () => {
  const [isFocus, setIsFocus] = useState({account: false, password: false})
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
          isFocus.account
            ? styles.inputContainerHover
            : styles.inputContainerStyle
        }
        onFocus={() => handleInputFocus("account")}
        onBlur={() => handleInputBlur("password")}
      />
      <Input
        placeholder="Nhập mật khẩu"
        rightIcon={
          isVisible ? (
            <EyeOffIcon onPress={showPasswords} />
          ) : (
            <EyeIcon onPress={showPasswords} />
          )
        }
        value={password}
        inputContainerStyle={styles.inputContainerPass}
        onChangeText={onChangePassword}
        containerStyle={
          isFocus.password
            ? styles.inputContainerHover
            : styles.inputContainerStyle
        }
      />
      <ButtonLogin
        style={styles.btnLogin}
        color={Color.grey}
        title={"Đăng ký"}
      />
      <View style={styles.boxTerm}>
        <Text style={styles.textFoget}>
          Bằng việc Đăng ký, bạn đã đồng ý với
        </Text>
        <TouchableOpacity>
          <Text style={styles.textTerm}> Điều khoản sử dụng </Text>
        </TouchableOpacity>
        <Text style={styles.textFoget}>của Chợ Tốt</Text>
      </View>
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
    fontSize: 16,
  },
  textTerm: {
    color: Color.blue,
    fontWeight: "bold",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  boxTerm: {
    flexDirection: "row",
    marginTop: 20,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  inputContainerPass: {borderBottomWidth: 0, top: 3},
  btnLogin: {marginTop: 20},
  inputStyle: {borderBottomWidth: 0, top: 3},
})

export default FormRegister
