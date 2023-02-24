import { Row, Col, Container } from "react-bootstrap";
import WebBanner from "../assets/images/desktop_1920x650.png";

export function BannerContainer() {
  return (
    <>
      <div className="banner-container">
        <img
          src={WebBanner}
          alt="banner_image"
          className="banner-container__img"
        />
        <div className="banner-container__header">
          <h1>Hello Developer!</h1>
          <p>Lorem impsum dolor sir amet, consectetur adipiscing elit</p>
        </div>
      </div>
    </>
  );
}
