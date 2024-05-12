import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../constants/pageProps/Breadcrumbs";
import Pagination from "../../components/Products/Pagination";

const Product = () => {
    const location = useLocation();
    const [prevLocation, setPrevLocation] = useState("");
    useEffect(() => {
        setPrevLocation(location.state.data);
    }, [location]);
    return (
        <div className="max-w-container mx-auto px-4">
            <Breadcrumbs title="Products" prevLocation={prevLocation} />
            <div className="w-full h-full flex pb-20 gap-10">
                <div className="w-full mdl:w-[80%] lgl:w-[100%] h-full flex flex-col gap-10">
                    <Pagination />
                </div>
            </div>
        </div>
    );
};

export default Product;