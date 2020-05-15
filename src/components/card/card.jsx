import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './card.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards=({data:{confirmed,recovered,deaths,lastUpdate}})=>{
    if(!confirmed)
    return "loding...";
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justufy="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.Infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography varaint="h5">
                            <CountUp start={0} end={confirmed.value} ></CountUp>
                        </Typography>
                   <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                  <Typography varaint="body2">Total number Of  Cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography varaint="h5"> <CountUp start={0} end={recovered.value} ></CountUp></Typography>
                   <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                  <Typography varaint="body2">Number Of Recoveries By COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography varaint="h5"> <CountUp start={0} end={deaths.value} ></CountUp></Typography>
                   <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                  <Typography varaint="body2">Number Deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.active)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography varaint="h5"> <CountUp start={0} end={confirmed.value-(recovered.value+deaths.value)} ></CountUp></Typography>
                   <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                  <Typography varaint="body2">Active cases</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>

      
        
    )
}
export default Cards;