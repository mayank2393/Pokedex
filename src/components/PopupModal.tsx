// PopupModal.tsx
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useAppSelector } from "../app/hooks";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface PopupModalProps {
  handleClose: () => void;
}

const PopupModal: React.FC<PopupModalProps> = ({ handleClose }) => {
  const navigate = useNavigate();
  const { userInfo } = useAppSelector(({ app }) => app);
  const email = userInfo?.email;
  const username = email?.split("@")[0];

  return (
    <div className="popup-wrapper">
      <div className="popup-body">
        <RxCross2 className="cross" onClick={handleClose} />
        <div className="popup-content">
          {userInfo ? (
            <>
              <div className="image-wrapper">
                <img
                  src={`https://api.dicebear.com/5.x/initials/svg?seed=${username}`}
                  className="avatar"
                  alt="avatar"
                />
              </div>
              <div className="user-info">
                <h3>{email}</h3>
              </div>
              <button
                className="profile-search-btn"
                onClick={() => {
                  handleClose();
                  navigate("/search");
                }}
              >
                Search Pokemons
              </button>
            </>
          ) : (
            <>
              <div className="image-wrapper">
                <FaUser className="userIcon" />
              </div>
              <button
                className="profile-btn"
                onClick={() => {
                  handleClose();
                  navigate("/list");
                }}
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
