import React from "react";
import "./main.css";
import Card from "../Cards/Card";
import Section from "../Cards/Section";
import CardHeading from "../Cards/CardHeading";
import {
  StatusHeading_tickets,
  userNameHeading_tickets,
  priorityHeading_tickets,
  priority_Heading_tickets,
} from "../../Data/Fetchdata";

const Display = ({ selectGroup, selectPriority }) => {
  const sortUserTicketsByTitle = (user) => {
    user.ticket.sort((a, b) => {
      const titleA = a.title.toLowerCase().trim();
      const titleB = b.title.toLowerCase().trim();
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });
    return user;
  };

  let newArr;
  if (selectPriority == "Title") {
    newArr =
      selectGroup == "Status"
        ? StatusHeading_tickets.map((item) => sortUserTicketsByTitle(item))
        : selectGroup == "Priority"
        ? priorityHeading_tickets.map((item) => sortUserTicketsByTitle(item))
        : selectGroup == "User"
        ? userNameHeading_tickets.map((item) =>
            sortUserTicketsByTitle({ ...item })
          )
        : [];
  }

  return (
    <>
      <div className="main">
        {selectGroup == "Status" &&
        (selectPriority == "" || selectPriority == "Priority") ? (
          StatusHeading_tickets.map((item, index) => (
            <div className="main-heading">
              <div className="section-heading">
                <CardHeading
                  key={index}
                  type="Status"
                  text={item.heading}
                  count={item.ticket.length}
                />
              </div>
              <div className="card-display">
                <Section key={index} data={item.ticket} />
              </div>
            </div>
          ))
        ) : selectGroup == "Priority" &&
          (selectPriority == "" || selectPriority == "Priority") ? (
          priorityHeading_tickets.map((item, index) => (
            <div className="main-heading">
              <div className="section-heading">
                <CardHeading
                  key={index}
                  type="Priority"
                  text={item.heading}
                  count={item.ticket.length}
                />
              </div>
              <div className="card-display">
                <Section key={index} data={item.ticket} />
              </div>
            </div>
          ))
        ) : selectGroup == "User" &&
          (selectPriority == "" || selectPriority == "Priority") ? (
          userNameHeading_tickets.map((item, index) => (
            <div className="main-heading">
              <div className="section-heading">
                <CardHeading
                  key={index}
                  type="User"
                  text={item.username}
                  count={item.ticket.length}
                />
              </div>
              <div className="card-display">
                <Section key={index} data={item.ticket} />
              </div>
            </div>
          ))
        ) : selectPriority == "Priority" ? (
          priority_Heading_tickets.map((item, index) => (
            <div className="main-heading">
              <div className="section-heading">
                <CardHeading
                  key={index}
                  type="priority_pri"
                  text={item.heading}
                  count={item.ticket.length}
                />
              </div>
              <div className="card-display">
                <Section key={index} data={item.ticket} />
              </div>
            </div>
          ))
        ) : selectPriority == "Title" ? (
          newArr.map((item, index) => (
            <div className="main-heading">
              <div className="section-heading">
                <CardHeading
                  key={index}
                  type="priority_pri"
                  text={
                    item.username == undefined ? item.heading : item.username
                  }
                  count={item.ticket.length}
                />
              </div>
              <div className="card-display">
                <Section key={index} data={item.ticket} />
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Display;
