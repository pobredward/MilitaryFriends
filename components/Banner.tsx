// components/Banner.tsx
import styled from "@emotion/styled";
import Center from "./Center";
import { useTheme } from "@emotion/react";
import { useState, useEffect } from "react";

const Banner = () => {
  const theme = useTheme();

  const calculateTimeLeft = () => {
    const deadline = new Date("2024-10-31T23:59:59");
    const now = new Date();
    const difference = deadline - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [mounted, timeLeft]);

  return (
    <BannerContainer theme={theme}>
      <Center>
        <BannerContent>
          <BannerText>
            <h1>Military Boost</h1>
            <p>
              당신의 근성장을 더 빠르고 효과적으로 촉진하고 싶다면, 아르기닌,
              크레아틴, 그리고 글루타민은 꼭 필요한 영양소입니다. 이들은 근육
              회복과 성장에 필수적인 아미노산과 활력 공급을 도와줍니다.
              아르기닌은 혈관을 확장시켜 혈류를 증가시키고, 근육에 필요한
              영양분을 공급합니다. 크레아틴은 근육의 에너지 공급원으로 작용하여
              더 강력하고 효과적인 운동을 가능하게 합니다. 또한, 글루타민은
              근육의 대부분을 이루는 아미노산으로, 근육의 회복을 가속화하고 근육
              손상을 최소화합니다.
            </p>
            <ShopNowButton>사전 등록하기</ShopNowButton>
          </BannerText>
          <BannerImage src="/creatine.png" alt="Military Boost" />
        </BannerContent>
        <TimerContainer>
          <Title>사전예약 마감까지</Title>
          <TimeBoxes>
            <TimeBox>{timeLeft.days || "0"}일</TimeBox>
            <TimeBox>{timeLeft.hours || "0"}시간</TimeBox>
            <TimeBox>{timeLeft.minutes || "0"}분</TimeBox>
            <TimeBox>{timeLeft.seconds || "0"}초</TimeBox>
          </TimeBoxes>
        </TimerContainer>
      </Center>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  background-color: ${(props) =>
    props.theme.colors.military}; /* Military 색상 */
  padding: 90px 0; /* 높이를 1.5배로 증가 */
  width: 100%;
`;

const BannerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BannerText = styled.div`
  max-width: 50%;

  h1 {
    font-size: 48px;
    margin: 0 0 10px;
    color: #fff;
  }

  p {
    font-size: 18px;
    margin: 0 0 20px;
    color: #fff;
  }
`;

const ShopNowButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #fff;
  color: ${(props) => props.theme.colors.military};
  border: none;
  cursor: pointer;
  font-weight: bold;
`;

const BannerImage = styled.img`
  max-width: 40%; /* 높이를 증가시키면서 비율 유지 */
`;

const TimerContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Title = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TimeBoxes = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const TimeBox = styled.div`
  background-color: #696969;
  color: #fff;
  padding: 15px 30px;
  border-radius: 5px;
  font-size: 30px;
  font-weight: bold;
`;

export default Banner;
