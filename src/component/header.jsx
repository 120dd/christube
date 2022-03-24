import React, {useEffect, useRef} from 'react';
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from  './header.module.css'

import logo from './assets/logo.png'

const Header = ({ onSerch, getPopularData }) => {
    let inputValue = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        let inputContent = inputValue.current.value ;
        console.log(inputContent);
        onSerch(inputContent);
        inputValue.current.value = '';
    }

    return(
        <header className={styles.header}>
            <div className={styles.homeBtn} onClick={getPopularData}>
                <div className={styles.logo}>
                    <img src={logo} alt="site-logo"/>
                </div>
                <h1>CHRISTUBE</h1>
            </div>
            <form onSubmit={onSubmit}>
                <input ref={inputValue} type="text" placeholder='Search..' />
                <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </header>
    )
};

export default Header;