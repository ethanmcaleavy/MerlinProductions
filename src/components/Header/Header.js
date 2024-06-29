import React from 'react';
import './Header.css';
import '../../assets/fonts/MagicHat.ttf';
import MerlinLogo from '../../assets/images/MerlinLogo.png';


function Header() {
    return (
        <header>
            <div>
                <img src={MerlinLogo} alt="Merlin Logo"/>
            </div>
        </header>
    );
}

export default Header;