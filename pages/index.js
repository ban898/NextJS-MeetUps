import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "The First MeetUp",
    image:
      "https://pixabay.com/get/g48a8cd5ff2ebb737728764e47d7b8911d3efc48f599060dd9bcc1c3f4e3beb493afd67e7b1f7c5f15c56262c154e4a81f8024693a72590b67e33b3450104c73d1b38a6f6a6e70e2c4b4838f364aa084e_1920.jpg",
    address: "Some address 42, Street 119",
    description: "The First",
  },
  {
    id: "m2",
    title: "The Second MeetUp",
    image:
      "https://pixabay.com/get/g29fde778476fc13276e14851c1fb175ef933275cafef79ed2c83b3f97dca56080ac7a80db7fc59e3c5da7e80b262706d9cf70fc52ab2dbd9b67ad6c7039bc6b9cf4f91878da34ae9c6d0bcb48deb6aae_1920.jpg",
    address: "Some address 4, Street 12",
    description: "The Second",
  },
  {
    id: "m3",
    title: "The Third MeetUp",
    image:
      "https://pixabay.com/get/g0e5aab3873b43e613a4c046a20364a641947e13c3e5828a65533aa7f1e5e9006f4171fb0f655fd83e0abe3581bc516124fcde485d816790b22a8a286ee2dcacaff721b7c53ead13491cb3f40f8eeca49_1920.jpg",
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
