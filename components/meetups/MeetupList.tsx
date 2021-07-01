import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

interface Props {
  meetups: Array<{
    id: string;
    title: string;
    image: string;
    address: string;
  }>;
}

const MeetupList: React.FC<Props> = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup: any) => (
        <MeetupItem key={meetup.id} id={meetup.id} image={meetup.image} title={meetup.title} address={meetup.address} />
      ))}
    </ul>
  );
};

export default MeetupList;
