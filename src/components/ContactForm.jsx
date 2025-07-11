

const ContactForm = () => {
  return (
    
    <>
        <>
  <div className="flex flex-col items-center justify-center border-b border-neutral-500 min-h-[650px]">
    
    <h2 className="text-center text-3xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text mb-8">
      Fill the form below to send us a Message
    </h2>

    <form action="" className="w-full max-w-xl">

      <div className="flex flex-col gap-6 mx-10">

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md"
            placeholder="First Name"
          />
          <input
            type="text"
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Last Name"
          />

        </div>

        <div className="flex flex-col sm:flex-row gap-4">

          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Email"
          />

        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Phone Number"
          />
          <input
            type="text"
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Location"
          />

        </div>

          <div className="flex flex-col sm:flex-row gap-4">

          <textarea
            type="text" rows={10}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Message"
          ></textarea>

        </div>

          <div className="flex justify-center flex-col sm:flex-row gap-4">

             <a className=" rounded border border-neutral-200 py-4 px-4 my-8 hover:border-orange-900 transition duration-200" href="">SEND YOUR REQUEST NOW</a>

        </div>


      </div>
    </form>
  </div>
</>


    </>
  )
}

export default ContactForm