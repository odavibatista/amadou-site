'use client'
import "bootstrap/dist/js/bootstrap.min.js";

export default function Carousel() {
    return(
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://4fund.com/uploads/chipin/6xkxxv/cover/orginal/f5e2e418491c0ece76b48fb0ec195b5a.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://4fund.com/uploads/chipin/6xkxxv/cover/orginal/e648b9e8e1f18f7040163ed808347f5b.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://4fund.com/uploads/chipin/6xkxxv/cover/orginal/123c84f070c8d0147eede79b620c5e43.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}