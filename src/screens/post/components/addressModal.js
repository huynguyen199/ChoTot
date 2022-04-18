import {StyleSheet, View} from "react-native"
import React, {useEffect, useState} from "react"
import {Modalize} from "react-native-modalize"
import AutoComplete from "./autoComplete"
import HeaderModal from "@components/headerModal"
import {useNavigation, useRoute} from "@react-navigation/native"
import Button from "@components/button/index"
import {mainStack} from "@common/navigator"
import {useTranslation} from "react-i18next"
import Color from "@common/Color"
import {
  findByCodeCity,
  findByCodeDistrict,
  findByCodeWard,
} from "@utils/address"

const AddressModal = ({modalizeRef, addressText, setAddressText, onClose}) => {
  const route = useRoute()
  const {address} = route.params

  const {t} = useTranslation()
  const navigation = useNavigation()

  const [city, setCity] = useState({})
  const [district, setDistrict] = useState({})
  const [ward, setWard] = useState({})

  useEffect(() => {
    clearForm()
  }, [addressText])

  const clearForm = () => {
    setCity({})
    setDistrict({})
    setWard({})
  }

  useEffect(() => {
    if (address.codeCity) {
      const result = findByCodeCity(address.codeCity)
      setCity(result)
    }
    if (address.codeDistrict) {
      const result = findByCodeDistrict(address.codeCity, address.codeDistrict)
      setDistrict(result)
    }
    if (address.codeWard) {
      const result = findByCodeWard(
        address.codeCity,
        address.codeDistrict,
        address.codeWard,
      )

      setWard(result)
    }
  }, [address])

  const onMoveCityModal = () => {
    navigation.navigate(mainStack.city)
  }
  const onMoveDistrictModal = () => {
    if (city.name) {
      navigation.navigate(mainStack.district, {codeCity: city.code})
    }
  }

  const onMoveWardModal = () => {
    if (city.name) {
      navigation.navigate(mainStack.ward, {
        codeCity: city.code,
        codeDistrict: district.code,
      })
    }
  }

  const onSubmitForm = () => {
    const localtion = city.name + ", " + district.name + ", " + ward.name
    setAddressText(localtion)
    onClose()
  }

  return (
    <Modalize ref={modalizeRef} modalHeight={300} withHandle={false}>
      <HeaderModal title={t("address")} />
      <View style={styles.container}>
        <AutoComplete
          onPress={onMoveCityModal}
          panel={t("post:city")}
          disabled={true}
          style={styles.styleAutoComplete}
          value={city.name}
        />
        <AutoComplete
          disabled={true}
          onPress={onMoveDistrictModal}
          panel={t("post:district")}
          style={styles.styleAutoComplete}
          value={district.name}
        />
        <AutoComplete
          disabled={true}
          panel={t("post:ward")}
          value={ward.name}
          onPress={onMoveWardModal}
          style={styles.styleAutoComplete}
        />
        <Button
          style={styles.styleAutoComplete}
          titleStyle={styles.btnStyle}
          title={t("post:finish")}
          color={Color.orange}
          onPress={onSubmitForm}
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
