import './Header.css';
import MenuIcon from './MenuIcon';
import searchIcon from '../../assets/search.png';


const TopHeader = props => {
    return <div className="topHeader">
        <MenuIcon className="menuBtn" onClick={props.showMenu}/>

        <div className="search">
            <input type="text"></input>
            <button className="searchIcon">
                <img src={searchIcon} alt='search'/>
            </button>
        </div>
    </div>;
}

export default TopHeader;