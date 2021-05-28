import React from 'react'
// import Rtinder_01 from "../img/Rtinder_01.png"
import './B_PROJECT.css'
function B_PROJECT(props) {
	return (
		<div className="proj_container">
			<div className="proj_img">
				<img className="img" src={props.imgs[0]} alt="ERROR" />
			</div>
			<div className="proj_text">
				<div className="proj_text_about">{props.about}</div>
				<div className="proj_text_tech">
					{props.tech.map((e) => <div className="tech_item">{e}</div>)}
				</div>
			</div>
		</div>
	)
}

export default B_PROJECT
