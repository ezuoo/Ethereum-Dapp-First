import React from 'react';
import { Container, Row, Col, Card, Button, Image, Form, InputGroup, FormControl} from 'react-bootstrap';

import coinG from '../images/coin-h.png'
import coinS from '../images/coin-h-i.png'
import unknown from '../images/coin-unknown.png'
import '../css/style.css';

function CoinFlip() {
    const [status, setStatus] = React.useState({
        web3: null,
        accounts: null,
        contract: null,
        houseBalance: 0,
        show: {flag: false, msg: ''},
        value: 0, //wager
        checked: 0, //coin
        reveal: 0,
        reward: 0,
        pending: false
    });

    const handleClickCoin = (e) => {
        let newStatus = status;
        console.log(newStatus)
        if(e.target.id === 'Heads') newStatus.checked = 2;
        else newStatus.checked = 1;

        // setStatus(newStatus);!!
        console.log(status.checked)
    }

    React.useEffect(() => {
        console.log('effect')
    }, [status])

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Card>
                        <Card.Header as="h3" style={{backgroundColor: '#a2b29f'}}>House : 0 ETH</Card.Header>
                        <Card.Body className="custom-align-center">
                            <Image src={coinG} id="Heads" onClick={(e) => handleClickCoin(e)} className="img-coin" />
                            <Image src={coinS} id="Tails" onClick={(e) => handleClickCoin(e)} className="img-coin" />
                        </Card.Body>
                    </Card>
                </Col>
                {' '}
                <Col>
                    <Card>
                        <Card.Header as="h3" style={{backgroundColor: '#a2b29f'}}>Coin Reveal</Card.Header>
                        <Card.Body className="custom-align-center">
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <Image src={unknown} className="img-coin" />
                                <Card.Text style={{fontSize: '2rem'}}>
                                    0 ETH
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <br />
            <div>{status.checked}</div>
            <Row>
                <Col>
                    <Card>
                        <Card.Header as="h3" style={{backgroundColor: '#a2b29f'}}>Your Bet</Card.Header>

                        <Card.Body className="custom-align-center">
                            <div>
                                <Form.Check inline label="Heads" type='radio' id='radio-Heads' checked={status.checked === 2} disabled />
                                <Form.Check inline label="Tails" type='radio' id='radio-Tails' checked={status.checked === 1} disabled />
                            </div>
                            <br />

                            <Row className="justify-content-md-center">
                                <Col md={5}>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>ETH</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl id="inlineFormInputGroup" placeholder="Your Bet" size='lg' />
                                    </InputGroup>
                                </Col>
                            </Row>

                            <br/>

                            <Button variant="outline-dark" size="lg">배팅</Button>{'  '}&nbsp;
                            <Button variant="outline-dark" size="lg">확인</Button>{'  '}&nbsp;
                            <Button variant="outline-dark" size="lg">취소</Button>{'  '}&nbsp;
                            <Button variant="outline-dark" size="lg">리셋</Button>{'  '}&nbsp;
                        </Card.Body>
                    </Card>
                </Col>
                {' '}
                <Col>
                    <Card>
                        <Card.Header as="h3" style={{backgroundColor: '#a2b29f'}}>Transactions - latest 5 transactions</Card.Header>
                        <Card.Body className="custom-align-center">
                            {/*<Card.Title>Special title treatment</Card.Title>*/}
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default CoinFlip;