import Slider from "./Slider";
import './Slider.scss'
export default {
  title: "Organisms/Slider",
  component: Slider,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    SliderData: [
      {
        id: "1",
        title: "Học ReactJS Miễn Phí",
        des: "Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.",
        contact: "Đăng ký ngay",
        image:
          "https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png",
        color:
          "linear-gradient(to right, rgb(40, 119, 250), rgb(103, 23, 205))",
      },
      {
        id: "2",
        title: "Thành Quả của Học Viên",
        des: "Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.",
        contact: "Xem thành quả",
        image: "https://files.fullstack.edu.vn/f8-prod/banners/Banner_01_2.png",
        color: "linear-gradient(to right, rgb(118, 18, 255), rgb(5, 178, 255))",
      },
      {
        id: "3",
        title: "F8 trên Youtube",
        des: "F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.",
        contact: "Truy cập Facebook",
        image: "https://files.fullstack.edu.vn/f8-prod/banners/Banner_04_2.png",
        color: "linear-gradient(to right, rgb(254, 33, 94), rgb(255, 148, 2))",
      },
    ],
  },
};
