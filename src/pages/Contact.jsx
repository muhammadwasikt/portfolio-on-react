import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import Button from '../components/common/button';
import { useForm } from "react-hook-form";
import { addDoc, collection } from 'firebase/firestore'; // Ensure you're importing from firestore
import { toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';
import { db } from '../../firebase'; // Make sure your Firebase setup is correct

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const { name, email, message } = data;
    setLoading(true);

    try {
      const docRef = await addDoc(collection(db, "feedback"), {
        userName: name,
        userEmail: email,
        userMessage: message,
        time: new Date(),
      });
      toast.success("Thank you for your feedback!");
      console.log("Document written with ID: ", docRef.id);
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("There was an error submitting your feedback. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-blue-400 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-blue-400 mr-2' />
              <a href="mailto:wasikhatri11@gmail.com" className='hover:underline'>
                wasikhatri11@gmail.com
              </a>
            </div>
            <div className='mb-4'>
              <FaPhone className='inline-block text-blue-400 mr-2' />
              <span>+92 327 8455637</span>
            </div>
            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-blue-400 mr-2' />
              <span>Surjani Town Karachi Pakistan</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
              <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-blue-400 mb-4'>Feedback</h3>
              <div>
                <label className='block mb-2'>Your Name</label>
                <input className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-400' type='text' placeholder='Enter your name' {...register("name", { required: true })} />
                {errors.name && <span className='text-red-600 text-[12px]'>This field is required</span>}
              </div>
              <div>
                <label className='block mb-2'>Email</label>
                <input className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-400' type='email' placeholder='Enter your email' {...register("email", { required: true })} />
                {errors.email && <span className='text-red-600 text-[12px]'>This field is required</span>}
              </div>
              <div>
                <label className='block mb-2'>Message</label>
                <textarea className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-400' rows="5" placeholder='Enter your message' {...register("message", { required: true })} />
                {errors.message && <span className='text-red-600 text-[12px]'>This field is required</span>}
              </div>
              <Button title={loading ? 'Sending...' : 'Send'} disabled={loading} />
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
