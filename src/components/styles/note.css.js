import styled from "styled-components";

export const FormWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 30px;
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

  /* @media (max-width: ${({ theme }) => theme.device.tablet}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "."
      "trate"
      "rate"
      "ttitle"
      "title"
      "ttag"
      "tag"
      "tcontent"
      "content";
  } */
`;

export const Line = styled.div`
  width: 250px;
  height: 150px;
  border-bottom: 2px dashed ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: -40px;
  right: -87px;
  transform: rotate(45deg);
  display: flex;
  justify-content: center;
  align-items: end;
  img {
    width: 30%;
    margin-bottom: 5px;
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
