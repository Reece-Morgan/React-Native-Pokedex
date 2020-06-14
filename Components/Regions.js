import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

const Regions = props => {
  const [regions, setRegions] = useState([]);
  const [searchfield, setsearchfield] = useState('');

  useEffect(() => {
    fetchRegions();
  }, []);

  const fetchRegions = () => {
    fetch('https://pokeapi.co/api/v2/generation?limit=7')
      .then(response => response.json())
      .then(regions => setRegions(regions.results));
  };

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.card}
                onPress={() =>
                    props.navigation.navigate('Kanto')
                }>
                <Image
                    style={{width: 150, height: 150}}
                    source={{
                    uri: `https://img.pokemondb.net/sprites/red-blue/normal/pikachu.png`,
                    }}
                />
                <Text>Kanto</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.card}
                onPress={() =>
                    props.navigation.navigate('Johto')
                }>
                <Image
                    style={{width: 150, height: 150}}
                    source={{
                    uri: `https://img.pokemondb.net/sprites/silver/normal/pikachu.png`,
                    }}
                />
                <Text>Johto</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.card}
                onPress={() =>
                    props.navigation.navigate('Hoenn')
                }>
                <Image
                    style={{width: 150, height: 150}}
                    source={{
                    uri: `https://img.pokemondb.net/sprites/ruby-sapphire/normal/pikachu.png`,
                    }}
                />
                <Text>Hoenn</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.card}
                onPress={() =>
                    props.navigation.navigate('Sinnoh')
                }>
                <Image
                    style={{width: 150, height: 150}}
                    source={{
                    uri: `https://img.pokemondb.net/sprites/diamond-pearl/normal/pikachu.png`,
                    }}
                />
                <Text>Sinnoh</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.card}
                onPress={() =>
                    props.navigation.navigate('Unova')
                }>
                <Image
                    style={{width: 150, height: 150}}
                    source={{
                    uri: `https://img.pokemondb.net/sprites/black-white/normal/pikachu.png`,
                    }}
                />
                <Text>Unova</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.card}
                onPress={() =>
                    props.navigation.navigate('Kalos')
                }>
                <Image
                    style={{width: 150, height: 150}}
                    source={{
                    uri: `https://img.pokemondb.net/sprites/x-y/normal/pikachu.png`,
                    }}
                />
                <Text>Kalos</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Regions;

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
  searchfield: {
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    width: 250,
    borderRadius: 50,
  },
});