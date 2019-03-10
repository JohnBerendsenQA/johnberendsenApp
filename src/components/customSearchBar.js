import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { SearchBar } from 'react-native-elements';


class CustomSearchBar extends Component {

    onSearch = () => {

    }

  render() {
    return (
		<SearchBar
          lightTheme
		  textAlign='center'
		  containerStyle={styles.searchBar}
		  inputStyle= {styles.insideSearchBar}
		  onChangeText={this.onSearch}
		  placeholder='Search johnberendsen'
		  placeholderTextColor="#fff"
          onFocus={this.props.onFocus}
		/>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
      backgroundColor: Colors.darkDefaultColor,
      borderColor: Colors.defaultColor
  },
  insideSearchBar: {
      backgroundColor: Colors.darkDefaultColor,
      fontSize: 12
  }
});

export default CustomSearchBar;
