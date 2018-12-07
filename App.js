import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import image from './assets/image.jpg';
import { ScrollView, FlatList } from 'react-native-gesture-handler';

export default class App extends React.Component {
  render() {
    const photos = [{id: 1, user: 'Levir'}, {id: 2, user: 'Yara'}, {id: 3, user: 'Henrique'},]
    return (

      <FlatList
      keyExtractor={item => item.id.toString()}
      data={photos}
      renderItem={ (item) => 
        <View>
          <Text>{item.item.user}</Text>
          <Image style={styles.image} source={image} />  
        </View>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width,
  }
});
