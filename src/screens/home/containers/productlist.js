import {View, Text, ImageBackground} from "react-native"
import React from "react"
import {FlatList} from "react-native-gesture-handler"
import {Icon} from "react-native-elements"

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

const Item = ({title}) => (
  <View
    style={{
      width: 180,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 8,
      backgroundColor: "white",
    }}>
    <ImageBackground
      style={{
        height: 160,
        width: 180,
      }}
      source={{
        uri: "https://nordiccoder.com/app/uploads/2020/01/6ab1641f-fb02-4f84-b09d-b8f001063b66.png",
      }}>
      <View
        style={{
          width: 30,
          height: 30,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Icon name="camera-outline" type="ionicon" color="black" size={20} />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}>
        <View
          style={{
            width: 30,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Icon name="heart-outline" type="ionicon" color="red" size={20} />
        </View>
      </View>
    </ImageBackground>
    <View
      style={{
        flexDirection: "row",

        alignSelf: "flex-start",
      }}>
      <View style={{flex: 0.8}}>
        <Text style={{alignSelf: "flex-start", color: "black"}}>
          dasadddddddddddddddddddddsdas
        </Text>
      </View>
      <View style={{flex: 0.1}}>
        <Icon
          name="ellipsis-vertical-outline"
          type="ionicon"
          color="black"
          size={23}
        />
      </View>
    </View>
    <Text
      style={{
        alignSelf: "flex-start",
        fontSize: 17,
        fontWeight: "bold",
        color: "red",
      }}>
      100.000 đ
    </Text>
    <Text style={{alignSelf: "flex-start"}}>5 ngay truoc</Text>
  </View>
)

const ProductList = () => {
  const renderItem = ({item}) => <Item title={item.title} />

  return (
    <View style={{marginTop: 5, backgroundColor: "white"}}>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            color: "black",
            marginLeft: 10,
          }}>
          Tin đăng mới
        </Text>
        <FlatList
          numColumns={2}
          data={DATA}
          columnWrapperStyle={{justifyContent: "space-between"}}
          contentContainerStyle={{marginHorizontal: 12}}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  )
}

export default ProductList
