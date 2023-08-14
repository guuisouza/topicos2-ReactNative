import {SafeAreaView, Text, StyleSheet, StatusBar, Image, Dimensions, Switch, Platform} from 'react-native'
import Constants from 'expo-constants'
import {useState} from 'react'
import bulbOn from '../../assets/light/bulb-on.jpg'
import bulbOff from '../../assets/light/bulb-off.jpg'
export default function Light() {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => {
    setIsEnabled((previousState => !previousState))
  }
  return (
    <SafeAreaView style={styles.container}> 
      <StatusBar/>
      <Image
        fadeDuration={0}
        source={isEnabled ? bulbOn : bulbOff}
        style={styles.image}
      />
      <Switch 
        trackColor={{false: "#fff", true:"#52d964"}}
        thumbColor={isEnabled ? "#fff": "#bbb"}
        value={isEnabled}
        style={styles.switch}
        onValueChange={toggleSwitch}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    paddingTop: Constants.statusBarHeight,
  },
  image: {
    maxWidth: "100%",
    maxHeight: Dimensions.get("window").height - 100,
    resizeMode: "contain", //Altera o tamanho conforme o usuario mexe no tamanho da tela
    marginBottom: 20
  },
  switch: {
    alignSelf: "center",
    transform: Platform.OS === "ios" ? [] : [{scale: 1.5}]
  }
})