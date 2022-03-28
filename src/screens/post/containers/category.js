import {StyleSheet, View} from "react-native"
import React from "react"
import AutoComplete from "./autoComplete"
import {useTranslation} from "react-i18next"

const Category = () => {
  const {t} = useTranslation()

  return (
    <View style={styles.container}>
      <AutoComplete panel={t("post:category")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {marginHorizontal: 10, marginTop: 10},
})

export default Category