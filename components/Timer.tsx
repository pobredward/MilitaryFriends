import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const Timer = () => {
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

  if (!mounted) {
    return null;
  }

  return (
    <TimerContainer theme={theme}>
      <Title>사전예약 마감까지</Title>
      <TimeBoxes>
        <TimeBox>{timeLeft.days || "0"}일</TimeBox>
        <TimeBox>{timeLeft.hours || "0"}시간</TimeBox>
        <TimeBox>{timeLeft.minutes || "0"}분</TimeBox>
        <TimeBox>{timeLeft.seconds || "0"}초</TimeBox>
      </TimeBoxes>
    </TimerContainer>
  );
};

const TimerContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  background-color: ${(props) =>
    props.theme.colors.military}; /* Banner와 동일한 배경색 */
  padding: 20px 0;
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

export default Timer;
