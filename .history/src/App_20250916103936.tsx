
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Legacy from "./rules/legacy";
import Privacy from "./rules/privacy";
import Main from "./view/main";



// --> POINT D'ENTREE DANS L'APP(INDEX --> AUTH)
function App() {

	return (
		<>
			<BrowserRouter >
				<Routes>
					<Route path="/" element={<Main/>}/>
					<Route path="/legacy" element={<Legacy/>}/>
					<Route path="/privacy" element={<Privacy/>}/>
				</Routes>		
			</BrowserRouter>
		</>
	)
}

export default App
