import React from "react";
import Product from "../../components/Products/Product";
import { paginationItems } from "../../data";

const items = paginationItems;

function Items({ currentItems }) {
    return (
        <>
            {currentItems.map((item) => (
                <div key={item._id} className="w-full">
                    <Product
                        _id={item._id}
                        img={item.img}
                        productName={item.productName}
                        price={item.price}
                        info={item.info}
                        badge={item.badge}
                        badgeName = {item.badgeName}
                    />
                </div>
            ))}
        </>
    );
}

const Pagination = () => {
    const currentItems = items;

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
                <Items
                    currentItems={currentItems}
                />{" "}
            </div>

        </div>
    );
};

export default Pagination;
