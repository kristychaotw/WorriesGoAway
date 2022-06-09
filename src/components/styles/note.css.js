import styled from "styled-components";

export const FormWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0 10px 10px 10px;
  box-shadow: 2px 4px 4px 0px #00000040;
  grid-area: form;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "trate rate rate"
    "ttitle . ."
    "title title title"
    "ttag . ."
    "tag tag tag"
    "tag tag tag"
    "tcontent . ."
    "content content content";
`;

export const NoteWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  /* height: 100vh; */
  padding: 60px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0 10px 10px 10px;
  box-shadow: 2px 4px 4px 0px #00000040;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  grid-template-areas:
    ". stamp"
    "foreword foreword"
    "rate tag"
    "title title"
    "content content";


  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "stamp"
      "foreword"
      "rate"
      "tag"
      "title"
      "content";
  }
`;

export const TextWrapper = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  grid-area: ${({ grid }) => grid};
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-top: 20px;
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: start;
`;


export const StampWrapper = styled.div`
  grid-area: ${({ grid }) => grid};
  justify-items: end;
  align-items: start;
  position: absolute;
  top: 90px;
  right: -35px;

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    top: 35px;
    right: -10px;
  }
  
`;

export const Line = styled.div`
  width: 250px;
  height: 0px;
  border-bottom: 2px dashed ${({ theme }) => theme.colors.primary};
  transform: rotate(45deg);
  display: flex;
  justify-content: center;
  align-items: end;
  grid-area: ${({ grid }) => grid};
  position: relative;

  img {
    width: 30%;
    margin-bottom: 5px;
    animation-name: imgAnimation;
    animation-duration: 0.5s;
    position: absolute;
    right: 88px;
    top: -80px;
    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      right: 30px;
      top: -35px;
    }
  }

  @keyframes imgAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    width: 100px;
  }
`;

export const TitleLable = styled.div`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 20px 10px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: left;
  grid-area: ${({ grid }) => grid};
`;

export const StyledRating = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  grid-area: ${({ grid }) => grid};
`;

export const Button = styled.button`
  padding: 10px;
  margin: 10px;
  background: #fcfcfc;
  border: none;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.third};

  &:hover {
    background-color: #e4e5e9;
    color: #5185a6;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.third};
    color: #f0f0f0;
  }
`;

export const TagBox = styled.div`
  grid-area: ${({ grid }) => grid};
  justify-self: start;
`;

export const TagButton = styled.button`
  margin: 10px;
  padding: 5px 10px;
  color: ${({ theme }) => theme.colors.third};
  border: none;
  border-radius: 10px;
  background-color: #fcfcfc;

  &:hover {
    background-color: ${({ theme }) => theme.colors.third};
    color: ${({ theme }) => theme.colors.white};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.third};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const TitleBox = styled.input`
  font-size: 1em;
  padding: 10px;
  margin: 10px;
  background: #fcfcfc;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: #8ba6bc;
  }
  grid-area: ${({ grid }) => grid};
  outline: 2px solid #8ba6bc;
  :focus {
    outline: 3px solid #8ba6bc;
  }
  caret-color: #8ba6bc;
`;

export const TextAreaBox = styled.textarea`
  font-size: 1em;
  padding: 10px;
  margin: 10px;
  background: #fcfcfc;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: #8ba6bc;
  }
  grid-area: ${({ grid }) => grid};
  outline: 2px solid #8ba6bc;
  :focus {
    outline: 3px solid #8ba6bc;
  }

  caret-color: #8ba6bc;
`;
