import { CheckOutlined } from '@ant-design/icons';
import LoginBtn from './LoginBtn'

export default {
  title: "Atoms/LoginBtn",
  component: LoginBtn,
  tags: ["autodocs"],
 
};

export const Default = {
  args: {
    className:'login__btn',
   imglink:'https://accounts.fullstack.edu.vn/assets/images/signin/personal-18px.svg',
    text:"Login with Email/Password"
  },
};

export const Google = {
    args: {
      className:'login__btn',
     imglink:'https://accounts.fullstack.edu.vn/assets/images/signin/google-18px.svg',
      text:"Login with Google Account"
    },
  };

  export const Landing = {
    args: {
      className:'login__btn',
      text:"Chuyên sâu và bài bản hơn",
      icon: (<CheckOutlined style={{color:"white"}} />),
    },
  };
  
