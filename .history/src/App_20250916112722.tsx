
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Legacy from "./rules/legacy";
import Privacy from "./rules/privacy";
import Main from "./view/main";
import { useEffect, useRef, useState } from "react";



// --> POINT D'ENTREE DANS L'APP(INDEX --> AUTH)
function App() {

	const [index, setIndex] = useState()

	const inf = useRef<HTMLDivElement>(null)

	useEffect(()=> {
		const index = inf.current?.parentElement?.parentElement
		console.log(index);
		
		if(index) {
			index.removeAttribute("index")
		}
	}, [])

	return (
		<>
			<BrowserRouter >
				<Routes>
					<Route path="/" element={ <Main ref={inf}/> }/>
					<Route path="/legacy" element={<Legacy/>}/>
					<Route path="/privacy" element={<Privacy/>}/>
				</Routes>		
			</BrowserRouter>
		</>
	)
}

export default App
