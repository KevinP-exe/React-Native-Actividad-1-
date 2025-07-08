import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
  Switch,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [selectedOption, setSelectedOption] = useState('opcion1');
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [textValue, setTextValue] = useState('');

  const toggleSwitch = () => setIsSwitchOn(prev => !prev);

  const handlePress = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert('Botón presionado', 'Has presionado el botón personalizado.');
    }, 1500);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <StatusBar style="light" />

      <Text style={styles.title}>Componentes Nativos de React Native</Text>

      <Text style={styles.label}>2. Image: Muestra una imagen de ejemplo</Text>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />

      <Text style={styles.label}>3. TextInput: Entrada de texto</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe algo aquí"
        placeholderTextColor="#777"
        onChangeText={setTextValue}
        value={textValue}
      />

      <Text style={styles.label}>4. Picker: Selecciona una opción del menú desplegable</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedOption}
          style={styles.picker}
          dropdownIconColor="#6200ee"
          onValueChange={setSelectedOption}
          itemStyle={{ color: '#333', fontSize: 18 }}
        >
          <Picker.Item label="Opción 1" value="opcion1" />
          <Picker.Item label="Opción 2" value="opcion2" />
          <Picker.Item label="Opción 3" value="opcion3" />
        </Picker>
      </View>

      <Text style={styles.label}>5. TouchableOpacity: Botón con efecto de opacidad</Text>
      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handlePress}>
        <Text style={styles.buttonText}>Presióname</Text>
      </TouchableOpacity>

      <Text style={styles.label}>7. Switch: Activa o desactiva un estado</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>¿Activar algo?:</Text>
        <Switch
          trackColor={{ false: '#ccc', true: '#6200ee' }}
          thumbColor={isSwitchOn ? '#fff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isSwitchOn}
        />
      </View>

      <Text style={styles.label}>8. ActivityIndicator: Indicador de carga</Text>
      {isLoading && <ActivityIndicator size="large" color="#6200ee" style={{ marginVertical: 15 }} />}

      <Text style={styles.label}>9. View: Contenedor con estilo y sombra</Text>
      <View style={styles.box}>
        <Text style={styles.boxText}>Soy una View con fondo azul y sombra</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Fin de la demostración 👏</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  contentContainer: {
    padding: 25,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: '#BB86FC',
    marginBottom: 25,
    textAlign: 'center',
    letterSpacing: 1.5,
  },
  label: {
    fontSize: 18,
    color: '#E0E0E0',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#BB86FC',
    shadowColor: '#BB86FC',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 6,
    elevation: 8,
  },
  input: {
    width: '90%',
    backgroundColor: '#1F1B24',
    color: '#fff',
    fontSize: 18,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#6200ee',
    shadowColor: '#6200ee',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  pickerWrapper: {
    width: '90%',
    backgroundColor: '#1F1B24',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#6200ee',
    overflow: 'hidden',
    shadowColor: '#6200ee',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 5,
  },
  picker: {
    width: '100%',
    height: 50,
    color: '#fff',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#BB86FC',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 25,
    shadowColor: '#BB86FC',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 8,
  },
  buttonText: {
    color: '#121212',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
  },
  switchContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  switchLabel: {
    fontSize: 18,
    color: '#E0E0E0',
    marginRight: 8,
  },
  box: {
    marginTop: 15,
    backgroundColor: '#3700B3',
    padding: 25,
    borderRadius: 16,
    shadowColor: '#BB86FC',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 12,
    elevation: 10,
    alignItems: 'center',
  },
  boxText: {
    color: '#E0E0E0',
    fontWeight: '700',
    fontSize: 18,
  },
  footer: {
    marginTop: 40,
    borderTopWidth: 1,
    borderColor: '#3700B3',
    paddingTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    color: '#BB86FC',
    fontSize: 16,
    fontWeight: '600',
  },
});

