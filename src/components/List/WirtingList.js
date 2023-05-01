import Card from '../UI/Card';
import ListItem from './ListItem/ListItem';
import classes from './WritingList.module.css';

const DUMMY_Writing = [
    {
      id: 'w1',
      tag: '익명',
      date: '2023.01.01',
      title: '백엔드 스터디 구함',
      member: '3/4',
      like: '5',
      comment: '2',
    },
    {
      id: 'w2',
      tag: '스터디',
      date: '2023.01.02',
      title: 'React 스터디 구함',
      member: '3/4',
      like: '15',
      comment: '5',
    },
    {
      id: 'w3',
      tag: '학교수업',
      date: '2023.01.03',
      title: '일변수 미적분학 스터디 구함',
      member: '2/5',
      like: '3',
      comment: '2',
    },
    {
      id: 'w4',
      tag: '공모전',
      date: '2023.01.04',
      title: '어쩌구저쩌구 공모전 참가할사람',
      member: '1/4',
      like: '10',
      comment: '3',
    },
    {
      id: 'w1',
      tag: '익명',
      date: '2023.01.01',
      title: '백엔드 스터디 구함',
      member: '3/4',
      like: '5',
      comment: '2',
    },
    {
      id: 'w2',
      tag: '스터디',
      date: '2023.01.02',
      title: 'React 스터디 구함',
      member: '3/4',
      like: '15',
      comment: '5',
    },
    {
      id: 'w3',
      tag: '학교수업',
      date: '2023.01.03',
      title: '일변수 미적분학 스터디 구함',
      member: '2/5',
      like: '3',
      comment: '2',
    },
    {
      id: 'w4',
      tag: '공모전',
      date: '2023.01.04',
      title: '어쩌구저쩌구 공모전 참가할사람',
      member: '1/4',
      like: '10',
      comment: '3',
    },
  ];

const WritingList = () => {
  const writings = DUMMY_Writing.map((writing) =>(<ListItem 
  key={writing.id} 
  tag={writing.tag}
  date={writing.date}
  title={writing.title}
  member={writing.member}
  like={writing.like}
  comment={writing.comment}
  />
  ));

  return <section className={classes.writing}>
    <Card>
      <ul>
        {writings}
      </ul>
    </Card>
  </section>
};

export default WritingList;