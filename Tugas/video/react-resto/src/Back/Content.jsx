import React from "react";
import { useParams, useResolvedPath } from "react-router-dom";
import Kategori from "./Kategori";
import Menu from "./Menu";
import Pelanggan from "./Pelanggan";
import Order from "./Order";
import OrderDetail from "./OrderDetail";
import User from "./User";

function Content() {
    const { konten } = useParams();
    let tampil;

    if (konten === "kategori") {
        tampil = <Kategori/>
    }
    if (konten === "menu") {
        tampil = <Menu/>
    }
    if (konten === "pelanggan") {
        tampil = <Pelanggan/>
    }
    if (konten === "order") {
        tampil = <Order/>
    }
    if (konten === "orderdetail") {
        tampil = <OrderDetail/>
    }
    if (konten === "user") {
        tampil = <User/>
    }


    return (
        <>
            {tampil}
        </>
    );
}

export default Content;
