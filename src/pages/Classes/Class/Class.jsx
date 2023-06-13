
const Class = ({ items, selectHandler }) => {
    const { Instructor_name, about, name, phone, photo, price, rating, _id } = items;
    // console.log(items);
    return (
        <div className="border-2 border-gray-300 p-4 drop-shadow-2xl rounded-md">
            <div className="flex justify-center items-center mb-5">
                <img className="w-[360px] rounded" src={photo} alt="" />
            </div>
            <div className="mb-6">
                <p className="text-xl font-semibold text-gray-700">Class Name: {name}</p>
                <p className="text-xl text-gray-500">Instructor Name: {Instructor_name}</p>
                <p>Available seats: 200</p>
                <p>Price: {price}</p>
                <p>Phone: {phone}</p>
                <p>Rating: {rating}</p>
            </div>
            <div className="">
                <button
                    onClick={selectHandler}
                    className="btn btn-active">Select</button>
            </div>
        </div>
    );
};

export default Class;