import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import ImageViewer from './componenets/Imageviewer';

const PlaceholderImage = require('./assets/images/it-factory.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View><Text style={styles.textFrontPage}>The safest way to make a good investment</Text></View>      
      <StatusBar style="auto" />
      <View><Button 
      title='Invest your money now'
      onPress={ () => alert ("... and the money is gone ")}
      />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFrontPage: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
    color: 'blue',
  },
});
