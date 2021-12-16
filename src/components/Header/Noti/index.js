import "./Noti.scss";

export default function Noti() {
  return (
    <span className="noti-container">
      <i className="fas fa-bell" />
      <div className="noti-popup">
        <div className="noti">This feature is still developing...</div>
        <div className="noti">This feature is still developing...</div>
        <div className="noti">This feature is still developing...</div>
        <div className="noti">This feature is still developing...</div>
        <div className="noti">This feature is still developing...</div>
      </div>
    </span>
  );
}
