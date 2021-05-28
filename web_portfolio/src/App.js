import React from 'react';
import './App.css';
// import Header from './components/Header';
import B_Header from './components/B_Header';
import Skills from './components/Skills';
import B_desc from './components/B_desc';
import B_education from "./components/B_education";
import B_PROJECT from "./components/B_PROJECT";
//IMGS
import Rtinder_01 from "./img/Rtinder_01.png"

function App() {
	let l = ["JavaScript","Python","C++"]
	let t =["HTML & CSS","React","git","Node.js","SQL"]
	let[languages, set_languages] = React.useState(l)
	let[technologies, set_technologies] = React.useState(t)
	//set_languages(["Python","JavaScript","C++"])
	let rtinder_img=[Rtinder_01]
	let rtinder_about = "Your group cant decide where to eat, try Restaurant Tinder! A web app created by a small team that utilizes the yelp api to generate restraunts based off your group's preferences. Send them a unique link and swipe(click) on restaurants you like! Every round the resaturants with the least amount of likes will get eliminated until there is only one remaining!"
	let rtinder_tech = ["JavaScript","HTML","CSS","Node.js","Express"]

	return (
		<>
		<B_Header/>
		<B_desc/>
		<B_education/>
		<Skills languages = {languages} technologies ={technologies}/>
		<div className="header"><div className="text">Projects</div></div>
		<B_PROJECT imgs={rtinder_img} about={rtinder_about} tech={rtinder_tech}/>
		</>
	)
}

export default App;