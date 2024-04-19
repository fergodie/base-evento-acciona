import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Hero } from "../component/hero";
import { Detalles } from "../component/detalles";
import { Carousel } from "../component/carousel";
import { Map } from "../component/map";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center">
			<Hero className=""/>
			<Detalles/>
			<Carousel/>
			<Map/>
		</div>
	);
};
