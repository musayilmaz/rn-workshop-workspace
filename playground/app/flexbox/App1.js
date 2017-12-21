import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

/**
 * React Native ile flexbox varsayılan direction olarak column 
 * kullanmaktadır. Diğer opsiyon row'dur.
 * 
 * column ile view'lar yukarıdan aşağıya doğru sıra ile yerleştirilirken
 * row ile soldan sağa doğru yerleştirilmektedir.
 */
export default class App extends Component {

  render() {
    return this.render_Flex_Column();
  }

  render_Flex_Column() {
    let styles = stylesForColumn;
    return (
      <View style={styles.container}>
        <View style={styles.box2}>

        </View>
        <View style={styles.box3}>

        </View>        
      </View>
    );
  }

  render_Flex_Row() {
    let styles = stylesForRow;
    return (
      <View style={styles.container}>
        <View style={styles.box2}>

        </View>
        <View style={styles.box3}>

        </View>        
      </View>
    );
  }
}

const stylesForColumn = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : "column" // bu varsayılan direction'dur.
  },
  box2 : {
    flex: 2,
    backgroundColor : "red"
  },
  box3 : {
    flex: 3,
    backgroundColor : "black"
  }
});

const stylesForRow = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : "row"
  },
  box2 : {
    flex: 2,
    backgroundColor : "red"
  },
  box3 : {
    flex: 3,
    backgroundColor : "black"
  }
});
