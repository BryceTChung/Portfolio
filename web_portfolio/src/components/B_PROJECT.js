import React from 'react'
// import Rtinder_01 from "../img/Rtinder_01.png"
import './B_PROJECT.css'



function B_PROJECT(props) {
	let [imgs,set_img] = React.useState(props.imgs[0])
	let [ind,set_ind] = React.useState(0)

	function left(){
		if(ind === 0){
			set_ind(props.imgs.length -1)
		}
		else{
			set_ind(ind-1)
		}
		console.log(`Index = ${ind}`)
	}
	function right(){
		if(ind === props.imgs.length -1){
			set_ind(0)
		}
		else{
			set_ind(ind+1)
		}
		console.log(`Index = ${ind}`)
	}
	
	return (
		<div className="proj_container">
			<div className="proj_img">
				<p className="left_img" onClick={left}> {"<-"}  </p>
				<p className="right_img" onClick={right}> {"->"} </p>
				<img className="img" src={props.imgs[ind]} alt="ERROR" />
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
