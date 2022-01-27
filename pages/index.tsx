import type { NextPage } from 'next'
import React from 'react'
import Nav from "./nav"
import SocialMedia from "./socialMedia"
import PersonalBackground from './personalBackground';
import ImageProps from '../type/imageProps'
import Data from '../data'
import Image from "next/image";

type HomeProps =  { headshot: ImageProps; background: ImageProps; };

const Home: NextPage<HomeProps> = (props) => <>
	<React.StrictMode>
		<header role="banner" className="header">
			<h2 className='header__description header__description--hidden'> Navigation links pertaining to the various sections of the page. </h2>
			<Nav /> 
		</header>
		<hr/>
		<section role="img" className='hero' aria-labelledby='hero__description'>
			<h2 className='hero__description hero__description--hidden' id="hero__description"> Presentational hero section images with a centered professional headshot and a background image.</h2>
			{/* className="hero" style={{backgroundImage: `url(${props.background.src})`}}*/}
			<picture className='hero__background-picture'>
				<Image  className="background-picture__image" layout="fill"  src={props.background.src} aria-label={`${props.background.alt} & ${props.headshot.alt}`}  alt={props.background.alt} />
			</picture>
			<picture className="hero__foreground-picture">
				<Image className="foreground-picture__image" src={props.headshot.src?.slice(1, -1)}  height={890} width={915} alt={props.headshot.alt} title={props.headshot.title} id="foreground"/>
			</picture>
		</section>
		<hr/>
		<section role="toolbar" className="social-media">
			<h2 className='social-media__description social-media__description--hidden'> Social Media Navigation Icons. </h2>
			<SocialMedia />
		</section>
		<hr/>
		<main role="feed" className="personal-background"> 
			<h2 className='personal-background__description personal-background__description--hidden'> Personal Background Sections. </h2>
			<PersonalBackground /> 
		</main>
		<hr/>
		<footer role="banner" className="footer"> 
			<h2 className='footer__description footer__description--hidden'> Copyright notice. </h2>
			<p className="footer__header__text"> © 2022 Sindagal, OpenSource. MIT </p>
		</footer>
	</React.StrictMode>
</>

export async function getServerSideProps() {
	return {
		props: Data.PersonalBrand()
	} 
}
  
export default Home
