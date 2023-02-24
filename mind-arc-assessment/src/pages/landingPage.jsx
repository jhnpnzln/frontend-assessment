import { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import { BannerContainer } from "../components/bannerContainer";
import { ContentContainer } from "../components/contentContainer";

export function LandingPage() {
  const [dataContent, setDataContent] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/data.json");
      const json = await response.json();
      setDataContent(json);
    };

    fetchData();

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
    {console.log('__', dataContent)}
      <BannerContainer />
      <Container>
        <Row>
          { dataContent?.map((item, id) => (
            <ContentContainer
              id={id}
              {...item}
              key={item.title}
              windowSize={windowSize}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}
