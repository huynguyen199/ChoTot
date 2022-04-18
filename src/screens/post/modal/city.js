import {FlatList, View} from "react-native"
import React, {useEffect, useState} from "react"
import {StyleSheet} from "react-native"
import HeaderModal from "@components/headerModal/index"
import SearchBar from "@components/searchbar"
import ProvinceItem from "./components/provinceItem"
import {useTranslation} from "react-i18next"
import {getAllAddress} from "@utils/address"
import {useNavigation} from "@react-navigation/native"
import {nonAccentVietnamese} from "@utils/nonAccentVietnamese"
import Loading from "@components/loading/index"

const City = () => {
  const [code, setCode] = useState(null)
  const [search, setSearch] = useState(null)
  const [data, setData] = useState([])
  const [refreshing, setRefreshing] = useState(true)

  const {t} = useTranslation()
  const navigation = useNavigation()
  const onGoBack = () => navigation.goBack()

  useEffect(() => {
    setData(getAllAddress)
    setRefreshing(false)
  }, [])

  const onSearch = (text) => {
    const listCity = getAllAddress()
    const result = listCity.filter((item) => {
      const name = nonAccentVietnamese(item.name.toLowerCase())
      return name.includes(text.toLowerCase())
    })
    setData(result)
    setSearch(text)
  }

  const renderCityItem = ({item}) => (
    <ProvinceItem code={code} setCode={setCode} item={item} key={item.code} />
  )

  return (
    <View style={styles.container}>
      <HeaderModal onClose={onGoBack} title={t("post:selectCity")} />
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
export default City
