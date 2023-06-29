import React, { memo, useRef } from "react";
import { Carousel } from "antd";
import { Col, Row } from "antd";
import SliderData from "../../data/slider.json";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import "./Slider.scss";

const Slider: React.FC = () => {
  const carouselRef = useRef<any>(null);

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  return (
    <div id="slider">
      <div className="slider__arrow-left" onClick={handlePrev}>
        <LeftOutlined />
      </div>
      <Carousel ref={carouselRef} autoplay>
        {SliderData.map((sli) => (
          <div key={sli.id}>
            <Row className="slider" style={{ background: sli.color }}>
              <Col span={12} className="slider__left">
                <h2>{sli.title}</h2>
                <p>{sli.des}</p>
                <div>
                  <a href="">{sli.contact}</a>
                </div>
              </Col>
              <Col span={12} className="slider__right">
                <a href="">
                  <img src={sli.image} alt="" />
                </a>
              </Col>
            </Row>
          </div>
        ))}
      </Carousel>
      <div className="slider__arrow-right" onClick={handleNext}>
        <RightOutlined />
      </div>
    </div>
  );
};

export default memo(Slider);