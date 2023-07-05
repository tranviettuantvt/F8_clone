import { Meta, Story } from '@storybook/react';
import Headerr from './Headerr';
import { BrowserRouter } from 'react-router-dom';
import { HeaderrProps } from '../../../constant/common';

const meta: Meta = {
  title: 'Organisms/Headerr',
  component: Headerr,
  tags: ['autodocs'],
};

export default meta;

const Template: Story<HeaderrProps> = (args) => (
  <BrowserRouter>
    <Headerr {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  logo: 'https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png',
  slogan: 'Học Lập Trình Để Đi Làm',
  inputText: 'Tìm kiếm khóa học, bài viết, video, ...',
  loginBtn: 'Đăng nhập',
};
