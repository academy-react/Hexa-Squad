import React from "react";
import { Marker, Popup } from "react-leaflet";
// import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import "leaflet/dist/leaflet.css";
import { CheckboxInput } from "../common";
import { Fragment } from "react";

const FooterMap = () => {
    const position = [36.597528, 53.064694]

    return(
        <Fragment>
        {/* <CheckboxInput name={"showFooterMapModal"} /> */}
        <div className="footerMapModal">

            <label htmlFor="showFooterMapModal" className="cursor-pointer">
                <i className="bi bi-x absolute top-2 z-50 right-5 text-slate-600 dark:text-semiWhite2 text-4xl"></i>
            </label>
        <div className="map__containe">
        <MapContainer center={position} zoom={15} scrollWheelZoom={true}  className="h-[calc(100vh_-_280px)] z-30">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                ساری - بلوار جاده دریا - بعد از دنیای آرزو <br />- نرسیده به دانشگاه روزبهان
                </Popup>
            </Marker>
        </MapContainer>
        </div>
       </div>
       </Fragment>
    )
}
export default FooterMap;