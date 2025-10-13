
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Legacy from "./rules/legacy";
import Privacy from "./rules/privacy";
import Main from "./view/main";
import { useRef } from "react";
import Auth from "./view/auth";


// --> POINT D'ENTREE DANS L'APP(INDEX --> AUTH)
function App() {
	const inf = useRef<HTMLDivElement>(null)

	return (
		<>
			<BrowserRouter >
				<Routes>
					<Route path="/" element={<Auth/>}/>
					<Route path="/legacy" element={<Legacy/>}/>
					<Route path="/privacy" element={<Privacy/>}/>
				</Routes>		
			</BrowserRouter>
		</>
	)
}

export default App
