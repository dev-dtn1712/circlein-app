// @flow
import React, { Fragment } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Picker } from 'emoji-mart';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import 'emoji-mart/css/emoji-mart.css';

import { styles } from '../_styles/EmojiSelector';

type Props = {
  classes: Object,
  isFloatChat: boolean,
  onSelect: Function
};

type State = {
  // eslint-disable-next-line no-undef
  anchorEl: ?HTMLElement
};

class EmojiSelector extends React.PureComponent<Props, State> {
  state = {
    anchorEl: null
  };

  handleClick = (event) => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  handleSelect = (emoji) => {
    const { onSelect } = this.props;
    const { native } = emoji;
    onSelect(native);
    this.handleClose();
  };

  render() {
    const { classes, emoIconStyle, isFloatChat } = this.props;

    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <Fragment>
        <IconButton
          className={classes.button}
          aria-label="Select Emoji"
          onClick={this.handleClick}
          aria-owns={open ? 'simple-popper' : undefined}
          aria-haspopup="true"
        >
          <SentimentSatisfiedOutlinedIcon
            className={cx(emoIconStyle, isFloatChat && classes.floatChatEmoji)}
          />
        </IconButton>
        <Popover
          id="simple-popper"
          open={open}
          anchorEl={anchorEl}
          className={classes.poper}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <Picker onSelect={this.handleSelect} />
        </Popover>
      </Fragment>
    );
  }
}

export default withStyles(styles)(EmojiSelector);
