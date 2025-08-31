import "./ReviewSlider.css";
import Slider from "react-slick";

export default function Reviews({ reviews }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };
  return (
    <div className="slider-container-review">
      <Slider {...settings}>
        {
          reviews.map((elm) => {
            return <div className="slider-each-review">
              <div className="name-date">
                <span className="name">{elm.name}</span>
                .
                <span className="date">{elm.date}</span>
              </div>
              <div className="stars">{elm.rate} stars</div>
              <div className="title">{elm.title}</div>
              <div className="description">{elm.review}</div>
              <div className="interactions">Was this helpful?</div>
            </div>
          })
        }
      </Slider>
    </div>
  );
}

