import React, { memo } from "react";
import "./RoadMap.scss";

const RoadMap: React.FC = () => {
  return (
    <div id="roadmap" style={{ margin: "95px 2rem 0 3.8rem" }}>
      <div className="roadmap__intro">
        <h1>Lộ trình học</h1>
        <p>
          Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học.
          Ví dụ: Để đi làm với vị trí "Lập trình viên Front-end" bạn nên tập
          trung vào lộ trình "Front-end".
        </p>
      </div>
      <div className="roadmap__content">
        <div className="roadmap__content__card">
          <div>
            <h2>Lộ trình học Front-end</h2>
            <p>
              Lập trình viên Front-end là người xây dựng ra giao diện websites.
              Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập
              trình viên Front-end nhé.
            </p>
            <button>
              <a href="">Xem chi tiết</a>
            </button>
          </div>
          <div>
            <a href="">
              <img
                src="https://files.fullstack.edu.vn/f8-prod/learning-paths/2/63b4642136f3e.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="roadmap__content__card">
          <div>
            <h2>Lộ trình học Front-end</h2>
            <p>
              Lập trình viên Front-end là người xây dựng ra giao diện websites.
              Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập
              trình viên Front-end nhé.
            </p>
            <button>
              <a href="">Xem chi tiết</a>
            </button>
          </div>
          <div>
            <a href="">
              <img
                src="https://files.fullstack.edu.vn/f8-prod/learning-paths/3/63b4641535b16.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div className="roadmap__community">
        <div>
          <h1>Tham gia cộng đồng học viên F8 trên Facebook</h1>
          <p>
            Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham gia
            hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học nhé.
          </p>
          <button>
            <a href="">Tham gia nhóm</a>
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

export default memo(RoadMap);
