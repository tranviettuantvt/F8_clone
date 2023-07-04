import Buttonn from "./Buttonn";

export default {
  title: "Atoms/Button",
  component: Buttonn,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Search = {
  args: {
    backgroundColor:"#f05123",
    children: "Đăng nhập",
    size: "middle",
    shape:'round',
    type:'primary'
  },
};
