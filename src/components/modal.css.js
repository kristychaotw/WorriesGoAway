import styled from "styled-components";

export const ModalWrapper = styled.div`
  background-color: #fff;
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
  animation: popupEaseIn .3s;

  @keyframes popupEaseIn {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  div {
    background-color: ${({ theme }) => theme.colors.body};
    height: 300px;
  }

  h2,
  p {
    color: ${({ theme }) => theme.colors.socondary};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;
    margin-top: ${({ theme }) => theme.spacing.l};
  }

  p {
    margin-top: 5px;
  }

  button {
    margin-top: ${({ theme }) => theme.spacing.l};
    text-align: center;
    background-color: ${({ theme }) => theme.colors.third};
    border-radius: 50px;
    padding: 15px 30px;
    color: ${({ theme }) => theme.colors.white};
  }
`;
