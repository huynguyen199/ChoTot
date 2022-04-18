import {View, Text} from "react-native"
import React, {useState} from "react"
import Color from "@common/Color"
import CameraBar from "./cameraBar"
import {TextInput, HelperText} from "react-native-paper"
import {StyleSheet} from "react-native"
import AutoComplete from "./autoComplete"
import Button from "@components/button/index"
import PictureBar from "./pictureBar"
import {useTranslation} from "react-i18next"
import {launchImageLibrary} from "@utils/imagePicker"
import SimpleDialog from "@components/simpleDialog"
import {addProduct, updateProduct} from "@redux/slices/product"
import {useDispatch} from "react-redux"
import {useEffect} from "react"
import {uploadImage} from "@common/upload"
import LoadingDialog from "@components/loadingDialog"

// address
const InfoDetail = ({
  onOpen,
  addressText,
  setAddressText,
  categoryItem,
  product,
  productId,
}) => {
  const [name, setName] = useState(null)
  const [price, setPrice] = useState(null)
  const [description, setDescription] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const {t} = useTranslation()
  const [images, setImages] = useState([])
  const dispatch = useDispatch()

  const [validator, setValidator] = useState({
    isName: false,
    isPrice: false,
    isDescription: false,
    isAddress: false,
  })

  //fill product into form post
  useEffect(() => {
    if (productId && product) {
      setImages([])
      const image = {
        id: product.imageUrl,
        name: product.imageUrl,
        type: "image/jpeg",
        uri: product.imageUrl,
      }
      setImages((pre) => [...pre, image])
      setName(product.name)
      setPrice(String(product.price))
      setDescription(product.description)
      setAddressText(product.location)
    }
  }, [product, productId, setAddressText])

  useEffect(() => {
    if (addressText) {
      setValidator((prev) => ({...prev, isAddress: false}))
    }
  }, [addressText, setAddressText])

  const clearForm = () => {
    setName(null)
    setPrice(null)
    setDescription(null)
    setAddressText(null)
  }

  const onChangeName = (value) => {
    setName(value)
  }
  const onChangePrice = (value) => {
    setPrice(value)
  }

  const onChangeDescription = (value) => {
    setDescription(value)
  }
  const onAddImage = async () => {
    const res = await launchImageLibrary()
    const fileUri = res.assets[0].uri
    const type = res.assets[0].type
    const fileName = res.assets[0].fileName
    const id = res.assets[0].id
    let file = {
      name: fileName,
      type,
      uri: fileUri,
      id,
    }
    if (file) {
      setImages((pre) => [...pre, file])
    }
  }
  const changeImages = (data) => {
    setImages(data)
  }

  const onEndEditName = () => {
    setValidator((prev) => ({...prev, isName: !name}))
  }

  const onEndEditPrice = () => {
    setValidator((prev) => ({...prev, isPrice: !price}))
  }
  const onEndEditDescription = () => {
    setValidator((prev) => ({...prev, isDescription: !description}))
  }

  const onEndEditAddress = () => {
    setValidator((prev) => ({...prev, isAddress: !addressText}))
  }

  const toggleDialog = () => {
    setIsVisible(!isVisible)
  }
  const toggleDialogSuccess = () => {
    setIsSuccess(!isSuccess)
  }
  const postNews = async () => {
    const formData = new FormData()
    const file = {
      name: images[0].name,
      type: images[0].type,
      uri: images[0].uri,
    }
    formData.append("file", file)

    const response = await uploadImage(formData)

    const data = {
      name,
      price,
      description,
      location: addressText,
      category: categoryItem._id,
      imageUrl: response.data.url,
    }

    dispatch(addProduct(data))
      .unwrap()
      .then((res) => {
        if (res) {
          setLoading(false)
          clearForm()
          toggleDialogSuccess()
        }
      })
  }

  const updateNews = async () => {
    const formData = new FormData()
    const file = {
      name: images[0].name,
      type: images[0].type,
      uri: images[0].uri,
    }
    formData.append("file", file)

    const response = await uploadImage(formData)

    const data = {
      name,
      price,
      description,
      location: addressText,
      category: categoryItem._id,
      imageUrl: response.data.url,
    }

    dispatch(updateProduct({id: productId, data}))
      .unwrap()
      .then((res) => {
        if (res) {
          setLoading(false)
          clearForm()
          toggleDialogSuccess()
        }
      })
      .catch((err) => {
        setLoading(false)
      })
  }

  const onSubmitForm = async () => {
    setLoading(true)
    if (images.length === 0) {
      return toggleDialog()
    } else if (name == null) {
      return setValidator((prev) => ({...prev, isName: true}))
    } else if (price == null) {
      return setValidator((prev) => ({...prev, isPrice: true}))
    } else if (description == null) {
      return setValidator((prev) => ({...prev, isDescription: true}))
    } else if (addressText == null) {
      return setValidator((prev) => ({...prev, isAddress: true}))
    }
    if (product) {
      await updateNews()
    } else {
      await postNews()
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.txtTitle}>{t("post:details")}</Text>
      </View>
      <View style={styles.formInput}>
        <PictureBar
          isVisible={images.length > 0}
          images={images}
          changeImages={changeImages}
          onPress={onAddImage}
        />
        <CameraBar isVisible={images.length <= 0} onPress={onAddImage} />
        <TextInput
          style={[
            styles.inputStyle,
            validator.isName
              ? styles.inputStyleNameError
              : styles.inputStyleName,
          ]}
          underlineColor="transparent"
          selectionColor={"red"}
          theme={{colors: "transparent"}}
          label="Tên"
          value={name}
          onEndEditing={onEndEditName}
          onChangeText={onChangeName}
        />
        <HelperText type="error" visible={validator.isName}>
          {t("validator:fillName")}
        </HelperText>
        <TextInput
          style={[
            styles.inputStyle,
            validator.isPrice
              ? styles.inputStylePriceError
              : styles.inputStylePrice,
          ]}
          selectionColor={"red"}
          underlineColor="transparent"
          theme={{colors: "transparent"}}
          label="Giá"
          keyboardType="numeric"
          value={price}
          onEndEditing={onEndEditPrice}
          onChangeText={onChangePrice}
        />
        <HelperText type="error" visible={validator.isPrice}>
          {t("validator:fillPrice")}
        </HelperText>
        <TextInput
          style={[
            styles.inputStyle,
            validator.isDescription
              ? styles.inputStyleDetailError
              : styles.inputStyleDetail,
          ]}
          selectionColor={"red"}
          underlineColor="transparent"
          theme={{colors: "transparent"}}
          label="Miêu tả"
          multiline
          value={description}
          onEndEditing={onEndEditDescription}
          onChangeText={onChangeDescription}
        />
        <HelperText type="error" visible={validator.isDescription}>
          {t("validator:fillDescription")}
        </HelperText>
        <AutoComplete
          onPress={onOpen}
          value={addressText}
          panel={"Địa chỉ"}
          disabled={addressText === null}
          onEndEditing={onEndEditAddress}
          style={
            validator.isAddress
              ? styles.styleAutoCompleteError
              : styles.styleAutoComplete
          }
        />
        <HelperText type="error" visible={validator.isAddress}>
          {t("validator:fillAddress")}
        </HelperText>
        <Button
          title={product ? "CẬP NHẬT TIN" : "ĐĂNG TIN"}
          style={styles.btnStyle}
          color={Color.orange}
          onPress={onSubmitForm}
          titleStyle={styles.btnStyleTitle}
        />
        <SimpleDialog
          onBackdropPress={toggleDialog}
          title={t("validator:postAtLeast")}
          isVisible={isVisible}
        />
        {product ? (
          <SimpleDialog
            onBackdropPress={toggleDialogSuccess}
            title={"Cập nhật thành công"}
            isVisible={isSuccess}
          />
        ) : (
          <SimpleDialog
            onBackdropPress={toggleDialogSuccess}
            title={t("validator:postSuccess")}
            isVisible={isSuccess}
          />
        )}
        <LoadingDialog isVisible={loading} onBackdropPress={setLoading} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  inputStyleNameError: {borderColor: "red", marginTop: 10},
  inputStyle: {
    height: 50,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: Color.white,
  },
  container: {
    backgroundColor: Color.grey,
    padding: 15,
    marginTop: 10,
  },
  txtTitle: {
    fontWeight: "bold",
  },
  inputStyleName: {marginTop: 10, borderColor: Color.orange},
  inputStylePrice: {marginTop: 5, borderColor: Color.orange},
  inputStylePriceError: {marginTop: 5, borderColor: Color.red},
  inputStyleDetail: {marginTop: 10, height: 200, borderColor: Color.orange},
  inputStyleDetailError: {marginTop: 10, height: 200, borderColor: Color.red},
  btnStyleTitle: {fontSize: 16, fontWeight: "bold", color: "white"},
  styleAutoComplete: {marginTop: 10},
  styleAutoCompleteError: {
    marginTop: 10,
    borderColor: Color.red,
  },
  btnStyle: {marginTop: 10},
  formInput: {margin: 10},
})

export default InfoDetail
