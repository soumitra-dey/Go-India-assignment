




export default function StockBar(){
    


    return (
        <div className="flex gap-5 text-xs justify-center text-white bg-black py-1">
            <div className="hidden md:flex gap-5">
                <p>.50</p>
                <p className="text-red-800">0.21%</p>
                <p>NIFTY BANK</p>
                <p>41,559.40</p>
                <p className="text-green-800">0.01%</p>
                <p>BAJFINANCE</p>
                <p>6,435.50</p>
                <p className="text-red-800">0.30%</p>
                <p>BHARTIARTL</p>
                <p>771.95</p>
                <p className="text-green-800">0.69%</p>
            </div>
            <p>HDFCBANK</p>
            <p>1,657.10</p>
            <p className="text-green-800">0.40%</p>
            <p>HINDUNILVR</p>
            <p>2,577.50</p>
            <div className="hidden md:flex gap-5">
                <p className="text-red-800">0.36%</p>
                <p>INDIGO</p>
                <p>2,043.50</p>
            </div>
        </div>
    )
}