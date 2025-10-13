import React from 'react';
 
import '../css/style.css'
import CartWidget from './Cartwidget';

const NavBar = () => {
return (
<nav className="navbar">
<div className="navbar-left">
<div className="logo">MiTienda</div>
<ul className="nav-links">
<li><a href="#home">Home</a></li>
<li><a href="#products">Productos</a></li>
<li><a href="#about">Acerca</a></li>
<li><a href="#contact">Contacto</a></li>
</ul>
</div>
<div className="navbar-right">
<CartWidget />
</div>
</nav>
);
};


export default NavBar;