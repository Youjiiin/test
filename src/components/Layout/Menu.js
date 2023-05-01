import classes from './Menu.module.css';
import Modal from '../UI/Modal';

const Menu = (props) => {
    return <Modal onClose={props.onClose}>
        <div className={classes.login_div}>
            <div className={classes.login}>로그인</div>
            <div className={classes.login}>회원가입</div>
        </div>

        <div className={classes.menuList}>세종스터디</div>
        <div className={classes.menuList}>짝선배짝후배</div>
    </Modal>
};

export default Menu;