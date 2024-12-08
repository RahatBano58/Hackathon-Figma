import React from 'react'
import { Truck, HandCoins,  Ribbon, Phone } from "lucide-react"

const Card = () => {
    return (
        <div>
            <div className="w-full sm:h-full md:h-[300px] h-[300px] flex justify-center items-center mt-10 mb-30px">
                <div className="w-[80%] h-full mb-12 ">
                   
                  
 
                    {/* products */}
                    {/* container boxes */}
                    <div className="flex sm:ml-20 sm:items-center  gap-6 sm:flex-col md:flex-row justify-between mt-7 mb-20">

                        {/*  */}
                        <div>
                            <div className="w-[170px] h-[145px] bg-gray-200 flex justify-center items-center">
                                <Truck className="w-[56px] h-[56px]" />
                            </div>


                        </div>
                        {/*  stop */}

                        {/* start */}

                        <div>
                            <div className="w-[170px] h-[145px] bg-gray-200 flex justify-center items-center">
                                <HandCoins className="w-[56px] h-[56px]" />
                            </div>


                        </div>

                        <div>
                            <div className="w-[170px] h-[145px] bg-gray-200 flex justify-center items-center">
                                <Ribbon className="w-[56px] h-[56px]" />
                            </div>

                        </div>

                        <div>
                            <div className="w-[170px] h-[145px] bg-gray-200 flex justify-center items-center ">
                                <Phone className="w-[56px] h-[56px]" />
                                
                            </div>
                            {/* Paragraph */}

                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card