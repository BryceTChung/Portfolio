import React from 'react'
import './Skills.css'


function Skills(props) {
	
	return (
		<div id="container">
			<div id="lang">
				<div class="title">Languages</div>
				{props.languages.map((item)=> <div className="list">{item} </div>)}
				
			</div>
			<div id="other">
				<div className="title">Other</div>
				{props.technologies.map((item)=> <div className="list">{item} </div>)}
			</div>
		</div>
	)
}

export default Skills