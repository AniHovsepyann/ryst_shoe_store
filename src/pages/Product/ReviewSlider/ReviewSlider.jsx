import "./ReviewSlider.css";
import Slider from "react-slick";

export default function Reviews({ reviews }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2,
    slidesPerRow: 1
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
              {/* <div className="stars">{Array(+elm.rate).fill().map((_) => (<i className="bi bi-star-fill"></i>))} {Array(5 - elm.rate).fill().map((_) => (<i class="bi bi-star"></i>))}</div> */}
              <div className="stars">
                {[...Array(5)].map((_, i) =>
                  i < elm.rate ? (
                    <i key={i} className="bi bi-star-fill fs-3"></i>
                  ) : (
                    <i key={i} className="bi bi-star fs-3"></i>
                  )
                )}
              </div>

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

