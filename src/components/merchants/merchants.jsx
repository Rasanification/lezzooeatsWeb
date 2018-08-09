import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Container, Header, Card, Icon, Image, Grid, Segment, Responsive } from 'semantic-ui-react';
const src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg';
class merchants extends Component {
    render() {
        return (
        <Card.Group itemsPerRow={4} stackable devided>
            <Card color='red' image={src} />
            <Card color='orange' image={src} />
            <Card color='yellow' image={src} />
            <Card color='olive' image={src} />
            <Card color='green' image={src} />
            <Card color='teal' image={src} />
            <Card color='blue' image={src} />
            <Card color='violet' image={src} />
            <Card color='purple' image={src} />
            <Card color='pink' image={src} />
            <Card color='brown' image={src} />
            <Card color='grey' image={src} />
        </Card.Group>
        );
    }
}

export default merchants;
