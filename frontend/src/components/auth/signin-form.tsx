'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export const SigninForm = () => {
  const router = useRouter();
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleEnterButton = () => {
    router.replace('/home');
  };

  return (
    <>
      <Input
        placeholder="Digite seu email"
        value={emailField}
        onChange={(text) => setEmailField(text)}
      />

      <Input
        placeholder="Digite sua senha"
        value={passwordField}
        onChange={(text) => setPasswordField(text)}
        password
      />
      <Button onClick={handleEnterButton} label="Entrar" size={1} />
    </>
  );
};
