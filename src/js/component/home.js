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
				<h1>Holaaa Bienve</h1>
				<h1>Danny was here</h1>
				<p>
					n publishing and graphic design, Lorem ipsum is a
					placeholder text commonly used to demonstrate the visual
					form of a document or a typeface without relying on
					meaningful content. Lorem ipsum may be used before final
					copy is available, but it may also be used to temporarily
					replace copy in a process called{" "}
				</p>
                <cite>update 19:29 pm --danny</cite>
			</p>
		</div>
	);
}
