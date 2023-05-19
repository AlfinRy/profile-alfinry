import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import picture from '../../assets/profileImage.jpg';

const Footer = () => {
	return (
		<footer id="footer">
			<div className="footer__container">
				<div className="footer__main">
					<div className="footer__title">
						<img src={picture} alt="Alfin Reynaldi" />
						<h1>Let's team up!</h1>
					</div>
					<div className="footer__button">
						<Link to="/me">Get in touch</Link>
					</div>
					<div className="footer__contact">
						<a href="mailto:alfin.reynaldi26@gmail.com">alfin.reynaldi26@gmail.com</a>
						{/* <a target="_blank" rel="noreferrer noopener" href="https://wa.me/6289638324927/?text=Hello%20Alfin">
							+62 896 3832 4927
						</a> */}
					</div>
				</div>
				<div className="footer__info">
					<div className="footer__section">
						<a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/alfinry_/">
							Instagram
						</a>
						<a target="_blank" rel="noreferrer noopener" href="https://linktree-alfinry.vercel.app/">
							Linktree
						</a>
						<a target="_blank" rel="noreferrer noopener" href="https://github.com/AlfinRy">
							GitHub
						</a>
						<a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/alfinry/">
							LinkedIn
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
