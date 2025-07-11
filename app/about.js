import { Image, ScrollView, StyleSheet, Text, View } from "react-native"

export default function About() {
  return(
    <ScrollView style= { StyleSheet.container } >
    <View style={styles.container}>
       <Text>Acerca de Ricky Mortin </Text>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});