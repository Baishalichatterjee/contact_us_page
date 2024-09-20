import { MdOutlineMessage } from "react-icons/md";
import { MdWifiCalling2 } from "react-icons/md";
import React from 'react';
import styles from "./Button.module.css";

const Button = ({isOutline,icon,text,...rest}) => {
  return (
    <button {...rest} className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon} 
      {text}
    </button>
  )
}

export default Button;
