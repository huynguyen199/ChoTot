import {FlatList, View} from "react-native"
import React, {useEffect, useState} from "react"
import {StyleSheet} from "react-native"
import HeaderModal from "@components/headerModal"
import SearchBar from "@components/searchbar"
import WardItem from "./container/ward/wardItem"
import {useNavigation, useRoute} from "@react-navigation/native"
import {getAllWardByCode} from "@utils/address"
import {nonAccentVietnamese} from "@utils/nonAccentVietnamese"
import {useTranslation} from "react-i18next"
import Loading from "@components/loading/index"

const Ward = () => {
  const [code, setCode] = useState(null)
  const route = useRoute()
  const {codeDistrict, codeCity} = route.params
  const [search, setSearch] = useState(null)
  const {t} = useTranslation()
  const [data, setData] = useState([])
  const [refreshing, setRefreshing] = useState(true)
  const navigation = useNavigation()

  useEffect(() => {
    setData(getAllWardByCode(codeCity, codeDistrict))
    setRefreshing(false)
  }, [codeDistrict, codeCity])

  const onSearch = (text) => {
    const listWard = getAllWardByCode(codeCity, codeDistrict)
    const result = listWard.filter((item) => {
      const name = nonAccentVietnamese(item.name.toLowerCase())
      return name.includes(text.toLowerCase())
    })
    setData(result)
    setSearch(text)
  }

  const onBackDistrict = () => {
    navigation.goBack()
  }

  const renderDistrictItem = ({item}) => (
    <WardItem
      code={code}
      codeDistrict={codeDistrict}
      codeCity={codeCity}
      setCode={setCode}
      item={item}
      key={item.code}
    />
  )
  return (
    <View style={styles.container}>
      <HeaderModal onClose={onBackDistrict} title={t("modal:selectWard")} />
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
          renderItem={renderDistrictItem}
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
export default Ward
