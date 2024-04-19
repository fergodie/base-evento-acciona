import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "/workspaces/base-evento-acciona/src/front/styles/demo.css";

import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div class="ratio ratio-16x9">

			<iframe width="560" height="315" src="https://www.youtube.com/embed/WkWs2ljF904?si=tPXhtRB8frDkIAXw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

		</div >
	);
};

