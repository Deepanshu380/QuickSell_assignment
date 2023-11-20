import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Display from "./Components/Main/Display";

const App = () => {
  const [selectGroup, setSelectGroup] = useState(() => {
    const storedSelectGroup = localStorage.getItem("storedSelectGroup");
    return storedSelectGroup ? storedSelectGroup : "Status";
  });

  const [selectPriority, setSelectPriority] = useState(() => {
    const storedSelectPriority = localStorage.getItem("storedSelectPriority");
    return storedSelectPriority ? storedSelectPriority : "";
  });

  const [prevGroup, setPrevGroup] = useState(() => {
    const storedPrevGroup = localStorage.getItem("storedPrevGroup");
    return storedPrevGroup ? storedPrevGroup : "Status";
  });

  useEffect(() => {
    localStorage.setItem(
      "storedSelectGroup",
      selectGroup == "" ? prevGroup : selectGroup
    );
  }, [selectGroup]);

  useEffect(() => {
    localStorage.setItem("storedSelectPriority", selectPriority);
  }, [selectPriority]);

  useEffect(() => {
    localStorage.setItem("storedPrevGroup", prevGroup);
  }, [prevGroup]);

  return (
    <>
      <Navbar
        selectGroup={selectGroup}
        setSelectGroup={setSelectGroup}
        selectPriority={selectPriority}
        setSelectPriority={setSelectPriority}
        prevGroup={prevGroup}
        setPrevGroup={setPrevGroup}
      />
      <Display selectGroup={selectGroup} selectPriority={selectPriority} />
    </>
  );
};

export default App;
