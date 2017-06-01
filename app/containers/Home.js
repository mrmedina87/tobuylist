import React, { Component } from 'react'
import ReactNative from "react-native"

const {
  ScrollView,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  StyleSheet,
  Text
} = ReactNative

import { connect } from 'react-redux'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searching: false,
      itemName: ''
    }
  }

  searchPressed() {
    this.setState({searching: true})
    this.props.fetchitems('bacon, cucumber, banana').then( () => {
      this.setState({searching: false})
    })
  }

  items() {
    return Object.keys(this.props.searcheditems).map( key => this.props.searcheditems[key])
  }

  sendItem() {
    this.props.senditem(this.state.itemName).then( () => {
      this.props.fetchitems('bacon, cucumber, banana').then( () => {
        this.setState({searching: false})
      })
    })
  }

  render() {
    return <View style={styles.home}>
      <View style={styles.buttonWrapper}>
        <TouchableHighlight onPress={ () => this.searchPressed() }>
          <Text>Fetch list of things to buy!</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.inputSection}>
        <TextInput 
          style={styles.inputBox} 
          returnKeyType="send" 
          placeholder="name" 
          onChangeText={(itemName) => this.setState({itemName})}
          value={this.state.itemName}
        />
        <TouchableHighlight style={styles.addButton} onPress={ () => this.sendItem() }>
          <Text>Add</Text>
        </TouchableHighlight>
      </View>
      <ScrollView style={styles.scrollSection}>
        {!this.state.searching && this.items().map((item) => {
          return <View key={item.id} style={styles.scrollSectionElement}>
            <Text>{item.name}</Text>
            <Text>{item.amount}</Text>
          </View>
        })}
        { this.state.searching ? <Text>searching...</Text> :null}
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
  },
  inputSection: {
    height: 50,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    padding: 5,
    flexDirection: 'row'
  },
  inputBox: {
    flex: 0.7
  },
  addButton: {
    flex: 0.3
  }
})

function mapStateToProps(state) {
  return {
    searcheditems: state.searcheditems
  }
}

export default connect(mapStateToProps)(Home)