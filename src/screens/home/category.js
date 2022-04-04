import {View, StyleSheet} from "react-native"
import React, {useState} from "react"
import {Header} from "react-native-elements"
import SearchBar from "@components/searchbar/index"
import ProductList from "./containers/category/productList"
import FilterBar from "./containers/category/filterBar"
import LocationBar from "./containers/category/locationBar"
import HeaderLeft from "./containers/category/headerLeft"
import RightComponent from "./containers/category/rightComponent"

const Category = () => {
  const [isGrid, setIsGrid] = useState(true)
  return (
    <View style={styles.container}>
      <Header
        leftComponent={<HeaderLeft />}
        centerComponent={<SearchBar containerStyle={styles.containerStyle} />}
        backgroundColor={"orange"}
        rightComponent={<RightComponent />}
      />
      <View style={styles.flatlistContainer}>
        <ProductList isGrid={isGrid}>
          <LocationBar isGrid={isGrid} setIsGrid={setIsGrid} />
          <FilterBar />
        </ProductList>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {width: 300},
  flatlistContainer: {backgroundColor: "white", flex: 1, padding: 10},
  container: {flex: 1},
})
export default Category
