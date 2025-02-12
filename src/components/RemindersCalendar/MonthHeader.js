/* eslint-disable jsx-a11y/anchor-is-valid */
// @flow

import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { styles } from '../_styles/RemindersCalendar/MonthHeader';

type Props = {
  classes: Object,
  label: string
};

type State = {};

class MonthHeader extends React.PureComponent<Props, State> {
  render() {
    const { classes, label } = this.props;

    return (
      <main className={classes.main}>
        <Typography variant="h6">{label}</Typography>
      </main>
    );
  }
}

export default withStyles(styles)(MonthHeader);
