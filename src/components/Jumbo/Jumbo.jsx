import React from "react";
import Button from "react-bootstrap/Button";
import dumdata from "./../../data/dam_data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import PropTypes from "prop-types";
import "./Jumbo.scss";
import EventSlider from "./../EventSlider";


const Jumbo = () => (
  <div className="jumbo-wrapper">
    <Container>
      <Row md={4}>
        <Col md={6} className="left-col">
          {" "}
          <div>
            <h1 className="jumbo-header">{dumdata.jumbo.title}</h1>
            <p className="text-justify">{dumdata.jumbo.text}</p>
            <p className="d-flex justify-content-around">
              {dumdata.jumbo.buttons.map((i) => (
                <Button key={i.id} variant="outline-dark" className="justify-content-around">
                  {i.label}
                </Button>
              ))}
            </p>
          </div>
        </Col>

        <Col md={6}>
          <EventSlider />
        </Col>
      </Row>
    </Container>
  </div>
);

Jumbo.propTypes = {
  // bla: PropTypes.string,
};

Jumbo.defaultProps = {
  // bla: 'test',
};

export default Jumbo;
