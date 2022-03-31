import {View} from "react-native"
import React, {useState} from "react"
import {StyleSheet} from "react-native"
import HeaderModal from "@components/headerModal"
import SearchBar from "@components/searchbar"
import {ScrollView} from "react-native"
import WardItem from "./container/ward/wardItem"
import {useRoute} from "@react-navigation/native"
import {getAllWardByCode} from "@utils/address"
import {nonAccentVietnamese} from "@utils/nonAccentVietnamese"
import {useTranslation} from "react-i18next"

const Ward = () => {
  const [code, setCode] = useState(null)
  const route = useRoute()
  const {codeDistrict, codeCity} = route.params
  const [search, setSearch] = useState(null)
  const {t} = useTranslation()
  const [data, setData] = useState(
    getAllWardByCode(codeCity, codeDistrict) || [],
  )

  const onSearch = (text) => {
    const listWard = getAllWardByCode(codeCity, codeDistrict)
    const result = listWard.filter((item) => {
      const name = nonAccentVietnamese(item.name.toLowerCase())
      return name.includes(text.toLowerCase())
    })
    setData(result)
    setSearch(text)
  }

  return (
    <View style={styles.container}>
      <HeaderModal title={t("modal:selectWard")} />
      <SearchBar
        text={search}
        onChangeText={onSearch}
        containerStyle={styles.containerStyle}
      />
      <ScrollView>
        {data.map((item, index) => (
          <WardItem
            code={code}
            codeDistrict={codeDistrict}
            codeCity={codeCity}
            setCode={setCode}
            item={item}
            key={item.code}
          />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 30,
  },
  containerStyle: {width: "100%"},
})
export default Ward
