import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image, Pressable, TouchableOpacity, View } from 'react-native';
import Gif from 'react-native-gif';

export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar hidden />
      <Image style={style.img}
        source={require('./assets/lizard.jpg')} />
      <Text style={style.title}>Lizard</Text>
      <View style={style.btn_wrapper}>
        <Pressable style={({pressed}) => [style.btn, pressed && style.pressed]}>
          <Text>Cadastre-se</Text>
        </Pressable>
        <TouchableOpacity activeOpacity={0.4} style={style.btn}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C5D1EB",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 25,
    fontStyle: "italic",
    transform: "scaleX(-1), scaleY(-1)"
  },
  img: {
    width: 300,
    height: 300
  },
  btn: {
    width: "30%",
    height: 30,
    backgroundColor: "",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  pressed: {
    backgroundColor: "blue",
  },
  btn_wrapper: {
    display: "flex",
    flexDirection: 'row',
    justifyContent:"center",
    alignItems: "center",
    gap: 20,
    width: "100%"
  }
})

