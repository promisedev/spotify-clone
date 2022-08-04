// import HomeIcon from './public/graphics/home.svg'
// import LibraryIcon from '../graphics/library.svg'
// import AddIcon from '../graphics/add.svg'
// import LikedIcon from '../graphics/liked.svg'
// import SearchIcon from '../graphics/search.svg'

const Menu = ()=>{

    return(
        <article className='spot_menu'>
<div className='spot_logo'><img src='../graphics/logo.ico' alt='kpalify logo'/></div>
{/* ------------------------------------ */}
<div className="spot_menu1">
<div className="spot_link" ><img src='../graphics/home.ico' alt='home'/>Home</div>
<div className="spot_link"><img src='../graphics/search.ico' alt='search'/>Search</div>
<div className="spot_link"><img src='../graphics/library.ico' alt='library'/>Your Library</div>
</div>
{/* ------------------------------------ */}
<div className="spot_menu2">
<div className="spot_link"><img src='../graphics/add.ico' alt='add'/>Create Playlist</div>
<div className="spot_link"><img src='../graphics/liked.ico' alt='liked'/>Liked Songs</div>
</div>
{/* ------------------------------------ */}
<div className="spot_menu3">
  <div className="spot_link1">Cookies</div>
<div className="spot_link1">Privacy</div>  
</div>
{/* ------------------------------------ */}
        </article>
    )
}
export default Menu