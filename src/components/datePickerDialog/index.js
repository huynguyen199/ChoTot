import React, {useState} from "react"
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableWithoutFeedback,
} from "react-native"
import DatePicker from "react-native-date-picker"
import Color from "@common/Color"

function DialogDateTime({visible, onClose, value, onChange}) {
  const [date, setDate] = useState(new Date())

  const onChangeDate = (data) => {
    setDate(data)
  }

  const selectDate = () => {
    const dateFormat = new Date(date)
    const day =
      dateFormat.getUTCDate() < 10
        ? "0" + (dateFormat.getMonth() + 1)
        : dateFormat.getUTCDate()

    const month =
      dateFormat.getMonth() + 1 < 10
        ? "0" + (dateFormat.getMonth() + 1)
        : dateFormat.getMonth() + 1

    const fullDate = day + "/" + month + "/" + dateFormat.getFullYear()

    onClose(!visible)
    onChange(fullDate)
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        onClose(!visible)
      }}>
      <TouchableWithoutFeedback onPress={() => onClose(!visible)}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>

      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Chọn ngày sinh</Text>

          <DatePicker
            locale="vi_VN"
            mode="date"
            date={date}
            onDateChange={onChangeDate}
          />
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={selectDate}>
            <Text style={styles.textStyle}>Chọn</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    width: 100,
    elevation: 2,
    marginTop: 20,
  },
  buttonOpen: {
    backgroundColor: Color.orange,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: Color.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
})

export default DialogDateTime
