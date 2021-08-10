import React from "react";
import "./header.css"

export default ({black}) => {
    return (
        <header className={black ? "black" : ''}>
            <div className="header--logo">
                <a href="/">
                   NETFLIX
                </a>
            </div> 

            <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário">

                    </img>
                </a>
            </div>
        </header>
    )
}