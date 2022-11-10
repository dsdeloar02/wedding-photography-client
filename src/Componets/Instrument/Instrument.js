const Instrument = ({singledata}) => {
    
    return (
        <div className="w-[100%] md:w-[50%] lg:w-[30%] p-5 border rounded-md shadow-md mt-5">
            <img src={singledata.image} alt="" />
            <h4 className="mt-4 text-xl font-bold text-pink-400">Device : {singledata.name}</h4>
        </div>
    );
}

export default Instrument;
