import React from "react";
import { useScrollTrigger } from '@mui/material';

const ScrollHandler = props => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "#2d334a" : "transparent",
      color: trigger ? "white" : "black",
      transition: trigger ? "0.3s" : "0.5s",
      boxShadow: "none",
      height: '4rem'
    }
  });
};

const ScrollToColor = props => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollToColor;