import React from "react";
import {
  SiLeetcode,
  SiGeeksforgeeks
} from "react-icons/si";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

export default function Ranking() {
  return (
    <div className="mt-4">
      <Zoom left cascade>
        <h1>See my rank</h1>
      </Zoom>
      <Container className="mt-5">
        <Row className="g-5">
          <Col md={3}>
            <a
              href="https://auth.geeksforgeeks.org/user/ajeeva"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <SiGeeksforgeeks />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://leetcode.com/akashramjeeva/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <SiLeetcode />
              </Zoom>
            </a>
          </Col>{" "}
        </Row>
      </Container>
    </div>
  );
}
