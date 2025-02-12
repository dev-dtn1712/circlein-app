import React, { useEffect, useMemo, useState } from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import moment from 'moment';
import { useSelector } from 'react-redux';

import useStyles from './styles';
import CalendarToday from '../../components/CalendarToday';
import { fetchGreetings } from '../../api/home';

const HomeGreetings = () => {
  const classes = useStyles();
  const me = useSelector((state) => state.user.data);
  const [data, setData] = useState(null);
  // const greetingText = useMemo(() => {
  //   const hour = moment().hour();
  //
  //   if (hour >= 17) return '🦉 Good evening';
  //   if (hour >= 12) return '⏳️ Good afternoon';
  //
  //   return '☀️ Good morning';
  // }, []);

  useEffect(() => {
    fetchGreetings(moment().format('YYYY-MM-DDThh:mm:ss'))
      .then((rsp) => {
        setData(rsp.greetings);
      });
  }, []);

  const greetingData = useMemo(() => {
    if (!data) return <Box />;
    return (
      <Box mr={2}>
        <Typography variant="h6" className={classes.greetingTitle} paragraph>
          {data.title}
        </Typography>
        <Typography className={classes.quote} paragraph>
          {data.body}
        </Typography>
        {/*<Typography className={classes.name}>*/}
        {/*  - Anne Sweeney*/}
        {/*</Typography>*/}
      </Box>
    );
  }, [me, data, classes]);

  return (
    <Paper elevation={0} className={classes.root} square={false}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {greetingData}
        <CalendarToday />
      </Box>
    </Paper>
  );
};

export default HomeGreetings;
