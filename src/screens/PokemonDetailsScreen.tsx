import React, {useMemo} from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

import {SvgUri} from 'react-native-svg';
// import {useAppDispatch, useAppSelector} from '../redux/hooks';
// import {RootState} from '../redux/store';
import Card from '../components/Card';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import PokemonInfoTab from './PokemonInfoTab';
import PokemonStatsTab from './PokemonStatsTab';
import Colors from '../themes/colors';
import PokemonEvolutionTab from './PokemonEvolutionTab';

const PokemonDetailsScreen = () => {
  // const pokemon = useAppSelector((state: RootState) => state.pokemon.data);
  // const loading = useAppSelector((state: RootState) => state.pokemon.loading);
  // const error = useAppSelector((state: RootState) => state.pokemon.error);
  // const dispatch = useAppDispatch();
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'about', title: 'About'},
    {key: 'stats', title: 'Stats'},
    {key: 'evolution', title: 'Evolution'},
  ]);

  const spinValue = useMemo(() => new Animated.Value(0), []);

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const renderScene = SceneMap({
    about: PokemonInfoTab,
    stats: PokemonStatsTab,
    evolution: PokemonEvolutionTab,
  });

  return (
    <View style={styles.background}>
      {/* <Button title="get pokemon" onPress={() => dispatch(fetchPokemon())} /> */}
      <SafeAreaView style={styles.container}>
        <Text style={styles.id}>#025</Text>
        <View style={styles.pokemonImageContainer}>
          <Animated.Image
            style={[
              styles.pokeballImage,
              {
                transform: [{rotate: spin}],
              },
            ]}
            source={require('../assets/pokeball.png')}
          />
          <View style={styles.pokemonImage}>
            <SvgUri
              width={300}
              height={300}
              uri="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
            />
          </View>
        </View>

        <Card style={styles.card}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
            renderTabBar={props => (
              <TabBar
                {...props}
                indicatorStyle={{backgroundColor: Colors.yellow}}
                style={styles.tabBar}
                labelStyle={styles.tabBarLabel}
              />
            )}
          />
        </Card>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.yellow,
    flex: 1,
  },
  container: {
    flex: 1,
  },
  id: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15,
    padding: 5,
    alignSelf: 'flex-end',
    zIndex: 2,
    backgroundColor: Colors.gray,
  },
  card: {
    backgroundColor: Colors.white,
    flex: 1,
    marginTop: 10,
  },
  pokeballImage: {
    width: 250,
    height: 250,
    opacity: 0.2,
  },
  pokemonImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokemonImageContainer: {
    alignItems: 'center',
    zIndex: 1,
  },
  tabBar: {
    backgroundColor: Colors.white,
    borderRadius: 20,
  },
  tabBarLabel: {
    color: Colors.black,
    fontWeight: 'bold',
  },
});

export default PokemonDetailsScreen;
