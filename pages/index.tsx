import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/A7E9/production/_118158924_gettyimages-507245091.jpg',
    address: 'Some Address',
  },
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/A7E9/production/_118158924_gettyimages-507245091.jpg',
    address: 'Some Address',
  },
];

export default function HomePage() {
  return (
      <MeetupList meetups={DUMMY_MEETUPS} />
  );
}
