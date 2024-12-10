import React from 'react';
import { ChevronDown, List, LayoutGrid } from 'lucide-react';
import Image from 'next/image'; // Import Image component from Next.js

const shopGriddata = [
  {
      pic: '/images/grid9.png',
      title: 'Vel elit euismod',
      offerPrice: '$26.00',
      regularPrice: '$42.00'
  },
  {
      pic: '/images/grid10.png',
      title: 'Ultricies condimentum imperdiet',
      offerPrice: '$26.00 ',
      regularPrice: '$42.00'
  },
  {
      pic: '/images/grid11.png',
      title: 'Vitae suspendisse sed',
      offerPrice: '$26.00 ',
      regularPrice: '$42.00'
  },
  {
      pic: '/images/grid8.png',
      title: 'Sed at fermentum',
      offerPrice: '$26.00 ',
      regularPrice: '$42.00'
  },
  {
      pic: '/images/grid1.png',
      title: 'Fusce pellentesque at',
      offerPrice: '$26.00 ',
      regularPrice: '$42.00'
  },
  {
      pic: '/images/grid2.png',
      title: 'Vestibulum magna laoreet',
      offerPrice: '$26.00 ',
      regularPrice: '$42.00'
  },
  {
      pic: '/images/grid3.png',
      title: 'Sollicitudin amet orci',
      offerPrice: '$26.00 ',
      regularPrice: '$42.00'
  },
  {
      pic: '/images/grid4.png',
      title: 'Ultrices mauris sit',
      offerPrice: '$26.00 ',
      regularPrice: '$42.00'
  },
  {
      pic: '/images/grid5.png',
      title: 'Pellentesque condimentum ac',
      offerPrice: '$26.00 ',
      regularPrice: '$42.00'
  },
  {
      pic: '/images/grid6.png',
      title: 'Cras scelerisque velit',
      offerPrice: '$26.00 ',
      regularPrice: '$42.00'
  },
  {
      pic: '/images/grid7.png',
      title: 'Lectus vulputate faucibus',
      offerPrice: '$26.00 ',
      regularPrice: '$42.00'
  },
  {
      pic: '/images/grid8.png',
      title: 'Purus risus, ut',
      offerPrice: '$26.00 ',
      regularPrice: '$42.00'
  },
]

const ShopGrid = () => {
  return (
    <>
      <div className='bg-shade2'>
        <div className="md:container md:px-[1.3rem] px-[.8rem] pt-[98px]">
          <h2 className='text-navy'>Shop Grid Default</h2>
          <div className='flex gap-2 '>
            <h4>Home</h4>
            <h4>. Pages</h4>
            <h4 className='text-pink pb-[114px]'> . Shop Grid Default</h4>
          </div>
        </div>
      </div>

      <div className="md:container md:px-[1.3rem] px-[.8rem] md:pt-[98px] md:flex items-center justify-between">
        <div className='mt-12 md:mt-0'>
          <h2 className='text-navy text-[28px] lg:text-[30px] 2xl:text-[34px]'>
            Ecommerce Accessories & Fashion item
          </h2>
          <h4 className='text-extralight font-lato'>About 9,620 results (0.62 seconds)</h4>
        </div>

        <div className='hidden lg:block'>
          <div className='flex gap-9 '>
            <div className='flex gap-2'>
              <h3 className='text-navy font-normal'>Per Page: </h3>
              <h3 className='border rounded-sm border-primary py-4 px-8'></h3>
            </div>
            <div className='flex gap-2'>
              <h3 className='text-navy font-normal'>Sort By: </h3>
              <h4 className='text-extralight border rounded-sm border-primary py-1 px-3 font-lato flex items-center gap-1'>
                Best Match <span><ChevronDown /></span>
              </h4>
            </div>
            <div className='flex gap-8'>
              <div className='flex items-center gap-2'>
                <h3 className='text-navy font-normal'>View:</h3>
                <List className='text-navy' />
                <LayoutGrid className='text-navy' />
              </div>
              <div>
                <h3 className='border rounded-sm border-primary py-4 px-20'></h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='md:container md:px-[1.3rem] md:grid grid-cols-4'>
        {shopGriddata.map((item, index) => (
          <div key={index} className='flex justify-center my-12'>
            <div className=''>
              <div className='bg-hex flex justify-center md:h-[280px] md:w-[270px] p-12'>
                <Image src={item.pic} alt={item.title} width={200} height={200} />
              </div>
              <h3 className='text-navy font-josefin text-center'>{item.title}</h3>

              <div className='my-3 flex justify-center'>
                <div className="flex h-3 w-[80px] gap-2">
                  <div className="h-3 w-3 rounded-full bg-yellow"></div>
                  <div className="h-3 w-3 rounded-full bg-pink"></div>
                  <div className="h-3 w-3 rounded-full bg-blue"></div>
                </div>
              </div>

              <div className='flex justify-center gap-5'>
                <h4>{item.offerPrice}</h4>
                <h4 className='text-pink line-through'>{item.regularPrice}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='container px-[1.3rem] my-24 flex justify-center'>
        <Image src="/images/logo1.png" alt="Logo" width={200} height={100} />
      </div>
    </>
  );
}

export default ShopGrid;
