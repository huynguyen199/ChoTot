import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import React, {useState} from "react"
import {Input} from "react-native-elements"
import Color from "@common/Color"
import ButtonLogin from "@components/button"
import SocialMethod from "./socialMethod"
import EyeIcon from "./icon/eyeIcon"
import EyeOffIcon from "./icon/eyeOffIcon"
import {useDispatch} from "react-redux"
import {login} from "@redux/slices/auth"

import {mainStack} from "@common/navigator"
import {useNavigation} from "@react-navigation/native"
import {useTranslation} from "react-i18next"
import {useForm, Controller} from "react-hook-form"
import SimpleDialog from "@components/simpleDialog/index"
import {emailContraints, passwordContraints} from "@common/validator"
import {authStack} from "@common/navigator"

const FormLogin = () => {
  const {t} = useTranslation()
  const [isFocus, setIsFocus] = useState({account: false, password: false})
  const [isVisible, setIsVisible] = useState(false)
  const [isFailure, setIsFailure] = useState(false)

  const dispatch = useDispatch()
  const navigation = useNavigation()
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const toggleDialogFailure = () => {
    setIsFailure(!isFailure)
  }

  const onSubmit = (data) => {
    const {email, password} = data

    dispatch(login({email, password}))
      .unwrap()
      .then((auth) => {
        if (auth.user) {
          navigation.navigate(mainStack.homeTab)
        }
      })
      .catch((err) => {
        toggleDialogFailure()
      })
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

  const onMoveForgot = () => {
    navigation.navigate(authStack.forgot)
  }

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            autoFocus
            placeholder={t("auth:yourEmail")}
            inputContainerStyle={styles.inputStyle}
            value={value}
            onChangeText={onChange}
            errorMessage={errors.email && errors.email.message}
            containerStyle={
              isFocus.account
                ? styles.inputContainerHover
                : styles.inputContainerStyle
            }
            onFocus={() => handleInputFocus("account")}
            onBlur={() => handleInputBlur("password")}
          />
        )}
        name="email"
        rules={emailContraints}
      />
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder={t("auth:yourPassword")}
            rightIcon={
              isVisible ? (
                <EyeIcon onPress={showPasswords} />
              ) : (
                <EyeOffIcon onPress={showPasswords} />
              )
            }
            secureTextEntry={isVisible}
            value={value}
            errorMessage={errors.password && errors.password.message}
            inputContainerStyle={styles.inputContainerPass}
            onChangeText={onChange}
            containerStyle={
              isFocus.password
                ? styles.inputContainerHover
                : styles.inputContainerStyle
            }
          />
        )}
        name="password"
        rules={passwordContraints}
      />
      <ButtonLogin
        style={styles.btnLogin}
        color={Color.grey}
        title={t("auth:signIn")}
        onPress={handleSubmit(onSubmit)}
      />
      <TouchableOpacity onPress={onMoveForgot}>
        <Text style={styles.textFoget}>{t("auth:forgotPassword")}</Text>
      </TouchableOpacity>
      <SocialMethod />
      <SimpleDialog
        isVisible={isFailure}
        onBackdropPress={toggleDialogFailure}
        title={t("validator:emailIncorrect")}
      />
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
