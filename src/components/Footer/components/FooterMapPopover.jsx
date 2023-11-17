import React from "react";
import { Popover } from "@headlessui/react";
import { Marker, Popup } from "react-leaflet";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import "leaflet/dist/leaflet.css";

const FooterMapPopover = () => {
  const position = [36.597528, 53.064694]
  return (
    <Popover className="z-50 relative">
      <Popover.Button className="relative hover:border-none border-none">
        {/* <div className="flex gap-2">
            <i className="bi bi-geo-alt"></i>
            <p>
            ساری - بلوار جاده دریا - بعد از دنیای آرزو - نرسیده به دانشگاه روزبهان
            </p>
        </div> */}
        <i className="bi bi-geo-alt absolute bottom-0"></i>
      </Popover.Button>
      <Popover.Panel className="z-50 animate-zoom absolute lg:w-[600px] md:w-[400px] w-80 -top-[355px] lg:-right-[500px] md:-right-40 ">
        <div className="map__containe">
          <MapContainer 
            center={position} 
            zoom={17} 
            scrollWheelZoom={true} 
            className="h-[calc(100vh_-_280px)] z-30"
          >
            <TileLayer
              attribution='&copy;'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                ساری - بلوار جاده دریا - بعد از دنیای آرزو <br />- نرسیده به دانشگاه روزبهان
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default FooterMapPopover;
