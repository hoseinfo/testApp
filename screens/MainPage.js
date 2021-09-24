import React,{useState,useEffect} from 'react';

import {Text,View,TouchableOpacity,TextInput,ScrollView,Image,StyleSheet} from 'react-native';
//for cache data we can use asyncStorage or redux(Persist)
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MainPage(props) {


const [pokemons, setPokemons] = useState([]);
const [searchfeild, setSearchfeild] = useState('');


useEffect(() => {
 fetchPokemons();
},[]);


const fetchPokemons = async() => {

    const poke = await AsyncStorage.getItem('data')
   
if(!poke) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
    .then(response => response.json())
    .then(function (pokemons) {
        setPokemons(pokemons.results);
         AsyncStorage.setItem('data',pokemons.results)

        
    });
    
}else{
    data = await AsyncStorage.getItem('data');
    setPokemons(data);
}

};




    return(
        <View>
        <View style={styles.searchCont}>
          <TextInput
            style={styles.searchfeild}
            placeholder="Search Pokemons"
            onChangeText={value => setSearchfeild(value)}
            value={searchfeild}
          />
        </View>
        <ScrollView>
          <View style={styles.container}>
            {pokemons
              .filter(pokemon =>
                pokemon.name.toLowerCase().includes(searchfeild.toLowerCase())
              )
              .map((pokemon, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    key={index}
                    style={styles.card}
                    onPress={() =>
                      props.navigation.navigate('Details', {
                        pokemon: pokemon.name,
                      })
                    }>
                    <Image
                      style={{width: 150, height: 150}}
                      source={{
                        uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
                          pokemon.name
                        }.png`,
                      }}
                    />
                    <Text>{pokemon.name}</Text>
                  </TouchableOpacity>
                );
              })}
          </View>
        </ScrollView>
      </View>
    )
    
}

const styles = StyleSheet.create({  
    container: {    
     display: 'flex',    
     flexDirection: 'row',    
     flexWrap: 'wrap',    
     justifyContent: 'center',    
     marginTop: 30,  
    },  
    card: {    
     display: 'flex',    
     alignItems: 'center',    
     borderBottomWidth: 1,    
     borderBottomColor: 'black',    
     marginHorizontal: 20,    
     marginVertical: 10,  
    },  
    searchCont: {    
     position: 'absolute',    
     marginBottom: 70,    
     left: '20%',    
     zIndex: 1,    
     marginTop: 10,  
    },  
    searchfeild: {    
    height: 40,    
    borderWidth: 1,    
    borderColor: '#000',    
    textAlign: 'center',    
    width: 250,    
    borderRadius: 50,  
    },
    });