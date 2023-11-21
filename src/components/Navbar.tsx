import React, {useState} from "react"
import {Link} from "react-router-dom"
import {LinksProps} from "../types"

import "../styles/components/Navbar.sass"
import logo from "../assets/images/logo.svg"
import qr from "../assets/images/qr.svg"
import navigation from "../assets/images/button-navigation.svg"
import back from "../assets/images/back.svg"

// monochrome icons
import home from "../assets/images/home.svg"
import work from "../assets/images/work.svg"
import skills from "../assets/images/skills.svg"
import profile from "../assets/images/profile.svg"
import contacts from "../assets/images/contacts.svg"

// colored icons
import homeColor from "../assets/images/home-color.svg"
import workColor from "../assets/images/work-color.svg"
import skillsColor from "../assets/images/skills-color.svg"
import profileColor from "../assets/images/profile-color.svg"
import contactsColor from "../assets/images/contacts-color.svg"

function Navbar() {
    const [sidebarIsActive, setSidebarIsActive] = useState(false)

    // randomly picks either logo or qr-code
    const randomizeLogo = () => Math.round(Math.random() * 10) <= 1

    // toggle sidebar in mobile version
    const toggleSidebar = (event: React.MouseEvent) => setSidebarIsActive(!sidebarIsActive)

        // hide all other elements, when sidebar is opened
    ;(() => {
        const allIDs = Array.from(document.querySelectorAll("[id]"))
        const filteredIDs = allIDs.filter((el) => el.id !== "root")
        if (sidebarIsActive) {
            filteredIDs.forEach((el) => {
                el.className = "hidden"
            })
        } else {
            filteredIDs.forEach((el) => {
                el.classList.remove("hidden")
            })
        }
    })()

    const links: LinksProps[] = [
        {
            title: "Home",
            picture: home,
            pictureOnHover: homeColor,
            alt: "Home",
            path: "/",
        },
        {
            title: "Works",
            picture: work,
            pictureOnHover: workColor,
            alt: "Works",
            path: "/works",
        },
        {
            title: "Skills",
            picture: skills,
            pictureOnHover: skillsColor,
            alt: "Skills",
            path: "/skills",
        },
        {
            title: "Profile",
            picture: profile,
            pictureOnHover: profileColor,
            alt: "Profile",
            path: "/profile",
        },
        {
            title: "Contacts",
            picture: contacts,
            pictureOnHover: contactsColor,
            alt: "Contacts",
            path: "/contacts",
        },
    ]

    return (
        <div className="">
            <div className={sidebarIsActive ? "hidden" : "navigation"}>
                <Link
                    to="/"
                    className="navigation__logo logo">
                    <img
                        className="logo__image"
                        src={randomizeLogo() ? qr : logo}
                        alt="Logo"
                    />
                </Link>
                <div className="navigation__links link">
                    {links.map((link) => (
                        <div
                            key={link.title}
                            className="link__anchor anchor">
                            <Link
                                to={link.path}
                                onMouseOver={(e: React.MouseEvent<HTMLElement>) => {
                                    const target = e.target as Element
                                    if (target && target.children[0]) {
                                        const image = target.children[0] as HTMLImageElement
                                        image.src = link.pictureOnHover
                                    }
                                }}
                                onMouseOut={(e: React.MouseEvent<HTMLElement>) => {
                                    const target = e.target as Element
                                    if (target && target.children[0]) {
                                        const image = target.children[0] as HTMLImageElement
                                        image.src = link.picture
                                    }
                                }}
                                className="anchor__link link">
                                /{link.title}
                                <img
                                    onMouseOver={(e) => {
                                        e.currentTarget.src = link.pictureOnHover
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.src = link.picture
                                    }}
                                    className="link__image"
                                    src={link.picture}
                                    alt={link.alt}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
                <div
                    className="navigation__button button"
                    onClick={toggleSidebar}>
                    <img
                        className="button__menu"
                        src={navigation}
                        alt="Navigation"
                    />
                </div>
            </div>
            <div className={sidebarIsActive ? "sidebar" : "hidden"}>
                <div
                    className="sidebar__anchor anchor"
                    onClick={toggleSidebar}>
                    <img
                        className="anchor__image"
                        src={back}
                        alt="Back"
                    />
                </div>
                {links.map((link) => (
                    <div
                        onClick={toggleSidebar}
                        key={link.title}
                        className="sidebar__anchor anchor">
                        <Link
                            to={link.path}
                            className="anchor__link link">
                            /{link.title}
                            <img
                                className="link__image"
                                src={link.picture}
                                alt={link.alt}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Navbar
