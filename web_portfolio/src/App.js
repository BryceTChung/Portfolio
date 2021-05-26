import React from 'react'
import Header from './components/Header';
import B_Header from './components/B_Header';
import Skills from './components/Skills';
import B_desc from './components/B_desc';



function App() {
	let l = ["Python","JavaScript","C++","test"]
	let t =["HTML","CSS","React"]
	let[languages, set_languages] = React.useState(l)
	let[technologies, set_technologies] = React.useState(t)
	//set_languages(["Python","JavaScript","C++"])

	return (
		<>
		<B_Header/>
		<B_desc/>
		<Skills languages = {languages} technologies ={technologies}/>
		
		</>
	)
}

export default App;