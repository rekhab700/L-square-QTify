import React from "react"
import Logo from "../Logo/Logo"
import Button from "../Button/Button";
import Search from "../Search/Search";
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";

function Navbar({searchData}){

    return (
        <nav className={styles.navbar}>
        <Link to="/">
            <Logo />
        </Link>
        <Search 
            placeholder={"Search a album of your choice" }
            searchData= {searchData}
        />
        <Button>Give Feedback</Button>
        </nav>

    )
}

export default Navbar;