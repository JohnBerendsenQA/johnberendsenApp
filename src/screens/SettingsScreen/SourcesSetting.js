import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';
import { Button, Icon } from 'react-native-elements';
import SearchComponent from '../../components/SearchComponent';
import NoItemComponent from '../../components/NoItemComponent';


class SourcesSetting extends Component {
    static navigationOptions = ({ navigation }) => {

        return {
          header: (
              <View style={{ backgroundColor: Colors.darkDefaultColor }}>
                <View style={{flexDirection: "row"}} >
                    <Icon
                        name={'cog'}
                        type='font-awesome'
                        size={24}
                        style= {{ paddingTop: 5, paddingLeft: 3 }}
                        color={'white'}
                        onPress={() => {
                            navigation.goBack(null)
                          }
                        }
                      />
                      <SearchComponent
                          navigation={navigation}
                      />
                </View>
              </View>
          )
      }
    };


  render() {
    return (
        <NoItemComponent
          iconName='error'
          infoHeading="Not Implemented"
          infoParagraph="It just doesn't work. "
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});

export default SourcesSetting;
