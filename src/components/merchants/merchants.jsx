import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { merchantCard } from './merchantCard.jsx';
import { Container, Header, Card, Icon, Image, Grid, Segment, Responsive } from 'semantic-ui-react';
const src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg';
class merchants extends Component {
    render() {
        return (
        <Card.Group itemsPerRow={4} stackable devided>
            <merchantCard />
        </Card.Group>
        );
    }
}

export default merchants;
