import axios from "axios"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            Email: data.Email,
            Message: data.Message,
        }
        try {
           await axios.post("https://getform.io/f/bejyzdea",userInfo);
           toast.success("Your message has been sent");
        } catch (error) {
            console.log(error);
            toast.error("Failed to send message");
            
        }
      }
  return (
    <>
    <div name="Contact" 
     className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
            <form 
              onSubmit={handleSubmit(onSubmit)}
           // action="https://getform.io/f/bejyzdea"
          //  method="POST"
             className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
             >
                <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
                <div className="flex flex-col mb-4">
                <label className="block text-gray-700">FullName</label>
                <input 
                {...register("name", { required: true })}
                 className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                 id="name"
                 name="name"
                 type="text"
                 placeholder="Enter your Full Name.."
                
                />
                 {errors.name && <span>This field is required</span>}
                </div>
                <div className="flex flex-col mb-4">
              <label className="block text-gray-700">E-mail Address</label>
              <input
                {...register("Email", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Email"
                name="Email"
                type="text"
                placeholder="Enter your Email Address.."
              />
               {errors.Email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea 
                {...register("Message", { required: true })}
                 className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                 id="name"
                 name="Message"
                 type="text"
                 placeholder="Enter your Message.."
                
                />
                 {errors.Message && <span>This field is required</span>}
                </div>
                <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
           
           

            </form>
        </div>

    </div>
    </>
  );
}

export default Contact