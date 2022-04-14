import {ToastAndroid} from "react-native"

const Toast = {
  show: (text) => {
    ToastAndroid.showWithGravityAndOffset(
      text,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50,
    )
  },
}
export default Toast
