export interface BlogCardProps {
    id?: string;
    image: string;
    avatar: string;
    title: string;
    user: string;
    time:string;
  }

  
export interface CourseCardProps {
    id?: string;
    image: string;
    members: string;
    title: string;
  }

export  interface VideoCardProps {
    id?: string;
    image: string;
    view: string;
    title: string;
    like: string;
    mess: string;
  }
  
  export interface HeaderrProps{
    logo:string,
    slogan:string,
    inputText:string,
    loginBtn:string
  }
  
  export interface LandingHeaderProps {
    logo: string;
    slogan: string;
    menu: string[];
    textColor?:string
  }

export interface LandingSectionProps{
    title: string,
    content: string,
    btnText:string
}

export interface LandingContentProps {
  landingMenu: Array<Array<string>>;
}