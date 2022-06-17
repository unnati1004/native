import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';
// import Home from './src/screens/Home';

export default function App() {
  return(
    <View style={styles.maincontainer}>
       <View style={styles.hometop}>
          <Image style={styles.homeimage} source={require("./assets/logo.jpg")}/>
          <Text>Welcome</Text>
       </View>
    </View>
  );
}
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeimage:{
    width:"40vh",
    height:"40vh"
  }
});
