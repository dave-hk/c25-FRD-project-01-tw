import React from "react";
import { useParams } from "react-router-dom";
import Title from "../title/Title";
import { UseHotelInfo } from "./hotelAPI";
import Equipment from "../equipment/Equipment";
import "./HotelList.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import "swiper/css/free-mode";
import Gallery from "../gallery/Gallery";

export default function HotelDetail() {
  let { hotelId } = useParams();
  const hotelIdNum = Number(hotelId);
  const hotelInfo = UseHotelInfo();

  // Find the specific hotel using the hotelId
  const hotel = hotelInfo.find((hotel) => hotel.id === hotelIdNum);

  if (!hotel) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content-container">
      <Title mainTitle="酒店資料" />
      <Gallery hotel={hotel} />
      <h2>{hotel.name}</h2>
      <p>地址: {hotel.address}</p>
      <p>地區: {hotel.district}</p>
      <p>電話: {hotel.phone}</p>
      <p>描述: {hotel.description}</p>
      <div dangerouslySetInnerHTML={{ __html: hotel.google_map_address }} />
      <Equipment />
    </div>
  );
}
