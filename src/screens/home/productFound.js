import {View, StyleSheet} from "react-native"
import React, {useState} from "react"
import ProductList from "./containers/productFound/productList"
import LocationBar from "./containers/productFound/locationBar"
import FilterBar from "./containers/productFound/filterBar"
import {Header, Icon} from "react-native-elements"
import SearchBar from "@components/searchbar"
import Icons from "@common/Icon"
import {useNavigation, useRoute} from "@react-navigation/native"

const ProductFound = () => {
  const [isGrid, setIsGrid] = useState(true)
  const route = useRoute()
  const {wordSearch} = route.params
  const navigation = useNavigation()

  const onBackSearch = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Header
        leftComponent={
          <View style={styles.containerHeaderLeft}>
            <Icon
              onPress={onBackSearch}
              name={Icons.Ionicons.back}
              type="ionicon"
              color="black"
              size={30}
            />
            <SearchBar
              text={wordSearch}
              editable={false}
              onPress={onBackSearch}
            />
          </View>
        }
        backgroundColor={"orange"}
      />
      <View style={styles.flatlistContainer}>
        <ProductList wordSearch={wordSearch} isGrid={isGrid}>
          <LocationBar isGrid={isGrid} setIsGrid={setIsGrid} />
          <FilterBar />
        </ProductList>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerHeaderLeft: {flexDirection: "row", alignItems: "center"},
  containerStyle: {width: 300},
  flatlistContainer: {backgroundColor: "white", flex: 1, padding: 10},
  container: {flex: 1},
})
export default ProductFound
