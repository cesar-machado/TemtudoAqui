import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
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
        icon={<Icon name='check' size={20} color='white' />}
        title='Entrar'
        onPress={() => entrar()}
      />
    </View>
  );
}
