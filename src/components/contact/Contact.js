import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b3lfl59', 'template_p2g2ekh', form.current, 'qGLJsSz1TrW-AhUNk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="flex gap-40 px-12">
       <div className="left">
        <hr className="border-2 border-secondary w-1/4 mb-4"/>
            <div className="flex gap-4">
                <span className="stroke-text text-5xl font-bold">READY TO</span>
                <span className="text-5xl font-bold">LEVEL UP</span>
            </div>
            <div className="flex gap-4">
                <span className="stroke-text text-5xl font-bold">YOUR BODY</span>
                <span className="text-5xl font-bold">WITH US?</span>
            </div>
       </div>
       <div className="rightflex justify-center items-end p-6">
            <form action="" ref={form} onSubmit={sendEmail} className="email_container border-4 border-secondary flex gap-4 p-3">
                <input type="email" name="user_email" placeholder='Enter email address' className="px-4 py-4 w-96 bg-mute rounded-md" />
                <button type="submit" value='send' className="p-2 bg-orange-400 rounded-md" >JOIN US</button>
            
            </form>
               
       </div>
    </div>
  )
}

export default Contact