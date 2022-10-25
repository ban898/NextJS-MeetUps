import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://pixabay.com/get/g48a8cd5ff2ebb737728764e47d7b8911d3efc48f599060dd9bcc1c3f4e3beb493afd67e7b1f7c5f15c56262c154e4a81f8024693a72590b67e33b3450104c73d1b38a6f6a6e70e2c4b4838f364aa084e_1920.jpg"
      title="The First Meetup"
      address="Some Street"
      description="This is First Meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}

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

//-------------------------------------------------------------------------------------
//GetStaticPaths is a function which u need to use inside of a dynamic component IF U USE GETSTATICPROPS
