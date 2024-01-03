import { View,Text,TouchableOpacity,StyleSheet } from "react-native"

export default function Timer({time}){
  
   return(
      <View style={styles.container}>
         <Text style={styles.time}>{time}</Text>
      </View>

   );

}

const styles = StyleSheet.create({
   container: {
      flex:.3,
      justifyContent:"center",
      backgroundColor:"#F2F2F2",
      borderRadius:15,
      padding:15,
      textAlign:"center",

   },
   time:{
      fontSize:80,
      fontWeight:"bold",
      textAlign:"center",
      color:"#333333",
   }
   
})