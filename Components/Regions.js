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
                    style={{width: 160, height: 160}}
                    source={{
                    uri: `https://img.pokemondb.net/boxes/red.jpg`,
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
                    style={{width: 160, height: 160}}
                    source={{
                    uri: `https://img.pokemondb.net/boxes/gold.jpg`,
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
                    style={{width: 160, height: 160}}
                    source={{
                    uri: `https://img.pokemondb.net/boxes/ruby.jpg`,
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
                    style={{width: 160, height: 160}}
                    source={{
                    uri: `https://img.pokemondb.net/boxes/diamond.jpg`,
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
                    style={{width: 160, height: 160}}
                    source={{
                    uri: `https://img.pokemondb.net/boxes/white.jpg`,
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
                    style={{width: 160, height: 160}}
                    source={{
                    uri: `https://img.pokemondb.net/boxes/x.jpg`,
                    }}
                />
                <Text>Kalos</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.card}
                onPress={() =>
                    props.navigation.navigate('Alola')
                }>
                <Image
                    style={{width: 160, height: 160}}
                    source={{
                    uri: `https://img.pokemondb.net/boxes/sun.jpg`,
                    }}
                />
                <Text>Alola</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.card}
                onPress={() =>
                    props.navigation.navigate('Galar')
                }>
                <Image
                    style={{width: 160, height: 160}}
                    source={{
                    uri: `https://img.pokemondb.net/logos/sword-logo.jpg`,
                    }}
                />
                <Text>Galar</Text>
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
    paddingTop: 30,
    backgroundColor: '#fff',
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