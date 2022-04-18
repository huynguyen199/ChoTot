import {View, StyleSheet} from "react-native"
import React, {useState} from "react"
import {Header} from "react-native-elements"
import SearchBar from "@components/searchbar/index"
import ProductList from "./components/category/productList"
import FilterBar from "./components/category/filterBar"
import LocationBar from "./components/category/locationBar"
import HeaderLeft from "./components/category/headerLeft"
import RightComponent from "./components/category/rightComponent"

const Category = () => {
  const [isGrid, setIsGrid] = useState(true)
  return (
    <View style={styles.container}>
      <Header
        leftComponent={<HeaderLeft />}
        centerComponent={<SearchBar componentstyle={styles.componentstyle} />}
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
  componentstyle: {width: 300},
  flatlistContainer: {backgroundColor: "white", flex: 1, padding: 10},
  container: {flex: 1},
})
export default Category
