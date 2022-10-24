import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "The First MeetUp",
    image:
      "https://pixabay.com/get/g0371f2eebadd6402c51bfab9bba4559ed79d488725ba499b1c06438c712a18f9c6801f14651cba1044bb79be6a01a77f51e1db58fdec0feeff8fbf3648ad108c0d96655fe7896f54e5421f54240f5f43_1920.jpg",
    address: "Some address 42, Street 119",
    description: "The First",
  },
  {
    id: "m2",
    title: "The Second MeetUp",
    image:
      "https://pixabay.com/get/g8b3acdec2533d8582f3d1a7d74deb41829aeb5856042055a12a7b79da3e1402580f553dec7d3ead0e7254c0762b7d55ecef28cca42ceb409e9511bd6c23a20802e9d99692d3506da727c018f212d0c01_1280.jpg",
    address: "Some address 4, Street 12",
    description: "The Second",
  },
  {
    id: "m3",
    title: "The Third MeetUp",
    image:
      "https://pixabay.com/get/g0f4f79cb3d2b263438ae58a2ab93f812199c3efb79a4599b462e1e6dbbba0e60f2c8a43e2fd7b1989cc58f6ad9e48371637b743f0aa07307f4385bf30962f7dc343d36036bc0bff3e7168ac21ec4b6ad_1920.jpg",
    address: "Some address 6, Street 92",
    description: "The Third",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  //Fetch data from API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;

//-------------------------------------------------------------------------------------
//Notice can only be donw within a page component
//Notice export function getStaticProps is preserved name

//Its a built in function , nextJS will look for a function wth that name and if it finds it and will execute this function during this pre-rendering process . in other words it will call get static props first and only then it will call the page component function we created which will result that FIRST the fetching the data will be proccessed on the server and only then the page component will be rendered

//GetStaticProps MUST return an object . this object Must have a KEY with the name of props! , this object should contain the fetched data .

//We can add a field INSIDE OF THE OBJECT BUT OUTSIDE OF PROPS which called revalidate which want a number of seconds , based on the number of seconds we passed to it will determine on what freq the getStaticProp should be Re-evaluated which means what is number of seconds we want to wait to update the fetched data

//Example

// export async function getStaticProps() {
//   //Fetch data from API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 10,
//   };
// }

//Another solution is getServerSideProps which used when u need to update ur data on the page ON EVERY REQUEST TO THE SERVER unlike getStaticProps which will update the page every few seconds [not based on requests]

//Example:

// export async function getServerSideProps() {
//   //Fetch DATA
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
