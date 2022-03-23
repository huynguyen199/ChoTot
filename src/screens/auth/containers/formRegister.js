import {View, Text, StyleSheet, TouchableOpacity, Alert} from "react-native"
import React, {useState} from "react"
import {Input} from "react-native-elements"
import Color from "@common/Color"
import ButtonLogin from "@components/button"
import SocialMethod from "./socialMethod"
import EyeIcon from "./icon/eyeIcon"
import EyeOffIcon from "./icon/eyeOffIcon"
import {useValidation} from "react-native-form-validator"
import {register} from "@redux/slices/auth"
import {useDispatch} from "react-redux"
import {useTranslation} from "react-i18next"

const FormRegister = () => {
  const [isFocus, setIsFocus] = useState({account: false, password: false})
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {t} = useTranslation()

  const dispatch = useDispatch()
  const {validate} = useValidation({
    state: {email, password},
  })

  const onCreatedAccount = () => {
    const isValid = validate({
      email: {email: true, required: true},
      password: {required: true},
    })
    if (isValid) {
      dispatch(register({email, password}))
        .unwrap()
        .then((auth) => {
          if (auth.user.status === 201) {
            Alert.alert("Đăng ký thành công.")
          }
        })
    }
  }
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
    setEmail(value)
  }

  const onChangePassword = (value) => {
    setPassword(value)
  }

  return (
    <View style={styles.container}>
      <Input
        autoFocus
        placeholder={t("auth:yourNumber")}
        inputContainerStyle={styles.inputStyle}
        value={email}
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
        placeholder={t("auth:yourPassword")}
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
        onPress={onCreatedAccount}
      />
      <View style={styles.boxTerm}>
        <Text style={styles.textFoget}>{t("auth:acceptTermOfUse")}</Text>
        <TouchableOpacity>
          <Text style={styles.textTerm}> {t("auth:termOfUse")} </Text>
        </TouchableOpacity>
        <Text style={styles.textFoget}>{t("auth:whose")}</Text>
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
