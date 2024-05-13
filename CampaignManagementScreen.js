import React from 'react';
import { View, Text, StyleSheet, Picker, TouchableOpacity } from 'react-native';

const CampaignManagementScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contenido de Gestión de Campañas</Text>
      <Picker style={styles.picker}>
        <Picker.Item label="Nombre" value="nombre" />
        <Picker.Item label="Fecha" value="fecha" />
        <Picker.Item label="Estado" value="estado" />
      </Picker>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007bff',
  },
  picker: {
    height: 40,
    marginBottom: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CampaignManagementScreen;
