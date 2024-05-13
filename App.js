import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import DatePicker from 'react-native-datepicker';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateCampaign" component={CreateCampaignScreen} />
        <Stack.Screen name="CampaignManagement" component={CampaignManagementScreen} />
        <Stack.Screen name="Statistics" component={StatisticsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Header = () => {
  return (
    <View style={styles.header}>
      <Image 
        source={{uri: 'https://w7.pngwing.com/pngs/670/103/png-transparent-social-media-marketing-digital-marketing-business-digital-infographic-text-service.png'}}
        style={styles.logo}
      />
      <View style={styles.headerContent}>
        <Text style={styles.title}>Bienvenido a Market</Text>
        <Text style={styles.subtitle}>Una plataforma líder en marketing digital</Text>
      </View>
    </View>
  );
};

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Iniciar Sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="#333"
        />
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          placeholderTextColor="#333"
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateCampaign')}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.buttonText}>Registrarme con Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CreateCampaignScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Contenido de Crear Campañas</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre de la Campaña"
          placeholderTextColor="#333"
        />
        <TextInput
          style={styles.textarea}
          placeholder="Descripción"
          placeholderTextColor="#333"
          multiline
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CampaignManagement')}>
          <Text style={styles.buttonText}>Crear Campaña</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CampaignManagementScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Contenido de Gestión de Campañas</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Statistics')}>
          <Text style={styles.buttonText}>Gestión de Campañas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const StatisticsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Contenido de Estadísticas</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.buttonText}>Estadísticas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Contenido de Perfil</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#007bff',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  headerContent: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  textarea: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  googleButton: {
    backgroundColor: '#db4437',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;

