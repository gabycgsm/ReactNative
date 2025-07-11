export async function getPersonajes() {
    const CHARACTERS = `https://rickandmortyapi.com/api/character`;

    const rawData = await fetch(`${CHARACTERS}`);
    const json = await rawData.json();
    console.log("rawData:", rawData);
    console.log("json:", json);

    const { results } = json;
    console.log("results:", results);

    return results.map((item) => {
        const { id, name, status, species, gender, episode, image } = item;

        return {
            id, name, status, species, gender, episode, image
        }
    });
}

export async function getEpisodeDetails(episodeId) {
    const EPISODE_URL = `https://rickandmortyapi.com/api/episode/${episodeId}`;

    try{
        const rawData = await fetch(EPISODE_URL);
        const json = await rawData.json();
        
        const { id, name, air_data, episode } = json;

        return {
            id, name, air_data, episode            
        };
    } catch (error) {
        console.error('Error fetching episode detals;', error);
        throw error;
    }
    
}