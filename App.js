import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { getPersonajes } from './lib/rickyMorty';
import { ScrollView } from 'react-native-web';
import  Logo  from './components/Logo';
import { CharacterCard } from './components/CharacterCard';

export default function App() {

  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    console.log("Fetching latest games...");
    getPersonajes().then((data) => {
      setPersonajes(data);
      console.log("personajes:", data);

    });
  }, []);

  return (
    
      <View style={styles.container}>
        <StatusBar style='light' />
        <Logo style={styles.logo} />
        <ScrollView>
        {personajes.map((character) => (
          
          <CharacterCard character={character}/>
        ))}
        </ScrollView>
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
  
  logo: {
    backgroundColor: '#fff',
    padding: 20
  }
});
