import NewMeetupForm from '../../components/meetups/NewMeetupForm';

export default function NewMeetupPage() {
  const addMeetupHandler = (meetupData: { title: string; image: string; address: string; description: string }) => {
    console.log(meetupData);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
