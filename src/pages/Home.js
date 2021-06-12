import React from 'react';
import { Message,Grid } from "semantic-ui-react";
import Rose from './../images/rose.png'
const Homepage = props => {
    return(
    <Grid columns={3} >
        <Grid.Row className="page-title">
            <h1 class="extra-large">Our Story</h1>
            <h3>Lighting up the world with bits and pieces of little magic!</h3>
        </Grid.Row>
    </Grid>
    )
};

export default Homepage