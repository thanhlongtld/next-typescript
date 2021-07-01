import { Fragment } from 'react';
import Image from 'next/image';
import classes from './MeetupDetail.module.css';

const MeetupDetail: React.FC = () => {
  return (
    <section className={classes.detail}>
      <div className={classes.img}>
        <Image
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/A7E9/production/_118158924_gettyimages-507245091.jpg"
          alt="m1"
          layout="fill"
        />
      </div>
      <h1>A First Meetup</h1>
      <address>Some Address</address>
      <p>The meetup description</p>
    </section>
  );
};

export default MeetupDetail;
