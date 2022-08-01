/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
import JavaScriptTwo from "views/IndexSections/JavaScriptTwo";
// reactstrap components
import {
    Button,
    FormGroup,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    UncontrolledPopover,
    PopoverBody,
    PopoverHeader,
    Modal,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Label,
    UncontrolledCarousel,
} from "reactstrap";

const carouselItems = [
    {
        src: require("assets/img/denys.jpg").default,
        altText: "Slide 1",
        caption: "",
    },
    {
        src: require("assets/img/fabien-bazanegue.jpg").default,
        altText: "Slide 2",
        caption: "",
    },
    {
        src: require("assets/img/mark-finn.jpg").default,
        altText: "Slide 3",
        caption: "",
    },
];

export default function JavaScript() {
    const [demoModal, setDemoModal] = React.useState(false);
    const [miniModal, setMiniModal] = React.useState(false);
    const [formModal, setFormModal] = React.useState(false);
    const [emailFocus, setEmailFocus] = React.useState(false);
    const [passwordFocus, setPasswordFocus] = React.useState(false);
    return (
        <div className="section section-javascript" id="javascriptComponents">
            <img
                alt="..."
                className="path"
                src={require("assets/img/path5.png").default}
            />
            <img
                alt="..."
                className="path path1"
                src={require("assets/img/path5.png").default}
            />



            <div className="section">
                <Container>
                    <div className="title">
                        <h3>Carousel</h3>
                    </div>
                    <Row className="justify-content-between align-items-center">
                        <Col className="mb-5 mb-lg-0" lg="5">
                            <h1 className="text-white font-weight-light">
                                Bootstrap carousel
                            </h1>
                            <p className="text-white mt-4">
                                Black Design comes with three pre-built pages to help you get
                                started faster. You can change the text and images and you're
                                good to go.
                            </p>
                            <Button
                                className="mt-4"
                                color="warning"
                                href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/alert"
                            >
                                See all components
                            </Button>
                        </Col>
                        <Col lg="6">
                            <UncontrolledCarousel
                                items={carouselItems}
                                indicators={false}
                                autoPlay={false}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
