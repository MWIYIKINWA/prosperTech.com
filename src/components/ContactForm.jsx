
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { emailJsDetails } from '../constants';
import Swal from 'sweetalert2';



const ContactForm = () => {

   const form = useRef();

  //.........................VALIDATE FORM......................

  const validateForm = () => {

  const formData = form.current;
  if (!formData) return false;

  const fields = ["fname", "lname", "email", "phone", "location", "message"];
  const errors = [];

       const fieldLabels = {
            fname: "First Name",
            lname: "Last Name",
            email: "Email",
            phone: "Phone Number",
            location: "Location",
            message: "Message",
          };

          fields.forEach((name) => {
            const value = formData[name]?.value.trim();
            if (!value) errors.push(`${fieldLabels[name]} is required`);
          });



  const emailValue = formData["email"]?.value.trim();
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (emailValue && !emailRegex.test(emailValue)) {
    errors.push("Email is not valid");
  }

  const phoneValue = formData["phone"]?.value.trim();
  const phoneRegex = /^\d{10,15}$/;
  if (phoneValue && !phoneRegex.test(phoneValue)) {
    errors.push("Phone number must be 10–15 digits");
  }

  if (errors.length > 0) {
            Swal.fire({
                title: "Error",
                text: errors.join("\n"),
                icon: "error",
                confirmButtonColor: "#ea580c"
            });
    return false;
  }

  return true;
};


  // ......................................SEND EMAIL.......

  const sendEmail = (e) => {
    e.preventDefault();

  if (!validateForm()) return;

    emailjs
      .sendForm(emailJsDetails.service_id, emailJsDetails.template_id, form.current, {
        publicKey: emailJsDetails.public_key,
      })
      .then(
        () => {
          console.log('SUCCESS!');
      
            Swal.fire({
              title: "Message received!",
              text: "Thank you for contacting us!",
              icon: "success",
              confirmButtonColor: "#ea580c"
            });
            e.target.reset()

        },
        (error) => {
          console.log('FAILED...', error.text);
            Swal.fire({
              text: "Something went wrong, Please try again!",
              icon: "error",
              confirmButtonColor: "#ea580c"
            });
        

        },
      );
  };

// ......................................................................

  return (
    
    <>
        <>
  <div className="flex flex-col items-center justify-center border-b border-neutral-500 min-h-[650px]">
    
    <h2 className="text-center text-3xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text mb-8">
      Fill the form below to send us a Message
    </h2>

    <form className="w-full max-w-xl" ref={form} onSubmit={sendEmail}>

      <div className="flex flex-col gap-6 mx-10">

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="fname"
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md"
            placeholder="First Name"
            
          />
          <input
            type="text"
            name="lname"
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Last Name"
            
          />

        </div>

        <div className="flex flex-col sm:flex-row gap-4">

          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Email"
            
          />

        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="phone"
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Phone Number"
          />
          <input
            type="text"
            name="location"
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Location"
            
          />

        </div>

          <div className="flex flex-col sm:flex-row gap-4">

          <textarea
            type="text" 
            name="message"
            rows={10}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Message"
            
          ></textarea>

        </div>

          <div className="flex justify-center flex-col sm:flex-row gap-4">

             <input className=" rounded border border-neutral-200 py-4 px-4 my-8 hover:border-orange-900 transition duration-200" type="submit" value="SEND YOUR REQUEST NOW"/>

        </div>


      </div>
    </form>
  </div>
</>


    </>
  )
}

export default ContactForm