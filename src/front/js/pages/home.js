import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Hero } from "../component/hero";
import { Slider } from "../component/slider";
import { Detalles } from "../component/detalles";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center">
			<Hero/>
			<Detalles/>
			<Slider/>
		</div>
	);
};
