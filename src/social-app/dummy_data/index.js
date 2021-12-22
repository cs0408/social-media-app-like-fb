import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpOutline,
  RssFeed,
  School,
  VideoCall,
  WorkOutline,
} from "@material-ui/icons";
import {
  profile1,
  profile2,
  profile3,
  profile4,
  profile5,
  profile6,
  profile7,
  profile8,
  profile9,
  profile10,
  post1,
  post2,
  post3,
  post4,
} from "../assets";

// explore left data
export const leftBarExplore = [
  {
    id: 0,
    icon: <RssFeed className="leftBar__wrapper__list__item__icon" />,
    text: "Feed",
  },
  {
    id: 1,
    icon: <Chat className="leftBar__wrapper__list__item__icon" />,
    text: "Chat",
  },
  {
    id: 2,
    icon: <VideoCall className="leftBar__wrapper__list__item__icon" />,
    text: "Videos",
  },
  {
    id: 3,
    icon: <Group className="leftBar__wrapper__list__item__icon" />,
    text: "Groups",
  },
  {
    id: 4,
    icon: <Bookmark className="leftBar__wrapper__list__item__icon" />,
    text: "Bookmarks",
  },
  {
    id: 5,
    icon: <HelpOutline className="leftBar__wrapper__list__item__icon" />,
    text: "Questions",
  },
  {
    id: 6,
    icon: <WorkOutline className="leftBar__wrapper__list__item__icon" />,
    text: "Job",
  },
  {
    id: 7,
    icon: <Event className="leftBar__wrapper__list__item__icon" />,
    text: "Event",
  },
  {
    id: 8,
    icon: <School className="leftBar__wrapper__list__item__icon" />,
    text: "Studies",
  },
];

// left bar friends list
export const leftBarFriends = [
  {
    id: 0,
    img: profile1,
    name: "Sharukh Khan",
  },
  {
    id: 1,
    img: profile2,
    name: "Sharukh Khan",
  },
  {
    id: 2,
    img: profile3,
    name: "Sharukh Khan",
  },
  {
    id: 3,
    img: profile4,
    name: "Sharukh Khan",
  },
  {
    id: 4,
    img: profile5,
    name: "Sharukh Khan",
  },
  {
    id: 5,
    img: profile6,
    name: "Sharukh Khan",
  },
  {
    id: 6,
    img: profile7,
    name: "Sharukh Khan",
  },
  {
    id: 7,
    img: profile8,
    name: "Sharukh Khan",
  },
  {
    id: 8,
    img: profile9,
    name: "Sharukh Khan",
  },
  {
    id: 9,
    img: profile10,
    name: "Sharukh Khan",
  },
];

// post dummy data
export const Posts = [
  {
    id: 0,
    profileImage: profile1,
    profileUserName: "Chandan Sahu",
    postDate: "5 minutes",
    postText: "Hey There I'm your brother",
    postImage: post1,
    postLiked: 34,
    postComments: 12,
  },
  {
    id: 1,
    profileImage: profile2,
    profileUserName: "Aman Agrawal",
    postDate: "0 minutes",
    postText: "Hey Guys",
    postImage: post2,
    postLiked: 340,
    postComments: 112,
  },
  {
    id: 2,
    profileImage: profile3,
    profileUserName: "Ankit Ahirwar",
    postDate: "5 hour",
    postText: "Hey There I'm your brother",
    postImage: post3,
    postLiked: 3400,
    postComments: 1232,
  },
  {
    id: 3,
    profileImage: profile4,
    profileUserName: "Chandan Teli",
    postDate: "5 minutes",
    postText: "Hey There I'm your brother",
    postImage: post4,
    postLiked: 3432,
    postComments: 121234,
  },
];

// online friends
export const OnlineFriends = [
  {
    id: 0,
    name: "Chandan Sahu",
    img: profile1,
  },
  {
    id: 1,
    name: "Aman Sahu",
    img: profile2,
  },
  {
    id: 2,
    name: "Chandan Kumar",
    img: profile3,
  },
  {
    id: 3,
    name: "Anil Sahu",
    img: profile4,
  },
  {
    id: 4,
    name: "Chandan",
    img: profile5,
  },
  {
    id: 5,
    name: "Chandan Sahu",
    img: profile6,
  },
];
