import React, { useEffect, useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FormContainer from '../../Shared/Form/FormContainer';
import Input from '../../Shared/Form/Input';
import MainButton from '../../components/MainButton';
import Error from '../../Shared/Form/Error';

//Context API
import AuthGlobal from '../../Context/store/AuthGlobal';
import { LoginUser } from '../../Context/actions/Auth.actions';

const Login = (props) => {
  const context = useContext(AuthGlobal);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (context.stateUser.isAuthenticated === true) {
      props.navigation.navigate('UserProfile');
    }
  }, [context.stateUser.isAuthenticated]);

  const handleSubmit = () => {
    const user = {
      email,
      password,
    };

    if (email === '' || password === '') {
      setError('Please fill in your credentials');
    } else {
      LoginUser(user, context.dispatch);
    }
  };

  return (
    <FormContainer title={'Login'}>
      <Input
        placeholder={'Email'}
        name={'email'}
        id={'email'}
        onChangeText={(text) => setEmail(text.toLowerCase())}
      />
      <Input
        placeholder={'Password'}
        name={'password'}
        id={'password'}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      {error ? <Error message={error} /> : null}
      <MainButton onPress={() => handleSubmit()}>
        <Text>Login</Text>
      </MainButton>
      <View>
        <Text>Don't have an account yet?</Text>
      </View>
      <MainButton onPress={() => props.navigation.navigate('Register')}>
        <Text>Register</Text>
      </MainButton>
    </FormContainer>
  );
};

export default Login;
