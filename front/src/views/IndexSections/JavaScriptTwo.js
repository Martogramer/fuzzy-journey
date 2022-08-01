import React from "react";
import classnames from "classnames";
import {
    Button,
    FormGroup,
    Container,
    Row,
    Col,
    Modal,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Label,
} from "reactstrap";


export default function JavaScript() {
    const [formModal, setFormModal] = React.useState(false);
    const [emailFocus, setEmailFocus] = React.useState(false);
    const [passwordFocus, setPasswordFocus] = React.useState(false);
    return (

        <Container>
            <Button color="success" onClick={() => setFormModal(true)}>
                Adelante
            </Button>
            <Modal
                modalClassName="modal-black"
                isOpen={formModal}
                toggle={() => setFormModal(false)}
            >
                <div className="modal-header justify-content-center">
                    <button className="close" onClick={() => setFormModal(false)}>
                        <i className="tim-icons icon-simple-remove text-white" />
                    </button>
                    <div className="text-muted text-center ml-auto mr-auto">
                        <h3 className="mb-0">Sign in with</h3>
                    </div>
                </div>
                <div className="modal-body">
                    <div className="btn-wrapper text-center">
                        <Button
                            className="btn-neutral btn-icon"
                            color="default"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                            <img
                                alt="..."
                                src={require("assets/img/github.svg").default}
                            />
                        </Button>
                        <Button
                            className="btn-neutral btn-icon"
                            color="default"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                            <img
                                alt="..."
                                src={require("assets/img/google.svg").default}
                            />
                        </Button>
                    </div>
                    <div className="text-center text-muted mb-4 mt-3">
                        <small>Or sign in with credentials</small>
                    </div>
                    <Form role="form">
                        <FormGroup className="mb-3">
                            <InputGroup
                                className={classnames("input-group-alternative", {
                                    "input-group-focus": emailFocus,
                                })}
                            >
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="tim-icons icon-email-85" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    placeholder="Email"
                                    type="email"
                                    onFocus={(e) => setEmailFocus(true)}
                                    onBlur={(e) => setEmailFocus(false)}
                                />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup
                                className={classnames("input-group-alternative", {
                                    "input-group-focus": passwordFocus,
                                })}
                            >
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="tim-icons icon-key-25" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    placeholder="Password"
                                    type="password"
                                    onFocus={(e) => setPasswordFocus(true)}
                                    onBlur={(e) => setPasswordFocus(false)}
                                />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup check className="mt-3">
                            <Label check>
                                <Input defaultChecked type="checkbox" />
                                <span className="form-check-sign" />
                                Remember me!
                            </Label>
                        </FormGroup>
                        <div className="text-center">
                            <Button href="/user" className="my-4" color="primary" type="button">
                                Sign in
                            </Button>
                        </div>
                    </Form>
                </div>
            </Modal>
        </Container>

    );
}
