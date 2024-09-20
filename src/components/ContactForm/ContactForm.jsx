import React from 'react';
import styles from "./Contact.module.css";
import { MdOutlineMessage } from "react-icons/md";
import { MdWifiCalling2 } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import Button from '../Button/Button';

const ContactForm = () => {
  const onSubmit=(event)=>{
    event.preventDefault();
   console.log(event);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        <Button  text="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize={"24px"}/>} />
        <Button  text="VIA CALL" icon={<MdWifiCalling2 fontSize="24px"/>} />
      </div>
      <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdEmail fontSize="24px"/>} />
      
      <form onSubmit={onSubmit}>
        <div className={styles.form_control}>
        <label htmlFor="name">Name</label>
        <input type="text" name='name'/>
        </div>
        <div className={styles.form_control}>
        <label htmlFor="email">Email</label>
        <input type="email" email='email'/>
        </div>
        <div className={styles.form_control}>
        <label htmlFor="text">Text</label>
       <textarea name="text" rows="8"/>
        </div>
        <div style={{display:'flex', justifyContent:'end'}}>
        <Button text="SUBMIT"/>
        </div>
      </form>
      </div>
      <div className={styles.contactImage}>
        <img src="./Service 24_7-pana 1.svg" alt="" />
      </div>
    </section>
  )
}

export default ContactForm;
