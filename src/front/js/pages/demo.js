import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "/workspaces/base-evento-acciona/src/front/styles/demo.css";

import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div class="ratio ratio-16x9">
			<iframe
				src="https://www.youtube.com/embed/vlDzYIIOYmM"
				title="YouTube video"
				allowfullscreen
			></iframe>
		</div>
	);
};
