import {View, Text, StyleSheet} from "react-native"
import React from "react"
import {FlatList} from "react-native-gesture-handler"
import ProductItem from "./productItem"
import Color from "@common/Color"
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e2s9d72",
    title: "Third Item",
  },
]

const ProductList = () => {
  const renderItem = ({item}) => <ProductItem title={item.title} />

  return (
    <View style={styles.container}>
      <View style={styles.boxHeader}>
        <View style={styles.boxTitle}>
          <Text style={styles.textTitle}>Tin rao khác</Text>
        </View>
        <FlatList
          numColumns={2}
          data={DATA}
          columnWrapperStyle={styles.flatColumnWapper}
          contentContainerStyle={styles.flatContent}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {},
  textTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: Color.black,
    marginLeft: 5,
  },
  boxHeader: {backgroundColor: Color.lightGrey},
  flatContent: {marginHorizontal: 5},
  flatColumnWapper: {justifyContent: "space-between"},
  boxTitle: {backgroundColor: Color.white, padding: 10},
})

export default ProductList
