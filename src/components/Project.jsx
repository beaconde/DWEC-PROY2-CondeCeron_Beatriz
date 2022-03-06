import React from 'react'

const Project = (props) => {
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 px-10">
        <div className="bg-white border-2 border-zinc border-opacity-50 rounded-lg overflow-hidden mb-10">
           <img src={props.image}
                alt={props.title}
                className="w-full"
            />
            <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <h3>
                    <p className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block">
                        {props.title}
                    </p>
                </h3>
                <p className="text-base text-body-color leading-relaxed mb-7">
                    {props.description}
                </p>
                <div className='flex flex-row justify-center'> 
                    <a href={props.link} target="blank"
                       className="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium bg-button hover:border-primary hover:bg-violet hover:text-white transition"
                    >
                        Ver en Github
                    </a>
                    {
                        props.deployment !== '' && (        
                            <a href={props.deployment} target="blank"
                               className="inline-block py-2 px-7 text-body-color font-medium text-base mt-1 hover:text-hover transition"
                            >
                                Ver despliegue
                            </a> 
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project