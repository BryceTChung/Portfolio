import React from 'react'
import Header from './components/Header';
import Skills from './components/Skills';



function App() {
	let l = ["Python","JavaScript","C++","test"]
	let t =["HTML","CSS","React"]
	let[languages, set_languages] = React.useState(l)
	let[technologies, set_technologies] = React.useState(t)
	//set_languages(["Python","JavaScript","C++"])

	return (
		<>
		<Header/>
		<Skills languages = {languages} technologies ={technologies}/>
		</>
	)
}

export default App;