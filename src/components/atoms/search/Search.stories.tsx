import Search from './Search'
import {SearchOutlined} from '@ant-design/icons'

export default {
  title: "Atoms/Search",
  component: Search,
  tags: ["autodocs"],
 
};

export const Default = {
  args: {
    placeholder: "Đăng nhập",
    prefix:<SearchOutlined />,
    size:'large',
    width: '20rem',
  },
};
