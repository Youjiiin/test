import { Fragment } from "react";

import TopHeader from "./TopHeader.js";
import BottomHeader from "./BottomHeader.js";

const Header = (props) => {
    return <Fragment>
        <header>
            <TopHeader showMenu={props.onShowMenu}/>
            <BottomHeader showMenu={props.onShowMenu}/>
        </header>
    </Fragment>;
};

export default Header;