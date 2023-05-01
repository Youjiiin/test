import classes from './BottomHeader.module.css';

const BottomHeader = () => {
    return <div className={classes.bottomHeader}>
        <button className={classes.select}><span>스터디</span></button>

        <button className={classes.select}><span>모집인원</span></button>

        <button className={classes.select}><span>모집여부</span></button>
    </div>;
}

export default BottomHeader;