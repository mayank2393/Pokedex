import { useEffect, useState } from "react";
import pokeballIcon from "../assets/pokeball-icon.png";
import {GiHamburgerMenu} from 'react-icons/gi';
import { Link, useLocation, useNavigate } from "react-router-dom";
import PopupModal from "../components/PopupModal";
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const navigationRoutes = [
    {
      name: "Search",
      route: "/search",
    },
    {
      name: "Compare",
      route: "/compare",
    },
    {
      name: "Pokemon",
      route: "/pokemon",
    },
    {
      name: "My List",
      route: "/list",
    },
    {
      name: "About",
      route: "/about",
    },
  ];

  useEffect(()=>{
    const index = navigationRoutes.findIndex(({route})=>
    location.pathname.includes(route)
    );
    ul(index);
  },[location.pathname,navigationRoutes])
  function ul(index: number) {
    var underlines = document.querySelectorAll<HTMLElement>(".underline");
    for (var i = 0; i < underlines.length; i++) {
      underlines[i].style.transform = "translate3d(" + index * 100 + "%,0,0)";
    }
  }
  return (
    <nav>
      <div className="block">
        <img
          src={pokeballIcon}
          alt="pokeball-icon"
          onClick={() => navigate("/search")}
        />
      </div>
      <div className="data">
        <ul>
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div>
          {navigationRoutes.map(({ name, route }, index) => (
            <Link to={route} key={index}>
              <li>{name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="block">
        {showModal ? (
          // <RxCross2 className="cross" onClick={toggleModal} />
            <></>
        ) : (
          <GiHamburgerMenu className="hamburger" onClick={toggleModal} />
        )}
        {showModal && <PopupModal handleClose={toggleModal} />}
      </div>
    </nav>
  );
}

export default Navbar  