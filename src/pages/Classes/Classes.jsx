import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Class from "./Class/Class";

const Classes = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, []);

    const selectHandler = () => {
        console.log('select items');
    }

    return (
        <div className="mb-5">
            <Helmet>
                <title>Dance Club | Class</title>
            </Helmet>
            <div className="w-full h-24 text-center mt-20">
                <h3 className="text-5xl font-semibold">All classes</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-10 px-3 md:px-0">
                {
                    classes.map(items => <Class
                        key={items._id}
                        items={items}
                        selectHandler={selectHandler}
                    ></Class>)
                }
            </div>
        </div>
    );
};

export default Classes;