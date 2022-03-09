import {View, Text, ScrollView, Image} from "react-native"
import React from "react"

const Item = ({title}) => (
  <View
    style={{
      justifyContent: "center",
      alignItems: "center",
      margin: 10,
    }}>
    <Image
      style={{height: 80, width: 80, borderRadius: 30}}
      source={{
        uri: "https://www.xtmobile.vn/vnt_upload/product/08_2019/thumbs/(600x600)_crop_asus-rog-phone-5-pro.jpg",
      }}
    />
    <Text style={{textAlign: "center"}}>Phone</Text>
  </View>
)

const CategoryList = () => {
  return (
    <View style={{marginTop: 10, backgroundColor: "white"}}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 18,
          margin: 10,
          color: "black",
        }}>
        Khám phá danh mục
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal>
        <View
          style={{
            flexDirection: "row",
            width: 800,
            flexWrap: "wrap",
          }}>
          <Item title={"dsa"} />
          <Item title={"dsa"} />
          <Item title={"dsa"} />
          <Item title={"dsa"} />
          <Item title={"dsa"} />
          <Item title={"dsa"} />
          <Item title={"dsa"} />
          <Item title={"dsa"} />
          <Item title={"dsa"} />
          <Item title={"dsa"} />
          <Item title={"dsa"} />
          <Item title={"dsa"} />
          <Item title={"dsa"} />
          <Item title={"dsa"} />
          <Item title={"dsa"} />
        </View>
      </ScrollView>
    </View>
  )
}

export default CategoryList
