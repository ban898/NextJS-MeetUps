import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://pixabay.com/get/g0f4f79cb3d2b263438ae58a2ab93f812199c3efb79a4599b462e1e6dbbba0e60f2c8a43e2fd7b1989cc58f6ad9e48371637b743f0aa07307f4385bf30962f7dc343d36036bc0bff3e7168ac21ec4b6ad_1920.jpg"
      title="The First Meetup"
      address="Some Street"
      description="This is First Meetup"
    />
  );
}

export async function getStaticPaths() {}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  //Fetch data for single meetup
  return {
    props: {
      meetupData: {
        image:
          "https://pixabay.com/get/g0f4f79cb3d2b263438ae58a2ab93f812199c3efb79a4599b462e1e6dbbba0e60f2c8a43e2fd7b1989cc58f6ad9e48371637b743f0aa07307f4385bf30962f7dc343d36036bc0bff3e7168ac21ec4b6ad_1920.jpg",
        id: meetupId,
        title: "The First Meetup",
        address: "Some Street",
        description: "This is First Meetup",
      },
    },
  };
}

export default MeetupDetails;
