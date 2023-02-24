import { useEffect, useMemo, useState } from "react";
import { Col, Card, Button } from "react-bootstrap";

export function ContentContainer({ id, title, content, image, windowSize }) {
  const [openIndex, setOpenIndex] = useState(0);

  const handleClickExpand = (index) => {
    if (windowSize.width <= 575) {
      if (openIndex === index) {
        return setOpenIndex(null);
      }
      setOpenIndex(index);
    } else {
      return null;
    }
  };

  return (
    <>
      <Col xs={12} sm={6} md={4} lg={3}>
        {console.log("click", openIndex)}
        <Card className={`${openIndex === id ? "card-active" : ""}`}>
          <Card.Img
            variant="top"
            src={image}
            alt="content_image"
            className="card__image"
          />
          <Card.Body className="card__body">
            <Card.Text
              className="card__text"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </Card.Body>
          <Button
            className="card__button"
            variant="outline-dark"
            onClick={() => handleClickExpand(id)}
          >
            READ MORE
          </Button>
        </Card>
      </Col>
    </>
  );
}
