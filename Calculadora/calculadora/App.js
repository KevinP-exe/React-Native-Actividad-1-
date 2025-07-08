import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [respuesta, setRespuesta] = useState("");

  const Calcular = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    setRespuesta(num1 + num2);
  };

  const CalcularResta = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    setRespuesta(num1 - num2);
  };

  const CalcularMulti = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    setRespuesta(num1 * num2);
  };

  const CalcularDivi = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    if (num2 === 0) {
      setRespuesta("Error: División por 0");
    } else {
      setRespuesta(num1 / num2);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora 2B</Text>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el primer número"
          keyboardType="numeric"
          onChangeText={setNumero1}
          value={numero1}
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Ingrese el segundo número"
          keyboardType="numeric"
          onChangeText={setNumero2}
          value={numero2}
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.buttonsRow}>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#4CAF50'}]} onPress={Calcular}>
          <Text style={styles.buttonText}>Sumar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#F44336'}]} onPress={CalcularResta}>
          <Text style={styles.buttonText}>Restar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsRow}>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#2196F3'}]} onPress={CalcularMulti}>
          <Text style={styles.buttonText}>Multiplicar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#FF9800'}]} onPress={CalcularDivi}>
          <Text style={styles.buttonText}>Dividir</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Resultado:</Text>
        <Text style={styles.resultNumber}>{respuesta}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 38,
    fontWeight: '900',
    color: '#00E676',
    textAlign: 'center',
    marginBottom: 40,
    letterSpacing: 2,
  },
  inputWrapper: {
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#1E1E1E',
    color: '#fff',
    fontSize: 18,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#333',
    shadowColor: '#00E676',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  button: {
    flex: 0.48,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
  },
  resultContainer: {
    marginTop: 30,
    backgroundColor: '#1E1E1E',
    padding: 25,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#00E676',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.8,
    shadowRadius: 6,
  },
  resultText: {
    color: '#00E676',
    fontSize: 22,
    marginBottom: 10,
    fontWeight: '600',
  },
  resultNumber: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
});

