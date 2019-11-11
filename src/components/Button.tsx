import React from 'react';
import {
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  TouchableHighlight,
  View,
  ViewStyle
} from 'react-native';

interface IProps {
  label: string;
  buttonStyle?: ViewStyle;
  labelStyle?: TextStyle;
}

interface Styles {
  button: ViewStyle,
  icon: ImageStyle,
  label: TextStyle
}

const styles = StyleSheet.create<Styles>({
  button: {
    flexDirection: 'row',
    backgroundColor: '#336699'
  },
  icon: {
    width: 16,
    height: 16
  },
  label: {
    color: '#F8F8F8',
    textAlign: 'center'
  }
});

export const Button = (props: IProps): JSX.Element => {
  return (
    <TouchableHighlight>
      <View style = {[styles.button, props.buttonStyle]}>
        <Image style = {styles.icon} source={require('../../assets/girl.png')} />
        <Text style = {[styles.label, props.labelStyle]}>{ props.label }</Text>
      </View>
    </TouchableHighlight>
  )
}
