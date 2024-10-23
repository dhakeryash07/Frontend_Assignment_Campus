import React, { useEffect } from "react";
import img0 from "../Assets/img0.png";
import img1 from "../Assets/img1.png";
import img4 from "../Assets/img4.jpeg";
import img5 from "../Assets/img5.jpeg";
import img6 from "../Assets/img6.png";
import img7 from "../Assets/img7.png";

const Card = ({
  id,
  title,
  tag,
  userId,
  userData,
  status,
  priority,
  grouping,
  ordering,
  statusMapping,
}) => {
  const user = userData.find((user) => user.id === userId);

  return (
    <div className="card">
      <div className="card-header">
        <div className="status-heading">
          {grouping == "users" || grouping == "priority" ? (
            statusMapping[id] == "Todo" ? (
              <i className="bx bx-circle" id="todo"></i>
            ) : statusMapping[id] == "In progress" ? (
              <i className="bx bx-adjust" id="progress"></i>
            ) : statusMapping[id] == "Backlog" ? (
              <i className="bx bx-task-x" id="backlog"></i>
            ) : statusMapping[id] == "Done" ? (
              <i className="bx bxs-check-circle" id="done"></i>
            ) : (
              <i className="bx bxs-x-circle" id="cancel"></i>
            )
          ) : null}
          <p>{id}</p>
        </div>
        {grouping != "users" ? (
          <div
            className={
              user && !user.available
                ? "user-avatar-unavailable"
                : "user-avatar"
            }
          >
            <img
              src={
                userId == "usr-1"
                  ? img1
                  : userId == "usr-2"
                  ? img6
                  : userId == "usr-3"
                  ? img7
                  : userId == "usr-4"
                  ? img5
                  : userId == "usr-5"
                  ? img4
                  : img0
              }
              className={
                user && !user.available
                  ? "user-avatar-unavailable"
                  : "user-avatar"
              }
              alt="user"
            ></img>
          </div>
        ) : null}
      </div>
      <div className="card-title">
        <p>{title}</p>
      </div>
      <div className="card-footer">
        {grouping != "priority" ? (
          <div className="feature-container">
            {priority == "0" ? (
              <i className="bx bx-dots-horizontal-rounded"></i>
            ) : priority == "1" ? (
              <i className="bx bx-signal-1"></i>
            ) : priority == "2" ? (
              <i className="bx bx-signal-2"></i>
            ) : priority == "3" ? (
              <i className="bx bx-signal-3"></i>
            ) : (
              <i className="bx bxs-message-square-error"></i>
            )}
          </div>
        ) : null}
        {tag?.map((value, index) => {
          return (
            <div className="feature-container" key={index}>
              <div className="alert-icon"></div>
              <div className="feature-request">{value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
