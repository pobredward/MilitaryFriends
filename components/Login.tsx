// pages/auth/login.tsx
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    // 로그인 처리 로직
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('email', { required: true })} placeholder="Email" />
        {errors.email && <Error>이메일을 입력해주세요</Error>}
        <Input {...register('password', { required: true })} type="password" placeholder="Password" />
        {errors.password && <Error>비밀번호를 입력해주세요</Error>}
        <Button type="submit">Sign In</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.theme.colors.lightTaupe};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid ${props => props.theme.colors.darkGray};
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: ${props => props.theme.colors.military};
  color: white;
  border: none;
  border-radius: 5px;
`;

const Error = styled.span`
  color: red;
  font-size: 12px;
`;

export default Login;
