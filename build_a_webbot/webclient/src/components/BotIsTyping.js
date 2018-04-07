import React from "react";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    padding: "0 8px 0 8px",
    alignSelf: "flex-start",
    userSelect: "none"
  },
  textBlink: {
    animation: "blinker 2s linear infinite"
  },
  "@keyframes blinker": {
    "50%": {
      opacity: "0.2"
    }
  }
});

function BotIsTyping(props) {
  const { classes, show } = props;

  if (show)
    return (
      <Typography variant="body1" className={classes.root}>
        <span className={classes.textBlink}>Bot is thinking ...</span>
      </Typography>
    );
  else return null;
}

BotIsTyping.propTypes = {
  classes: PropTypes.object,
  show: PropTypes.bool
};

BotIsTyping.defaultProps = {
  show: false
};

export default withStyles(styles)(BotIsTyping);
