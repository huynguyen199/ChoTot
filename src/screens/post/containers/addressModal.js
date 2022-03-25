import {StyleSheet, View} from "react-native"
import React from "react"
import {Modalize} from "react-native-modalize"
import AutoComplete from "./autoComplete"
import HeaderModal from "@components/headerModal"
import {useNavigation} from "@react-navigation/native"
import Button from "@components/button/index"
import {mainStack} from "@common/navigator"
import {useTranslation} from "react-i18next"
import Color from "@common/Color"

const AddressModal = ({modalizeRef}) => {
  const {t} = useTranslation()
  const navigation = useNavigation()

  const onMoveModal = () => {
    navigation.navigate(mainStack.city)
  }

  return (
    <Modalize ref={modalizeRef} modalHeight={300} withHandle={false}>
      <HeaderModal title={t("address")} />
      <View style={styles.container}>
        <AutoComplete
          onPress={onMoveModal}
          panel={t("post:city")}
          style={styles.styleAutoComplete}
        />
        <AutoComplete
          panel={t("post:district")}
          style={styles.styleAutoComplete}
        />
        <AutoComplete panel={t("post:ward")} style={styles.styleAutoComplete} />
        <Button
          style={styles.styleAutoComplete}
          titleStyle={styles.btnStyle}
          title={t("post:finish")}
          color={Color.orange}
        />
      </View>
    </Modalize>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    height: 230,
    justifyContent: "center",
  },
  styleAutoComplete: {marginTop: 10},
  btnStyle: {fontWeight: "bold", fontSize: 17, color: Color.white},
})

export default AddressModal
