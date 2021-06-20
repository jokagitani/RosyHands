import React from 'react';
import { Grid, Image } from 'semantic-ui-react'
import instagram from './../images/instagram.svg'
import paynow from './../images/paynow-logo.svg'
const Footer = props => {
    return(
        <footer class="footer">
        <Grid>
            <Grid.Column width={3} className="central">
            <p>Refund</p>
            <p>Return</p>
            </Grid.Column>
            <Grid.Column width={10} className="central">
            <p>Always stay updated on our Instagram for our latest drops! <a href="https://www.instagram.com/rosy.hands/"> <Image src={instagram} className='inline'/></a> </p>
            <p className="small">Copyright © 2021 RosyHands </p>
            </Grid.Column>
            <Grid.Column width={3} className="central">
            <p>Payment <Image src={paynow} className="inline"/> </p>

            </Grid.Column>
            
        </Grid>
        </footer>
    )
}

export default Footer;
