import thumb1 from "../assets/img/featured-pic-1.jpeg";
import thumb2 from "../assets/img/featured-pic-2.jpeg";
import thumb3 from "../assets/img/featured-pic-3.jpeg";

const initState = {
  post: {
    data: [
      {
        id: 1,
        title: "Alberto Savoia Can Teach You About Interior",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrude consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
        author: "John Doe",
        comment: 12,
        thumb: thumb1,
        tagTtitle: "Busimess"
      },
      {
        id: 2,
        title: "Is this a success",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrude consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
        author: "John Doe",
        comment: 12,
        thumb: thumb2,
        tagTtitle: "Busimess"
      },
      {
        id: 3,
        title: "HMMMMMM",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrude consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
        author: "John Doe",
        comment: 12,
        thumb: thumb3,
        tagTtitle: "Busimess"
      }
    ]
  }
};

const postReducer = (state = initState, action) => {
  return state;
};

export default postReducer;
