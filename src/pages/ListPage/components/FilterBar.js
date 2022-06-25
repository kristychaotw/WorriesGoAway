import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import reverseImg from "../../../components/images/icons/reverse.svg";
import noreverseImg from "../../../components/images/icons/noreverse.svg";

const Bar = styled.div`
  display: flex;
  grid-area: ${({ grid }) => grid};
  border-bottom: solid #e6e6e6 ${(props) => props.border};
`;

const Btn = styled.button`
  font-size: ${(props) => props.btnstyle.fontSize};
  box-sizing: border-box;
  padding: ${(props) => props.btnstyle.padding};
  border-bottom: ${(props) => props.btnstyle.border};
  color: ${(props) => props.btnstyle.color};
  font-weight: ${(props) => props.btnstyle.fontWeight || 400};

  img {
    width: 16px;
  }
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    padding: 5px;
  }
`;

const defaultBtn = {
  border: "0px",
  color: "#656565",
  fontSize: "1.2rem",
  padding: "10px 20px",
};

const clickBtn = {
  border: "2px solid #5085A5",
  color: "#5085A5",
  fontSize: "1.2rem",
  padding: "10px 20px",
};

const defaultBtnSub = {
  border: "0px",
  color: "#65656580",
  fontSize: "1rem",
  padding: "10px 20px",
};

const clickBtnSub = {
  border: "0px",
  color: "#656565",
  fontSize: "1rem",
  padding: "10px 20px",
  fontWeight: "600",
};
const defaultOrder = {
  border: "0px",
  color: "#65656580",
  fontSize: "1rem",
  padding: "10px 20px 10px 40px",
};

export default function FilterBar({ setNotes, originalNotes, notes }) {
  const [selected, setSelected] = useState("All");
  const [subSelected, setSubSelected] = useState("Date");
  const [noteByComplete, setNoteByComplete] = useState([]);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    setNoteByComplete(originalNotes);
  }, [originalNotes]);

  const handleClick = (e) => {
    setSubSelected("Date");
    setSelected(e);
    if (e === "Complete") {
      const completeNotes = originalNotes.filter((newNotes) => {
        return newNotes.isComplete;
      });
      setNotes(completeNotes);
      setNoteByComplete(completeNotes);
    } else if (e === "Ongoing") {
      const ongoingNotes = originalNotes.filter((newNotes) => {
        return !newNotes.isComplete;
      });
      setNotes(ongoingNotes);
      setNoteByComplete(ongoingNotes);
    } else {
      setNotes(originalNotes);
      setNoteByComplete(originalNotes);
    }
  };

  const handleClickSub = (e) => {
    setSubSelected(e);
    let sortBy;
    if (reverse === false) {
      if (e === "Tag")
        sortBy = noteByComplete
          .sort((a, b) => (a.tag.toUpperCase() > b.tag.toUpperCase() ? -1 : 1))
          .map((sortedNote) => sortedNote);
      if (e === "Stress")
        sortBy = noteByComplete
          .sort((a, b) => (a.rating > b.rating ? -1 : 1))
          .map((sortedNote) => sortedNote);
      if (e === "Animal")
        sortBy = noteByComplete
          .sort((a, b) =>
            a.animalName.toUpperCase() > b.animalName.toUpperCase() ? -1 : 1
          )
          .map((sortedNote) => sortedNote);
      if (e === "Date")
        sortBy = noteByComplete
          .sort((a, b) =>
            moment(a.createDate).format() > moment(b.createDate).format()
              ? -1
              : 1
          )
          .map((sortedNote) => sortedNote);
    } else {
      if (e === "Tag")
        sortBy = noteByComplete
          .sort((a, b) => (a.tag.toUpperCase() > b.tag.toUpperCase() ? 1 : -1))
          .map((sortedNote) => sortedNote);
      if (e === "Stress")
        sortBy = noteByComplete
          .sort((a, b) => (a.rating > b.rating ? 1 : -1))
          .map((sortedNote) => sortedNote);
      if (e === "Animal")
        sortBy = noteByComplete
          .sort((a, b) =>
            a.animalName.toUpperCase() > b.animalName.toUpperCase() ? 1 : -1
          )
          .map((sortedNote) => sortedNote);
      if (e === "Date")
        sortBy = noteByComplete
          .sort((a, b) =>
            moment(a.createDate).format() > moment(b.createDate).format()
              ? 1
              : -1
          )
          .map((sortedNote) => sortedNote);
    }
    setNotes(sortBy);
  };

  const handleReverse=()=>{
    setReverse(!reverse)
    let reverseNote=Object.assign([], notes).reverse()
    setNotes(reverseNote)
  }

  return (
    <>
      <Bar grid={"bar"} border={"1px"}>
        <Btn
          btnstyle={selected === "All" ? clickBtn : defaultBtn}
          onClick={() => handleClick("All")}
        >
          All
        </Btn>
        <Btn
          btnstyle={selected === "Complete" ? clickBtn : defaultBtn}
          onClick={() => handleClick("Complete")}
        >
          Complete
        </Btn>
        <Btn
          btnstyle={selected === "Ongoing" ? clickBtn : defaultBtn}
          onClick={() => handleClick("Ongoing")}
        >
          Ongoing
        </Btn>
      </Bar>
      <Bar grid={"subBar"} border={"0px"}>
        <Btn
          btnstyle={subSelected === "Date" ? clickBtnSub : defaultBtnSub}
          onClick={() => handleClickSub("Date")}
        >
          Date
        </Btn>
        <Btn
          btnstyle={subSelected === "Tag" ? clickBtnSub : defaultBtnSub}
          onClick={() => handleClickSub("Tag")}
        >
          Tag
        </Btn>
        <Btn
          btnstyle={subSelected === "Stress" ? clickBtnSub : defaultBtnSub}
          onClick={() => handleClickSub("Stress")}
        >
          Stress
        </Btn>
        <Btn
          btnstyle={subSelected === "Animal" ? clickBtnSub : defaultBtnSub}
          onClick={() => handleClickSub("Animal")}
        >
          Animal
        </Btn>
        <Btn btnstyle={defaultOrder} onClick={handleReverse}>
          <img
            src={reverse === true ? `${reverseImg}` : `${noreverseImg}`}
          ></img>
        </Btn>
      </Bar>
    </>
  );
}
