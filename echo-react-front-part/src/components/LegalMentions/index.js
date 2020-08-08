import React from 'react';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider'

import styles from './legalMStyle.js';

const useStyles = styles;

const LegalMentions = () => {

    const classes = useStyles();

    return <Container className={classes.container} maxWidth='md'>
        <Typography variant='h5' className={classes.title}>Nos mentions légales</Typography>
        <Typography variant='h6' className={classes.resume}>En fait on aurait bien aimé refaire les mêmes mentions légales qu' O'Clock mais ça sentirait un peu le réchauffé...</Typography>
        <Divider className={classes.divider}></Divider>
        <Typography  className={classes.paragraph} variant='subtitle1'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur ornare tellus. Morbi posuere ipsum eu iaculis laoreet. Pellentesque rhoncus nisi eu turpis auctor accumsan. Aliquam erat volutpat. Mauris ut lobortis odio, ut commodo nunc. Morbi ut arcu ut elit mollis tincidunt. Proin in arcu ligula. Proin eu diam ut dui sollicitudin aliquam vitae non turpis. Ut sodales tellus sit amet odio vestibulum porta. In fermentum euismod justo, non consectetur ante congue a. Quisque viverra justo venenatis faucibus sagittis. Phasellus arcu augue, tempus ut sem et, congue tincidunt nibh. Proin sed nunc erat. Nulla facilisi. Aenean eget cursus dolor. Nulla est urna, gravida eu pretium quis, consequat iaculis erat.</Typography>

        <Typography  className={classes.paragraph} variant='subtitle1'>Aenean ullamcorper ac elit sed ultrices. Curabitur cursus tortor aliquet eros fermentum pulvinar. Curabitur venenatis luctus tellus quis tempor. Donec iaculis dolor at ornare euismod. Nam laoreet suscipit mi ut mattis. Vestibulum quam metus, facilisis et scelerisque vitae, eleifend et orci. Phasellus tempor et urna nec pretium. Donec egestas mi ut lobortis efficitur. Morbi a ultrices mi. Etiam facilisis mauris sed dolor bibendum, ultricies rutrum risus rutrum. Sed id nisi in metus molestie porttitor. Donec nec ipsum purus. Donec sed elit mi. Mauris congue convallis ligula eget facilisis. Nullam ac arcu ac libero ultricies accumsan. </Typography>
       
        <Divider className={classes.divider}></Divider>
        <Typography variant='h6' className={classes.resume} >Bref, si vous cherchez notre directeur de la publication, adressez-vous à Valère Leroy </Typography>
        <Divider className={classes.divider}></Divider>
        <Typography variant='h6' className={classes.subtitle}> Adresse email du site </Typography>
        <Typography> echo.team@outlook.fr </Typography>
        <Typography variant='h6' className={classes.subtitle}> Editeur</Typography>
        <Typography className={classes.paragraph} variant='subtitle1'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur ornare tellus. Morbi posuere ipsum eu iaculis laoreet. Pellentesque rhoncus nisi eu turpis auctor accumsan. Aliquam erat volutpat. Mauris ut lobortis odio, ut commodo nunc. Morbi ut arcu ut elit mollis tincidunt. Proin in arcu ligula. </Typography>
        <Typography variant='h6' className={classes.subtitle}> Hébergeur</Typography>
        <Typography className={classes.paragraph} variant='subtitle1'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur ornare tellus. Morbi posuere ipsum eu iaculis laoreet. Pellentesque rhoncus nisi eu turpis auctor accumsan. Aliquam erat volutpat. Mauris ut lobortis odio, ut commodo. </Typography>
        <Typography variant='h6' className={classes.subtitle}> Cookies </Typography>
        <Typography className={classes.paragraph} variant='subtitle1'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur ornare tellus. Morbi posuere ipsum eu iaculis laoreet. Pellentesque rhoncus nisi eu turpis auctor accumsan. Aliquam erat volutpat. Mauris ut lobortis odio, ut commodo nunc. </Typography>
        <Typography variant='h6' className={classes.subtitle}> CNIL </Typography>
        <Typography className={classes.paragraph} variant='subtitle1'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur ornare tellus. Morbi posuere ipsum eu iaculis laoreet. Pellentesque rhoncus nisi eu turpis auctor accumsan. Aliquam erat volutpat. Mauris ut lobortis odio, ut commodo nunc. Morbi ut arcu ut elit mollis tincidunt. Proin in arcu ligula. Proin eu diam ut dui sollicitudin aliquam vitae non turpis. Ut sodales tellus sit amet odio vestibulum porta. In fermentum euismod justo.</Typography>

  </Container>;
  }
  
  /**
   * Export
   */
  export default LegalMentions;
