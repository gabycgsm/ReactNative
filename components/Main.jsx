import { useEffect, useState } from "react";
import { getPersonajes } from "../lib/rickyMorty";
import { CharacterCard } from "./CharacterCard";
import { ActivityIndicator, FlatList, ScrollView } from "react-native";

export function Main() {

    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        console.log("Fetching latest games...");
        getPersonajes().then((data) => {
            setPersonajes(data);
            console.log("personajes:", data);

        });
    }, []);


    return (
        <>
            {personajes.lenght === 0 ? (
                <ActivityIndicator size={"large"} />
            ) : (
                <FlatList
                    data={personajes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={
                        ({ item, index }) => (
                            <CharacterCard character={item} index={index} />
                        )
                    }></FlatList>
            )

            }
        </>

    );
}