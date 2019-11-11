import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

interface FetchButtonProps {
  title: string;
  onPress(): any;
  loading: boolean;
}

export const FetchButton = ({ title, onPress, loading }: FetchButtonProps): JSX.Element => {
  return (
    <View style = { styles.buttonContainer }>
      <Button
        icon = "file-find"
        mode = "contained"
        loading = { loading }
        onPress = { onPress }
      >
        { title }
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 25,
    marginHorizontal: 10,
    height: 50
  }
})