import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working
			</a>
			<p>
<<<<<<< HEAD
				<h1>Holaaa Bienve</h1>
				<h1>Danny was here, ;)</h1>
=======
				<h1>Holaaa Bienve and Danny</h1>
>>>>>>> d8858de7f900cf54f466a2aef8a14be26f4de348
			</p>
		</div>
	);
}
