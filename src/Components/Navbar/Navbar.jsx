import { faCartShopping, faHome, faList, faUser, faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import style from './Navbar.module.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const menuItems = [
        { id: 1, icon: <FontAwesomeIcon icon={faUser} />, name: "Profile" },
        { id: 2, icon: <FontAwesomeIcon icon={faHome} />, name: "Home" },
        { id: 3, icon: <FontAwesomeIcon icon={faList} />, name: "Catalog" },
        { id: 4, icon: <FontAwesomeIcon icon={faCartShopping} />, name: "Cart" },
        { id: 5, icon: <FontAwesomeIcon icon={faInfo} />, name: "Info" },
    ];

    return (
        <div className={`${style.sidebar} ${isOpen ? style.open : style.closed}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {menuItems.map((item) => (
                <div key={item.id} className={style.menu_item}>
                    <div className={style.icon}>{item.icon}</div>
                    {isOpen && <div className={style.text}>{item.name}</div>}
                </div>
            ))}
        </div>
    );
}

export default Navbar;