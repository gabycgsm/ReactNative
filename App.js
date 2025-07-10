import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { getPersonajes } from './lib/rickyMorty';
import { ScrollView } from 'react-native-web';
import  Logo  from './components/Logo';

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
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style='light' />
        <Logo style={styles.logo} />
        {personajes.map((character) => (
          <View style={styles.card} key={character.id}>
            <Image style={styles.image} source={{ uri: character.image }}></Image>
            <Text style={styles.title}>{character.name}</Text>
            <Text style={styles.species}>{character.species}</Text>
            <Text style={styles.status}>{character.status}</Text>
            <Text style={styles.gender}>{character.gender}</Text>
          </View>
        ))}
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
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  card: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff'
  },
  species: {
    fontSize: 20,
    color: '#fff'
  },
  status: {
    fontSize: 16,
    color: '#33caff'
  },
  gender: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },
  logo: {
    backgroundColor: '#fff',
    padding: 20
  }
});
