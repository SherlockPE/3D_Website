import React from "react";

const NavBar = () => {

    return (
        <header className="text-cyan-50 fixed top-0 left-0 right-0 z-50 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors" >
                        Fabricio 
                    </a>

                    {/* Hamburger button */}
                    <button>
                        <img src={"assets/menu.svg"} alt="toogle" className="w-6 h-6"/>
                    </button>
                </div>
            </div>
            NavBar
        </header>
    )
}

export default NavBar