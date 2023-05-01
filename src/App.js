import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import List from "./components/List/List";
import WriteBtn from "./components/Layout/WriteBtn";
import Menu from "./components/Layout/Menu";

function App() {
  const [menuIsShown, setMenuIsShown] = useState(false);

  const shwoMenuHandler = () => {
    setMenuIsShown(true);
  };

  const hideMenuHandler = () => {
    setMenuIsShown(false);
  }

  return (
    <Fragment>
      {menuIsShown && <Menu onClose={hideMenuHandler} />}
      <Header onShowMenu={shwoMenuHandler} />
      <main>
        <List />
        <WriteBtn />
      </main>
    </Fragment>
  );
}

export default App;
