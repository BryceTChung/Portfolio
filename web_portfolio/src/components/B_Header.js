import React from 'react'
import './B_Header.css'
import bryce_pic from "../img/IMG_5806.JPG"

function B_Header() {
	return (
		<div id="h_container">
			<div id="left">
				<table className="name">
					<tr className="row">
						<th>B</th>
						<th>R</th>
						<th>Y</th>
						<th>C</th>
						<th>E</th>
					</tr>
					<tr className="row">
						<th>C</th>
						<th>H</th>
						<th>U</th>
						<th>N</th>
						<th>G</th>
					</tr>
				</table>
			</div>
			<div id="right">
				<div id="img_wrapper">
				<img src={bryce_pic} alt="NA" id="pic" />
				</div>
			</div>
			
		</div>
	)
}

export default B_Header

