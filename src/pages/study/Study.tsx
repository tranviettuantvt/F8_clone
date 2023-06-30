import React, { memo } from "react";
import "./Study.scss";
import Courses from "../../components/courses/Courses";

const Study: React.FC = () => {
  return (
    <div id="study" style={{ margin: "95px 2rem 0 3.8rem" }}>
      <div className="study__intro">
        <h1>Khóa học</h1>
        <p>
        Các khóa học được thiết kế phù hợp cho cả người mới, nhiều khóa học miễn phí, chất lượng, nội dung dễ hiểu.
        </p>
      </div>
      <Courses />
      <div className="study__community">
        <div>
          <h1>Bạn đang tìm kiếm lộ trình học cho người mới?</h1>
          <p>
          Các khóa học được thiết kế phù hợp cho người mới, lộ trình học rõ ràng, nội dung dễ hiểu.
          </p>
          <button>
            <a href="">Xem lộ trình</a>
          </button>
        </div>
        <div>
          <img
            src="https://fullstack.edu.vn/static/media/fb-group-cards.4bd525b1b8baf7b1e5a2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default memo(Study);
