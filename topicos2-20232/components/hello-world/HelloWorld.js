import {View} from 'react-native'
import {Text} from 'react-native'

export default function HelloWorld() {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "pink"
    }}>
  	  <Text style={{
        fontSize: 30,
        fontWeight: 'bold',
        color: "#621c39"
      }}>
        HelloWorld !!!!
        
      </Text>
    </View>
  )
}