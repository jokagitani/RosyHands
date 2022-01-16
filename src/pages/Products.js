import React from 'react';
import { Grid } from "semantic-ui-react";
import CardProduct from './../components/card';
import aurous from './../images/aurous.jpeg';
import iridescent from './../images/iridescent.jpeg';
import klisten from './../images/klisten.jpeg';
import kobo from './../images/kobo.jpeg';
import merosy from './../images/merosy.jpeg';
import scarlet from './../images/scarlet.jpeg';
import lovacina from './../images/lovacina.jpeg';
import adonis from './../images/adonis.jpeg';
import PopupModal from './../components/modal';
const Products = props => {
    const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    return(
    <Grid columns={3} >
        <Grid.Row className="page-title">
            <h1 class="extra-large">All Products</h1>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4}>
                <CardProduct title='AUROUS' url={aurous} love='(‘∀’●)♡' modal={<PopupModal title='AUROUS' url={aurous} description={description} />}/>
            </Grid.Column>
            <Grid.Column width={4}>
                <CardProduct title='IRIDESCENT' url={iridescent} love='(´∀｀)♡'/>
            </Grid.Column>
            <Grid.Column width={4}>
                <CardProduct title='KLISTEN' url={klisten} love='꒰˘̩̩̩⌣˘̩̩̩๑꒱♡'/>
            </Grid.Column>
            <Grid.Column width={4}>
                <CardProduct title='KOBO' url={kobo} love='❤⃛ヾ(๑❛ ▿ ◠๑ )'/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4}>
                <CardProduct title='MEROSY' url={merosy} love='ˉ̞̭(′͈∨‵͈♡)˄̻ ̊'/>
            </Grid.Column>
            <Grid.Column width={4}>
                <CardProduct title='SCARLET' url={scarlet} love='ʸ(ᴖ́◡ु⚈᷉)♡⃛'/>
            </Grid.Column>
            <Grid.Column width={4}>
                <CardProduct title='LOVACINA' url={lovacina} love='(°◡°♡).:｡'/>
            </Grid.Column>
            <Grid.Column width={4}>
                <CardProduct title='ADONIS' url={adonis} love='ʚ♡⃛ɞ(ू•ᴗ•ू❁)'/>
            </Grid.Column>
        </Grid.Row>
    </Grid>
    )
};

export default Products;