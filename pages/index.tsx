import type { NextPage } from 'next'
import React from 'react'
import ImageProps from '../type/imageProps'
import Data from '../data'
import Image from "next/image";
import dynamic from 'next/dynamic';

type HomeProps =  { headshot: ImageProps; background: ImageProps; };

const Home: NextPage<HomeProps> = (props) => {
	const suspense: {} = { loading: () => <div>... Loading</div> };

	const Nav = dynamic(() => import("./nav"), suspense);
	const SocialMedia = dynamic(() => import("./socialMedia"), suspense);
	const PersonalBackground = dynamic(() => import("./personalBackground"), suspense);

	return <>
		<React.StrictMode>
			<header role="banner" className="header" aria-labelledby='header__description'>
				<h2 className='header__description header__description--hidden'> Navigation links pertaining to the various sections of the page. </h2>
				<Nav /> 
			</header>
			<hr/>
			<section role="img" className='hero' aria-labelledby='hero__description'>
				<h2 className='hero__description hero__description--hidden' id="hero__description"> Presentational hero section images with a centered professional headshot and a background image.</h2>
				<picture className='hero__background-picture'>
					<Image role="img" className="background-picture__image" layout="fill" objectFit='cover' src={props.background.src} aria-label={`${props.background.alt} & ${props.headshot.alt}`}  alt={props.background.alt} />
				</picture>
				<picture className="hero__foreground-picture">
					<Image role="img" className="foreground-picture__image" src={props.headshot.src?.slice(1, -1)}  height={890} width={915} alt={props.headshot.alt} title={props.headshot.title} id="foreground"/>
				</picture>
			</section>
			<hr/>
			<section role="toolbar" className="social-media" aria-labelledby='social-media__description'>
				<h2 className='social-media__description social-media__description--hidden'> Social Media Navigation Icons. </h2>
				<SocialMedia />
			</section>
			<hr/>
			<main role="feed" aria-busy="false" className="personal-background" aria-labelledby='personal-background__description'> 
				<h2 className='personal-background__description personal-background__description--hidden' aria-busy="false"> Personal Background Sections. </h2>
				<PersonalBackground /> 
			</main>
			<hr/>
			<footer role="banner" className="footer" aria-labelledby='footer__description'> 
				<h2 className='footer__description footer__description--hidden'> Copyright notice. </h2>
				<p className="footer__header__text"> © 2022 Sindagal, OpenSource. MIT </p>
			</footer>
		</React.StrictMode>
	</>
}

export async function getServerSideProps() {
	return {
		props: Data.PersonalBrand()
	} 
}
  
export default Home
