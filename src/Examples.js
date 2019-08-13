import React, { Component, useState } from 'react';
import logo from './logo.jpg';
import './App.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import "../node_modules/@fortawesome/fontawesome-free/js/all.js";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";


class Examples extends React.Component {
    render() {
        const [open, setOpen] = useState(false);

        return <>
            <Card>
                <Card.Header onClick={() => setOpen(!open)}>
                    <button class="btn btn-link" type="button">{this.props.Name}Senior Software Developer</button>
                </Card.Header>
                <Collapse in={open}>
                    <Card.Body>
                        <Card.Title>
                            <a href="https://www.paycor.com">Paycor</a>
                        </Card.Title>
                        <Card.Subtitle>Sept 2018 - Present</Card.Subtitle>
                        <Card.Text>
                            <ul>
                                <li>Worked with new team to rewrite legacy Powerbuilder/MSSQL application in .NET Core/AzureSQL.</li>
                                <li>Main application utilized primarily Azure based assets. Including Functions, Storage, SQL.</li>
                                <li>Extensive testing utilizing NUnit to ensure output of rewrite matched output of legacy app.</li>
                                <li>Worked with stakeholders with continual feedback to gather requirements and ensure quality and features.</li>
                                <li>UI in react with an API written in .NET Core hosted in Azure.</li>
                                <li>Interfaced with other legacy systems to ensure hooks which legacy app calls were present in new application.</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Collapse>
            </Card>

        </>
    }
}

export default Examples;