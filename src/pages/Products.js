import React from 'react';
import { Grid } from "semantic-ui-react";
import CardProduct from './../components/card';
import aurous from './../images/aurous.jpeg';
import iridescent from './../images/iridescent.jpeg';
import klisten from './../images'
const Homepage = props => {
    return(
    <Grid columns={3} >
        <Grid.Row className="page-title">
            <h1 class="extra-large">All Products</h1>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4}>
                <CardProduct title='AUROUS' url={aurous}/>
            </Grid.Column>
            <Grid.Column width={4}>
                <CardProduct title='IRIDESCENT' url={iridescent}/>
            </Grid.Column>
            <Grid.Column width={4}>
                <CardProduct title='KLISTEN' url='./../klisten.jpeg'/>
            </Grid.Column>
            <Grid.Column width={4}>
                <CardProduct title='KOBO' />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4}>
                <CardProduct title='MEROSY'/>
            </Grid.Column>
            <Grid.Column width={4}>
                <CardProduct title='SCARLET'/>
            </Grid.Column>
            <Grid.Column width={4}>
                <CardProduct title='LOVACINA'/>
            </Grid.Column>
            <Grid.Column width={4}>
                <CardProduct title='KOBO'/>
            </Grid.Column>
        </Grid.Row>
    </Grid>
    )
};

export default Homepage