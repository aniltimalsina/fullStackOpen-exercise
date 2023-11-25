import { useEffect } from "react";
import "./notification.css";

const Notification = ({ notification, setNotification }) => {
  useEffect(() => {
    setTimeout(() => {
      setNotification(null);
    }, 7000);
  });

  if (notification == null) return null;

  return <div className="notification-box">{notification}</div>;
};

export default Notification;
