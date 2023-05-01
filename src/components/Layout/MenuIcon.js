import menuIcon from '../../assets/menu.png';

const MenuIcon = (props) => {
    return <button className="menuBtn" onClick={props.onClick}>
        <img src={menuIcon} alt='menu'/>
    </button>;
};

export default MenuIcon;