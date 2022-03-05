import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// import {getWeather} from './lib/store/actions/weatherActions';
import {getWeather} from './lib/store/actions/weatherActions';
import Weather from './lib/components/Weather';
import Form from './lib/components/Form';
const App = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {data, error} = useSelector(state => state.weather);

  const searchSubmitHandler = () => {
    if (search === '') {
      return Alert.alert('Validation', 'City name is required!', [
        {text: 'OK'},
      ]);
    }

    setLoading(true);
    dispatch(
      getWeather(
        search,
        () => setLoading(false),
        () => setLoading(false),
      ),
    );
    setSearch('');
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Form
          search={search}
          onSetSearch={setSearch}
          onSubmit={searchSubmitHandler}
        />
        <Weather loading={loading} data={data} error={error} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#61718c',
  },
});

export default App;
