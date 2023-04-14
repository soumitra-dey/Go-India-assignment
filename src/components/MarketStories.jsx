




export default function MarketStories({flag}) {
    let data=[
        {
            image:"https://lp-cms-production.imgix.net/2021-05/GettyImages-599620861.jpg",
            text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, provident."
        },
        {
            image:"https://assets.bbhub.io/company/sites/51/2019/07/333161661_1-9.jpg",
            text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, provident."
        },
        {
            image:"https://lp-cms-production.imgix.net/2021-05/GettyImages-599620861.jpg",
            text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, provident."
        },
        {
            image:"https://assets.bbhub.io/company/sites/51/2019/07/333161661_1-9.jpg",
            text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, provident."
        },
        {
            image:"https://lp-cms-production.imgix.net/2021-05/GettyImages-599620861.jpg",
            text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, provident."
        },
        {
            image:"https://assets.bbhub.io/company/sites/51/2019/07/333161661_1-9.jpg",
            text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, provident."
        },
    ]


    return (
        <div w-full>
            <p className="text-red-600 font-medium py-2 text-lg hidden md:flex">MARKET STORIES</p>
            <div className={`mt-10 w-full ${flag==true?"grid-cols-1":"grid-cols-2"} hidden md:grid gap-6`}>
                {
                    flag==false?
                    data.map((el,i)=>(
                        <div key={i} className="w-64 rounded-md relative">
                            <img src={el.image} className=" rounded-md" alt="" />
                            <p className="absolute z-10 bottom-0 text-center text-sm text-gray-200 font-bold bg-tr-gray rounded-md">{el.text}</p>
                        </div>
                    ))
                    :
                    data.map((el,i)=>(
                        i<3?
                        <div key={i} className="w-64 rounded-md relative">
                            <img src={el.image} className=" rounded-md" alt="" />
                            <p className="absolute z-10 bottom-0 text-center text-sm text-gray-200 font-bold bg-tr-gray rounded-md">{el.text}</p>
                        </div>
                        :null
                    ))
                }
            </div>
            <div className="mt-5 w-screen h-75vh overflow-auto flex flex-col gap-6 items-center md:hidden ">
                {
                    data.map((el,i)=>(
                        <div key={i} className="w-64 rounded-md relative">
                            <img src={el.image} className=" rounded-md" alt="" />
                            <p className="absolute z-10 bottom-0 text-center text-sm text-gray-200 font-bold bg-tr-gray rounded-md">{el.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}