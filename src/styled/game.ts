import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export const Score = styled.p`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 0;
`;

export const Result = styled.p`
  font-size: 1.5rem;
  text-transform: capitalize;
`;

export const Choices = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  background-color: #fff;
  color: #333;
  border: 2px solid #333;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.2s;

  @media (min-width: 768px) {
    &:hover {
      background-color: #333;
      color: #fff;
    }
  }
  @media (max-width: 768px) {
    &:active {
      animation: blink 1s infinite;
    }
  }
`;
