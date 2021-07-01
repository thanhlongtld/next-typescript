import Card from '../ui/Card';
import Image from 'next/image';
import classes from './MeetupItem.module.css';
import { useRouter } from 'next/router';

const MeetupItem: React.FC<any> = (props) => {
  const router = useRouter();
  const showDetailHandler = (event: React.MouseEvent<HTMLElement>) => {
    router.push(`/meetups/${props.id}`);
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          {/* <img src={props.image} alt={props.title} /> */}
          <Image src={props.image} alt={props.title} layout="fill" />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
