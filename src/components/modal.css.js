import styled from "styled-components";

export const ModalWrapper = styled.div`
  background-color: #fff;
  z-index: 99;
`;

export const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.dark80};
  z-index: 99;
`;

export const ModalContent = styled.div`
  width: 80%;
  max-width: 450px;
  margin: 150px auto;
  background-color: ${({ theme }) => theme.colors.white};
  /* border: 2px solid #888877; */
  box-shadow: 10px 10px 3px ${({ theme }) => theme.colors.dark80};
  border-radius: 50px;
  text-align: center;
  padding-bottom: ${({ theme }) => theme.spacing.l};
  overflow: hidden;
  animation: popupEaseIn 0.3s;
  z-index: 99;

  @keyframes popupEaseIn {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  h2,
  p {
    color: ${({ theme }) => theme.colors.dark};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;
    margin-top: ${({ theme }) => theme.spacing.l};
  }

  p {
    margin-top: 5px;
  }
`;

export const ModalBtn = styled.div`
  background-color: ${({ theme }) => theme.colors.third};
  border-radius: 50px;
  border: none;
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.spacing.l};
  padding: 10px 20px;
  width: 100px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;
