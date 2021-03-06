import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import React, {useState} from "react"
import {Input} from "react-native-elements"
import Color from "@common/Color"
import ButtonLogin from "@components/button"
import EyeIcon from "./icon/eyeIcon"
import EyeOffIcon from "./icon/eyeOffIcon"
import {register} from "@redux/slices/auth"
import {useDispatch, useSelector} from "react-redux"
import {useTranslation} from "react-i18next"
import {useForm, Controller} from "react-hook-form"
import LoadingDialog from "@components/loadingDialog"
import {emailContraints, passwordContraints} from "@common/validator"
import SimpleDialog from "@components/simpleDialog/index"
import {showLoading, hideLoading} from "../../../redux/slices/loading"

const FormRegister = () => {
  const [isFocus, setIsFocus] = useState({account: false, password: false})
  const [isVisible, setIsVisible] = useState(true)
  const [isNotify, setIsNotify] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.progress.loading)

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
  const {t} = useTranslation()

  const toggleDialog = () => {
    setIsNotify(!isNotify)
  }

  const toggleDialogSuccess = () => {
    setIsSuccess(!isSuccess)
  }
  const onSubmit = (data) => {
    dispatch(showLoading())
    const {email, password} = data
    dispatch(register({email, password}))
      .unwrap()
      .then((res) => {
        if (res.user) {
          dispatch(hideLoading())

          toggleDialogSuccess()
        }
      })
      .catch((err) => {
        toggleDialog()
        dispatch(hideLoading())
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

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            autoFocus
            placeholder={t("auth:yourNumber")}
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
            errorMessage={errors.password && errors.password.message}
            rightIcon={
              isVisible ? (
                <EyeIcon onPress={showPasswords} />
              ) : (
                <EyeOffIcon onPress={showPasswords} />
              )
            }
            secureTextEntry={isVisible}
            value={value}
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
        title={t("auth:signUp")}
        onPress={handleSubmit(onSubmit)}
      />
      <View style={styles.boxTerm}>
        <Text style={styles.textFoget}>{t("auth:acceptTermOfUse")}</Text>
        <TouchableOpacity>
          <Text style={styles.textTerm}> {t("auth:termOfUse")} </Text>
        </TouchableOpacity>
        <Text style={styles.textFoget}>{t("auth:whose")}</Text>
      </View>
      {/* <SocialMethod /> */}
      <SimpleDialog
        isVisible={isNotify}
        onBackdropPress={toggleDialog}
        title={t("validator:accountExists")}
      />
      <SimpleDialog
        isVisible={isSuccess}
        onBackdropPress={toggleDialogSuccess}
        title={t("auth:loginSuccess")}
      />
      <LoadingDialog isVisible={loading} />
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
