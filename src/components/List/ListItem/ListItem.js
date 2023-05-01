import classes from "./ListItem.module.css";
import like from "../../../assets/like.png";
import comment from "../../../assets/comment.png";


const ListItem = props => {
  return (
    <li className={classes.writing}>
        <div className={classes.top}>
            <div className={classes.tag}><span>{props.tag}</span></div>
            <div className={classes.date}>{props.date}</div>
        </div>

        <div className={classes.mid}>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.member}>{props.member}</div>
        </div>

        <div className={classes.bottom}>

            <div className={classes.like}>
            <img src={like} alt='like'/>
            {props.like}
            </div>

            <div className={classes.like}>
            <img src={comment} alt='comment'/>
            {props.comment}
            </div>
        </div>
    </li>
  );
};

export default ListItem;
