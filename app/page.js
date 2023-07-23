"use client";
import React from "react";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Spinner from "./components/Spinner";
import Weather from "./components/Weather";

function page() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  // console.log(city);
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    if (!city) {
      return;
    }
    setLoading(true);
    axios.get(URL).then((res) => {
      setWeather(res.data);
      // console.log(res.data);
    });
    setCity("");
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/45 z-[1]" />
        <Image
          src="https://c4.wallpaperflare.com/wallpaper/477/324/886/nature-atmosphere-sky-clouds-wallpaper-preview.jpg"
          layout="fill"
          alt="/"
          className="object-cover"
        />
        <div className="relative z-10 flex justify-between max-w-[500px] w-full pt-8 m-auto text-white">
          <form
            className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 rounded-2xl text-3xl text-white"
            onSubmit={fetchWeather}
          >
            <div>
              <input
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-transparent border-none focus:outline-none text-white text-2xl placeholder:text-gray-100"
                type="text"
                placeholder="search a city"
              />
            </div>
            <button>
              <BsSearch size={30} />
            </button>
          </form>
        </div>
        {weather.main && <Weather data={weather} />}
      </div>
    );
  }
}

export default page;
