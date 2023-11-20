import React, { useState } from "react";
import "./nav.css";
import { FaAngleDown } from "react-icons/fa";
import { RiMenuFoldLine } from "react-icons/ri";

const Navbar = ({
  selectGroup,
  setSelectGroup,
  selectPriority,
  setSelectPriority,
  prevGroup,
  setPrevGroup,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleGroupChnage = (e) => {
    setSelectGroup(e.target.value);
    setPrevGroup(e.target.value);
    setShowMenu(!showMenu);
  };
  const handlePriorityChange = (e) => {
    setSelectPriority(e.target.value);
    setPrevGroup(selectGroup);
    if (e.target.value == "Priority") {
      setSelectGroup("");
    } else {
      setSelectGroup(prevGroup);
    }
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleMenu}>
          <span className="text">
            {" "}
            <RiMenuFoldLine
              fontSize="small"
              style={{ paddingRight: "0.1rem" }}
            />{" "}
            Display <FaAngleDown fontSize="small" />
          </span>
        </button>
        {showMenu && (
          <div className={`dropdown-menu ${showMenu ? "show" : ""}`}>
            <a href="#">
              <span> Grouping </span>

              <div className="nested-dropdown">
                <select
                  className="custom-select"
                  value={selectGroup == "" ? prevGroup : selectGroup}
                  onChange={handleGroupChnage}
                >
                  <option value="Status">Status</option>
                  <option value="Priority">Priority</option>
                  <option value="User">User</option>
                </select>
              </div>
            </a>
            <a href="#">
              <span> Ordering </span>

              <div className="nested-dropdown">
                <select
                  value={selectPriority}
                  onChange={handlePriorityChange}
                  className="custom-select"
                >
                  <option value="Priority">Priority</option>
                  <option value="Title">Title</option>
                </select>
              </div>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
