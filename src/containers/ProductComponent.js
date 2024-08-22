import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);

    const groupedProducts = [];
    for (let i = 0; i < products.length; i += 4) {
        groupedProducts.push(products.slice(i, i + 4));
    }

    const renderList = groupedProducts.map((group, index) => (
        <div className="product-container" key={index}>
            {group.map((product) => {
                const { id, title, image, price, category } = product;
                return (
                    <div className="product-card" key={id}>
                        <Link to={`/product/${id}`}>
                            <div className="ui link cards">
                                <div className="card">
                                    <div className="image">
                                        <img src={image} alt={title} />
                                    </div>
                                    <div className="content">
                                        <div className="header">{title}</div>
                                        <div className="meta price">$ {price}</div>
                                        <div className="meta">{category}</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    ));

    return (
        <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={3000}
        >
            {renderList}
        </Carousel>
    );
};

export default ProductComponent;
