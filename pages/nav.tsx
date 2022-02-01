import { connect, ComponentConstructor }  from '../model/view/context';
import Context from '../type/context';
import _ from '../model/view/keyableFragment';
import { IoMenuOutline as MobileMenuOpenedIcon } from "react-icons/io5";
import { BsX as MobileMenuClosedIcon } from "react-icons/bs";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link"

type HeaderNavProps =  { logoText: string; navigationLinks: string[]; };

type ContextReducer =  (context: Context) => HeaderNavProps;
const Data: ContextReducer = (context: Context) => ({
    logoText: context.owner.ToString({ detailed: false }),
    navigationLinks: Object.keys(context.owner.background)
});


const Nav: (props: HeaderNavProps) => JSX.Element = (props) => {
    const [isMobileMenuOpen, setMobileMenuState] = useState(false);
    
    type EnterKeyEvent = (e: React.KeyboardEvent) => void | (() => void);
    const onEnterKey: EnterKeyEvent = (e: React.KeyboardEvent) => e.key === "Enter" ? setMobileMenuState(!isMobileMenuOpen) : () => {};
    const onAnchorNavigation: () => void = () => setMobileMenuState(false);
    
    const MobileMenuIcon:() => JSX.Element = isMobileMenuOpen ? () => <MobileMenuClosedIcon/> : () => <MobileMenuOpenedIcon/>;

    return <>
        <Link href="/" passHref>
            <a className="header__anchor" title='Scroll to Top' onClick={onAnchorNavigation}>
                <h3>{props.logoText}</h3>
            </a>
        </Link>

        <nav className="header__desktop-nav">
            <ul className="desktop-nav__menu">
                {props.navigationLinks.map(sectionKey => <_ key={`menu__element-${sectionKey}`}>
                    <li className="menu__element">
                        <a className="element__anchor" title={`Scroll to ${sectionKey} section`} href={ `/#${sectionKey}`}> 
                            <h4>{sectionKey}</h4>
                        </a>
                    </li>
                </_>)}
            </ul>
        </nav>
        <nav className="header__mobile-nav" aria-labelledby="header__mobile-nav__label">
            <label className="mobile-nav__label" htmlFor="mobile-nav__button" id="mobile-nav__label" aria-label="Mobile Navigation Menu Toggle" >
                Navigation Menu toggle used for mobile size screen resolutions
            </label>
            <button className="mobile-nav__button" id="mobile-nav__button" aria-labelledby='mobile-nav__label' autoFocus onClick={() => setMobileMenuState(!isMobileMenuOpen)} onKeyPress={onEnterKey} aria-expanded={isMobileMenuOpen}>
                <MobileMenuIcon/>
            </button>
            <ul className='mobile-nav__menu'>
                {isMobileMenuOpen && props.navigationLinks.map(sectionKey => <_ key={`mobile-${sectionKey}`}>
                    <motion.li className="menu__element" onClick={onAnchorNavigation} initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.04}}>
                        <a className="element__anchor" title={`Scroll to ${sectionKey} section`} href={ `/#${sectionKey}`}>
                            <h4> {sectionKey}</h4>
                        </a>
                    </motion.li>
                </_>)}
            </ul>
        </nav>
    </>
}

const WithContextConsumer: ComponentConstructor = connect(Data);
export default WithContextConsumer(Nav);

