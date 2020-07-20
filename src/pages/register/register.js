import React from 'react';
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'

const Register = () => {
return (
    <form>
        <Input type="name" id="name" class="name" placeholder="Nome e Sobrenome" />
        <Input type="email" id="email" class="email" placeholder="example@example.com" />
        <Input type="password" id="password" class="password" placeholder="Digite sua senha" />
        <Button id="register" class="register" name="Criar Conta" />
        <div className=''>
          <label htmlFor='cozinha'>COZINHA</label>
          <Input type='radio' className='radio-button' name='option' id='kitchen' />
          <label htmlFor='salao'>SALÃO</label>
          <Input type='radio' className='' name='' id='salao' />
        </div>
    </form>

)
}

export default Register;