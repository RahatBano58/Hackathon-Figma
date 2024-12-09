import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js

const Contact = () => {
  const contactData = [
    {
      title: "Tel: 877-67-88-99",
      des: "E-Mail: shop@store.com",
      pic: "/images/contact2.png",
    },
    {
      title: "Support Forum",
      des: "For over 24hr",
      pic: "/images/contact3.png",
    },
    {
      title: "20 Margaret st, London",
      des: "Great Britain, 3NM98-LK",
      pic: "/images/contact4.png",
    },
    {
      title: "Free standard shipping",
      des: "on all orders.",
      pic: "/images/contact5.png",
    },
  ];

  return (
    <div>
      <div className='bg-shade2'>
        <div className="md:container md:px-[1.3rem] px-[.8rem] pt-[98px]">
          <h2 className='text-navy'>Contact Us</h2>
          <div className='flex gap-2 '>
            <h4>Home</h4>
            <h4>. Pages</h4>
            <h4 className='text-pink pb-[114px]'> . Contact us</h4>
          </div>
        </div>
      </div>

      <div>
        <div className=' md:container md:px-[1.3rem] px-[.8rem] md:grid grid-cols-2 md:gap-28 md:mt-32 mt-12 md:mb-20 '>
          <div>
            <h2 className='text-navy md:mb-6 font-josefin font-bold'>Information About Us</h2>
            <p className='text-tertiary'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
            </p>
            <div className="flex h-3 w-[80px] gap-2 md:mt-8 mt-4">
              <div className="h-5 w-5 rounded-full bg-blue"></div>
              <div className="h-5 w-5 rounded-full bg-pink"></div>
              <div className="h-5 w-5 rounded-full bg-dark_cyan"></div>
            </div>
          </div>

          <div>
            <h2 className='text-navy md:mb-6 font-josefin mt-8'>Contact Us</h2>
            <div className='md:grid grid-cols-2 gap-12'>
              {contactData.map((item, index) => (
                <div key={index} className='flex items-center gap-4 mb-8'>
                  <div className=''>
                    <Image src={item.pic} alt={item.title} width={50} height={50} />
                  </div>
                  <div>
                    <h4 className='text-lato text-tertiary'>{item.title}</h4>
                    <h4 className='text-lato text-tertiary'>{item.des}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='md:container md:px-[1.3rem] px-[.8rem]'>
          <div className='md:grid grid-cols-2 md:gap-6 md:mb-28'>
            <div>
              <h2 className='text-navy'>Get In Touch</h2>
              <p className='text-extralight'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor lobortis quis bibendum quam.
              </p>
              <div className='mt-4'>
                <div className='flex justify-between'>
                  <input className='border-gray-300 h-[50px] rounded-md w-[45%] my-6' placeholder='Your Name' type="text" />
                  <input className='border-gray-300 h-[50px] w-[45%] rounded-md my-6' placeholder='Your E-mail' type="text" />
                </div>
                <input className='border-gray-300 h-[50px] rounded-md w-full md:my-6 mb-6' placeholder='Subject*' type="text" />
                <textarea className='w-full border-gray-300 h-[197px] rounded-md md:my-6 mb-6' placeholder='Type Your Message*'></textarea>
                <button className='md:my-6'>Send Mail</button>
              </div>
            </div>

            <div className='md:mt-0 mt-12 mb-12 md:mb-0'>
              <Image src="/images/contact1.png" alt="Contact Illustration" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
