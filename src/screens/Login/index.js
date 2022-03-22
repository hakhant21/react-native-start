import React, { useState } from 'react';
import Container from './../../components/Container';
import Input from './../../components/Input';
import CustomButton from './../../components/CustomButton';

const Login = () => {
  const [value, onChangeText] = useState('')
  return (
    <Container>
      <Input
        label='Username'
        onChangeText={(text) => onChangeText(text)}
        value={value}
        iconPosition='right'
      />
      <Input
        label='Password'
        onChangeText={(text) => onChangeText(text)}
        value={value}
        iconPosition='right'
      />
      <CustomButton
        disabled={false}
        loading={false}
        primary
        title='Submit'
      />
    </Container>
  );
};

export default Login;
