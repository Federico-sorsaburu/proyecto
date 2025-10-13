import React from 'react';
import { ItemListContainer } from './components/ItemListContainer';
import NavBar from './components/Navbar';



const App = () => {
return (
<div className="app-root">
<NavBar/>



<ItemListContainer greeting={"Bienvenid@ a MiTienda - ¡Explora nuestros productos!"} />
</div>
);
};


export default App;