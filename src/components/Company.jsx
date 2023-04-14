




export default function Company() {
    let com=[
        "https://cube.capriglobal.in/Moratorium_scr/img/cgc_logo_new.png",
        "https://bl-i.thgim.com/public/migration_catalog/qsgsvr/article21283110.ece/alternates/FREE_1200/Ganesh%20Housing",
        "https://www.careeryojana.in/wp-content/uploads/2021/04/Fino-Bank.png",
        "https://www.recycleinme.com/logo/109294.jpg",
        "https://www.gpil.in/pms/Logo.png",
        "https://www.deepindustries.com/images/logo.png",
        "https://cube.capriglobal.in/Moratorium_scr/img/cgc_logo_new.png",
        "https://bl-i.thgim.com/public/migration_catalog/qsgsvr/article21283110.ece/alternates/FREE_1200/Ganesh%20Housing",
        "https://www.careeryojana.in/wp-content/uploads/2021/04/Fino-Bank.png",
        "https://www.recycleinme.com/logo/109294.jpg",
        "https://www.gpil.in/pms/Logo.png",
    ]


    return (
        <div className="overflow-hidden">
            <p className="text-red-600 font-medium px-6 py-1 text-lg hidden md:flex">FEATURED COMPANIES</p>
            <div className="flex items-center gap-8 w-fit px-6 bg-white md:bg-cyan-200 overflow-hidden py-4">
                {
                    com.map((el,i)=>(
                        <div key={i} className=" border-2 border-red-700 rounded-full h-16 w-16 flex items-center md:w-24 md:h-fit md:border-0">
                            <img src={el} alt="" className="w-full" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}