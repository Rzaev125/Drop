import { faCartShopping, faHome, faList, faUser, faInfo, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import Logo from '../../assets/img/logo_dark.png';
import style from './Navbar.module.css';

function Navbar() {

    const menuItems = [
        { id: 1, icon: <FontAwesomeIcon icon={faUser} />, name: "Profile", link: "/profile" },
        { id: 2, icon: <FontAwesomeIcon icon={faHome} />, name: "Home", link: "/" },
        { id: 3, icon: <FontAwesomeIcon icon={faList} />, name: "Catalog", link: "/catalog" },
        { id: 4, icon: <FontAwesomeIcon icon={faCartShopping} />, name: "Cart", link: "/cart" },
        { id: 5, icon: <FontAwesomeIcon icon={faGear} />, name: "Settings", link: "/settings" },
        { id: 6, icon: <FontAwesomeIcon icon={faInfo} />, name: "Info", link: "/info" },
    ];

    return (
        <div className={style.sidebar}>
            <img className="logo" src={Logo} />
            {menuItems.map((item) => (
                <Link key={item.id} style={{ textDecoration: 'none' }} to={item.link}>
                    <div className={style.menu_item}>
                        <div className={style.icon}>{item.icon}</div>
                        <div className={style.text}><b>{item.name}</b></div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Navbar;