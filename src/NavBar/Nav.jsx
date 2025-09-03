import './Nav.css';

// Assets
import profile from '../assets/Images/title.png';

// Icons
import { TiHome } from "react-icons/ti";
import { LuUserRound } from "react-icons/lu";
import { FaSkyatlas } from "react-icons/fa6";
import { BsBox } from "react-icons/bs";
import { LiaSmsSolid } from "react-icons/lia";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiMenu } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";

export default function Nav({ show, setshow }){
    return(
        <>
            <div className="nav">
                <div className="profile">
                    <img src={profile} alt="Profile" />
                    <div></div>
                </div>

                <div className="sections">
                    <a href="#"><span><TiHome /></span> Home </a>
                    <a href="#"><span><LuUserRound /></span> About Us </a>
                    <a href="#"><span><FaSkyatlas /></span> Skills </a>
                    <a href="#"><span><BsBox /></span> Projects </a>
                    <a href="#"><span><LiaSmsSolid /></span> Contact Us </a>
                </div>

                <div className="icons">
                    <span><FaLinkedinIn /></span>
                    <span><FaGithub /></span>
                    <span><FaInstagram /></span>
                    <span><FaXTwitter /></span>
                </div>
            </div>

            {show && (
                <div className="sidenavbar">
                    <div onClick={() => setshow(false)}>
                        <span className='close'><IoClose /></span>
                    </div>
                        <a href="#"><span><TiHome /></span> Home </a>
                        <a href="#"><span><LuUserRound /></span> About Us </a>
                        <a href="#"><span><FaSkyatlas /></span> Skills </a>
                        <a href="#"><span><BsBox /></span> Projects </a>
                        <a href="#"><span><LiaSmsSolid /></span> Contact Us </a>
                </div>
            )}

            <span className="menu" onClick={() => setshow(true)}><TfiMenu /></span>
        </>
    )
}