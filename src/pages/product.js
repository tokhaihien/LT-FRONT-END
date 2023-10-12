import { json } from "react-router-dom";
import Banner from "../components/banner"
import Header from "../components/header"
import Product_cpn from "../components/product";
import { useEffect, useState } from "react";
// Trang san pham



function Product(props) {
    const [product_type, setProduct_type] = useState([]);
    // get_data.php
    // useEffect(() => {
    //     fetch('http://localhost:9000/get_data.php')
    //         .then(response => response.json())
    //         .then(json => setProduct_type(json))
    // }, []);

    // api ben laravel
    // useEffect(() => {
    //     fetch('http://127.0.0.1:8000/api/listboth')
    //         .then((response) => {
    //             response.json()
    //         })
    //         .then(json => setProduct_type(json.data))
    // }, []);


    // cach moi
    useEffect(() => {
        async function getDataFromApi(){
            var res = await fetch('http://127.0.0.1:8000/api/listboth');
            var json = await res.json();
            // console.log(json.data);
            setProduct_type(json.data);
        }

        getDataFromApi();
    }, []);

    const lst_product_type = product_type.map(function (item) {
        return <Product_cpn data={item} />
    })
    return (
        <>
            {/* <Banner /> */}
            {lst_product_type}
        </>
    )
}
export default Product