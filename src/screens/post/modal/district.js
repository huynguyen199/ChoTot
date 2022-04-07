import {FlatList, View} from "react-native"
import React, {useEffect, useState} from "react"
import {StyleSheet} from "react-native"
import HeaderModal from "@components/headerModal"
import SearchBar from "@components/searchbar"
import DistrictItem from "./container/district/districtItem"
import {useTranslation} from "react-i18next"
import {useNavigation, useRoute} from "@react-navigation/native"
import {getAllDistrictByCode} from "@utils/address"
import {nonAccentVietnamese} from "@utils/nonAccentVietnamese"
import Loading from "@components/loading/index"

const District = () => {
  const [code, setCode] = useState(null)
  const {t} = useTranslation()
  const route = useRoute()
  const {codeCity} = route.params
  const [data, setData] = useState([])
  const [search, setSearch] = useState(null)
  const [refreshing, setRefreshing] = useState(true)
  const navigation = useNavigation()
  useEffect(() => {
    setData(getAllDistrictByCode(codeCity))
    setRefreshing(false)
  }, [codeCity])

  const onSearch = (text) => {
    const listDistricts = getAllDistrictByCode(codeCity)
    const result = listDistricts.filter((item) => {
      const name = nonAccentVietnamese(item.name.toLowerCase())

      return name.includes(text.toLowerCase())
    })
    setData(result)
    setSearch(text)
  }
  const onBackCity = () => {
    navigation.goBack()
  }

  const renderCityItem = ({item}) => (
    <DistrictItem
      code={code}
      setCode={setCode}
      item={item}
      codeCity={codeCity}
    />
  )

  return (
    <View style={styles.container}>
      <HeaderModal onClose={onBackCity} title={t("post:selectDistrict")} />
      <SearchBar
        text={search}
        onChangeText={onSearch}
        containerStyle={styles.containerStyle}
      />
      {refreshing ? (
        <Loading />
      ) : (
        <FlatList
          data={data}
          renderItem={renderCityItem}
          keyExtractor={(item) => item.code}
        />
      )}
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
