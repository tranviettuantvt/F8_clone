import React, { memo } from "react";
import "./LandingSpecific.scss";
import '../../../constant/styles.scss'

const LandingSpecific: React.FC = () => {
  return (
    <div id="landingSpecific">
      <h1>Thông số kỹ thuật</h1>
      <p>
        Đáp ứng các chỉ tiêu về mặt kỹ thuật, giúp người học có trải nghiệm tốt
        nhất.
      </p>
      <table>
        <tbody>
          <tr>
            <td width="340">
              <b>Âm thanh / giọng nói</b>
            </td>
            <td>Giọng Bắc, rõ ràng, tốc độ vừa phải</td>
          </tr>
          <tr>
            <td>
              <b>Chất lượng bài học video</b>
            </td>
            <td>60 FPS / 480p, 720p, 1080p, 1440p</td>
          </tr>
          <tr>
            <td>
              <b>Trải nghiệm trên di động</b>
            </td>
            <td>Tương thích hoàn toàn</td>
          </tr>
          <tr>
            <td>
              <b>Mạng phân phối nội dung</b>
            </td>
            <td>Tốc độ cao, trong nước và quốc tế</td>
          </tr>
          <tr>
            <td>
              <b>Hỗ trợ giao diện sáng / tối</b>
            </td>
            <td>Có</td>
          </tr>
          <tr>
            <td>
              <b>Giải thích thuật ngữ ngành</b>
            </td>
            <td>Có</td>
          </tr>
          <tr>
            <td>
              <b>Hỗ trợ sử dụng phím tắt</b>
            </td>
            <td>Có</td>
          </tr>
          <tr>
            <td>
              <b>Các loại nội dung học</b>
            </td>
            <td>Bài học video, kiểm tra, thử thách, flashcards, games, v.v</td>
          </tr>
          <tr>
            <td>
              <b>Nhiều tính năng khác</b>
            </td>
            <td>
              <a
                className="hightlight"
                href="https://htmlcss.fullstack.edu.vn/"
              >
                Trải nghiệm miễn phí
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default memo(LandingSpecific);
