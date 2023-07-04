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
  
