import { Button, withStyles } from '@material-ui/core';
import { color } from './constant';

export const BlueButton = withStyles((theme) => ({
  root: {
    color: '#fff',
    backgroundColor: color.blue.main_color,
    '&:hover': {
      backgroundColor: color.blue.hover_color,
    },
    '&$disabled': {
      color: 'grey',
      backgroundColor: '#2e2e2e',
    },
  },
  disabled: {},
}))(Button);

export const RedButton = withStyles((theme) => ({
  root: {
    color: '#fff',
    backgroundColor: color.red.main_color,
    '&:hover': {
      backgroundColor: color.red.hover_color,
    },

    '&$disabled': {
      color: 'grey',
      backgroundColor: '#2e2e2e',
    },
  },
  disabled: {},
}))(Button);
