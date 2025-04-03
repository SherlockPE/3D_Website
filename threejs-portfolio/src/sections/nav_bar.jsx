import React from "react";
import { navLinks } from "../constants/index.js";

const NavItems = () => {
	return (
		<ul className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 relative z-20">
			{navLinks.map(({id ,name ,href}) => (
				<li key={id} className="nav-li">
					<a href={href} className="text-neutral-400 hover:text-white font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5" onClick={() => {}}>
						{name}
					</a>
				</li>
			))}
		</ul>
	)
}


const NavBar = () => {

	const [isOpen, setIsOpen] = React.useState(false);

	const toogleMenu = () => { setIsOpen((prevIsOpen) => !prevIsOpen); }

	return (
		<header className="text-cyan-50 fixed top-0 left-0 right-0 z-50 bg-black">
			<div className="max-w-7xl mx-auto">
				<div className="flex justify-between items-center py-5 mx-auto sm:px-10 px-5">
					{/* Main page link */}
					<a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors" > Fabricio </a>
					{/* Hamburger button */}
					<button onClick={toogleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex">
						<img src={isOpen ? "assets/close.svg" : "assets/menu.svg" } alt="toogle" className="w-6 h-6 "/>
					</button>

					{/* Desktop menu */}
					<nav className="sm:flex hidden">
						<NavItems />
					</nav>
				</div>
			</div>

			{/* Mobile menu */}
			<div className={`absolute left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-400 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
				<nav className="p-5">
					<NavItems/>
				</nav>
			</div>
		</header>
	)
}

export default NavBar