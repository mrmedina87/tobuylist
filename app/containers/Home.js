import React, { Component } from 'react';
import ReactNative from "react-native";

const {
  ScrollView,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  StyleSheet,
  Text
} = ReactNative;

import { connect } from 'react-redux';

class Home extends Component {
  searchPressed() {
    this.props.fetchitems('bacon, cucumber, banana');
  }

  items() {
    return Object.keys(this.props.searcheditems).map( key => this.props.searcheditems[key])
  }

  render() {
    return <View style={styles.home}>
      <View style={styles.buttonWrapper}>
        <TouchableHighlight onPress={ () => this.searchPressed() }>
          <Text>Fetch list of things to buy!</Text>
        </TouchableHighlight>
      </View>
      <ScrollView style={styles.scrollSection}>
        {this.items().map((item) => {
          return <View key={item.id} style={styles.scrollSectionElement}>
            <Text>{item.name}</Text>
            <Text>{item.amount}</Text>
          </View>
        })}
      </ScrollView>
    </View>
  }
}

const styles = StyleSheet.create({
  home:{
    flex: 1,
    marginTop: 20
  },
  buttonWrapper: {
    height: 30,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    padding: 5
  },
  scrollSection: {
    flex: 0.8
  },
  scrollSectionElement: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,    
    padding: 20,
    margin: 5
  }
});

function mapStateToProps(state) {
  return {
    searcheditems: state.searcheditems
  }
}

export default connect(mapStateToProps)(Home);