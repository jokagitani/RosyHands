import React from 'react';
import { Message,Grid,Image } from "semantic-ui-react";
import Rose from './../images/rose_hand.png'
const Homepage = props => {
    return(
    <Grid columns={3} >
        <Grid.Row className="page-title">
            <h1 class="extra-large">Our Story</h1>
            <h3>Lighting up the world with bits and pieces of little magic!</h3>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={6}>
                <h1>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </h1>
                <h1>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </h1>
            </Grid.Column>
            <Grid.Column width={10}>
                <Image src={Rose}/>
            </Grid.Column>
        </Grid.Row>
    </Grid>
    )
};

export default Homepage