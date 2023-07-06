import React, { memo } from "react";
import Buttonn from "../../atoms/button/Buttonn";
import { RightOutlined } from "@ant-design/icons";
import "./LandingHero.scss";
import '../../../constant/styles.scss'

const LandingHero: React.FC = () => {
  return (
    <div id="landingHero">
      <h1>
        Cách dễ nhất để học <strong className="hightlight">HTML CSS</strong> cho
        người mới bắt đầu!
      </h1>
      <p>
        Thực hành <strong className="hightlight">8 dự án</strong> trên Figma,
        <strong className="hightlight"> 300+ bài tập</strong> và thử thách, mua
        một lần học mãi mãi, được thiết kế và hướng dẫn bởi{" "}
        <strong className="hightlight">Sơn Đặng</strong> .
      </p>
      <div>
        <Buttonn size="large" className="landing_btn">
          Học thử miễn phí <RightOutlined />
        </Buttonn>
        <Buttonn size="large" className="landing_btn transparent">
          Mua khóa học <RightOutlined />
        </Buttonn>
      </div>
    </div>
  );
};

export default memo(LandingHero);
