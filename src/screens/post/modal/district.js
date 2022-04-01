import {View} from "react-native"
import React, {useState} from "react"
import {StyleSheet} from "react-native"
import HeaderModal from "@components/headerModal/index"
import SearchBar from "@components/searchbar"
import {ScrollView} from "react-native"
import DistrictItem from "./container/district/districtItem"
import {useTranslation} from "react-i18next"
import {useRoute} from "@react-navigation/native"
import {getAllDistrictByCode} from "@utils/address"
import {nonAccentVietnamese} from "@utils/nonAccentVietnamese"

const District = () => {
  const [code, setCode] = useState(null)
  const {t} = useTranslation()
  const route = useRoute()
  const {codeCity} = route.params
  const [data, setData] = useState(getAllDistrictByCode(codeCity) || [])
  const [search, setSearch] = useState(null)

  const onSearch = (text) => {
    const listDistricts = getAllDistrictByCode(codeCity)
    const result = listDistricts.filter((item) => {
      const name = nonAccentVietnamese(item.name.toLowerCase())

      return name.includes(text.toLowerCase())
    })
    setData(result)
    setSearch(text)
  }

  return (
    <View style={styles.container}>
      <HeaderModal title={t("post:selectDistrict")} />
      <SearchBar
        text={search}
        onChangeText={onSearch}
        containerStyle={styles.containerStyle}
      />
      <ScrollView>
        {data.map((item, index) => (
          <DistrictItem
            code={code}
            setCode={setCode}
            item={item}
            key={item.code}
            codeCity={codeCity}
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
export default District
