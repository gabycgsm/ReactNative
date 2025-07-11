import { Text, View } from "react-native"

export function EpisodeDetails({ episode }) {
    return (
        <View style={styles.container} >
            <Text style={styles.title}>{episode.episode}</Text>
            <Text style={styles.title}>{episode.id}</Text>
            <Text style={styles.title}>{episode.name}</Text>
            <Text style={styles.title}>{episode.air_date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff'
  },

});