// pages/splash.tsx
import styled from '@emotion/styled';

const SplashScreen = () => {
  return (
    <Container>
      <Logo src="/logo.png" alt="Logo" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.theme.colors.khakiBeige};
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

export default SplashScreen;
