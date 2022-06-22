import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { IoSearchOutline, IoHeartOutline } from 'react-icons/io5';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { FaBars } from 'react-icons/fa';

// import './Header.scss';

window.addEventListener('DOMContentLoaded', (event) => {
	var navbarShrink = function () {
		const navbarCollapsible = document.body.querySelector('#mainNav');
		if (!navbarCollapsible) {
			return;
		}
		if (window.scrollY === 0) {
			navbarCollapsible.classList.remove('navbar-shrink');
		} else {
			navbarCollapsible.classList.add('navbar-shrink');
		}
	};

	//navbarShrink();

	document.addEventListener('scroll', navbarShrink);
});

const Header = () => {
	return (
		<div className='header'>
			<nav
				className='navbar navbar-expand-lg navbar-dark fixed-top'
				id='mainNav'
			>
				<div className='container'>
					<Link className='navbar-brand' href='/'>
						BROGEMWAY
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarResponsive'
						aria-controls='navbarResponsive'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						Menu
						<FaBars />
					</button>
					<div
						className='collapse navbar-collapse'
						id='navbarResponsive'
					>
						<ul className='navbar-nav text-uppercase ms-auto py-4 py-lg-0'>
							<li className='nav-item'>
								<Link className='nav-link' href='/products'>
									Sản phẩm
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' href='/term'>
									Điều khoản
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' href='/about'>
									Về chúng tôi
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link icon' href='/login'>
									<AiOutlineUser size={20} />
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' href='/search'>
									<IoSearchOutline size={20} />
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' href='/favorite'>
									<IoHeartOutline size={20} />
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' href='/cart'>
									<MdOutlineShoppingBag size={20} />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
