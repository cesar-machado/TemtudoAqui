import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };

  const cadastrar = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tem Tudo Aqui</Text>
      <Input
        style={styles.input}
        placeholder='E-mail'
        placeholderTextColor='#fff'
        leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'white' }}
        onChangeText={(value) => setEmail(value)}
        keyboardType='email-address'
      />
      <Input
        style={styles.input}
        placeholder='Senha'
        placeholderTextColor='#fff'
        leftIcon={{ type: 'font-awesome', name: 'lock', color: 'white' }}
        onChangeText={(value) => setPassword(value)}
        secureTextEntry={true}
      />

      <Button
        style={styles.button}
        icon={<Icon name='check' size={40} color='white' />}
        title='Entrar'
        buttonStyle={styles.button}
        onPress={() => entrar()}
      />

      <Button
        icon={<Icon name='user' size={40} color='white' />}
        title='Cadastrar'
        buttonStyle={styles.button}
        onPress={() => cadastrar()}
      />
    </View>
  );
}
