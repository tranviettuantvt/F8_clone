import React, { memo, useRef } from "react";
import { Carousel } from "antd";
import { Col, Row } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import "./Slider.scss";
import Buttonn from "../../atoms/button/Buttonn";

interface SliderItemProps {
  id: string;
  title: string;
  des: string;
  contact: string;
  image: string;
  color: string;
}

interface SliderProps {
  SliderData: SliderItemProps[];
}

const Slider: React.FC<SliderProps> = ({ SliderData }) => {
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
              <Col lg={12} md={20} xs={24} sm={24} className="slider__left">
                <h2>{sli.title}</h2>
                <p>{sli.des}</p>
                <div style={{ marginTop: "1rem" }}>
                  <a href="">
                    <Buttonn
                      backgroundColor="transparent"
                      className="slider__left__btn"
                    >
                      {sli.contact}
                    </Buttonn>
                  </a>
                </div>
              </Col>
              <Col lg={12} md={4} xs={0} sm={0} className="slider__right">
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
