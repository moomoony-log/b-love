
import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import Legacy from "./rules/legacy";
import Privacy from "./rules/privacy";
import Main from "./view/main";
import Auth from "./view/auth";
// import Auth from "./view/auth";

// const router = createBrowserRouter(
// 	[
// 		{
// 			path:'/',
// 			element: <Auth/>,
// 			children:[
// 				{
// 					path:'legacy',
// 					element:<Legacy/>
// 				}
// 			]
// 		}
// 	]
// )

// --> POINT D'ENTREE DANS L'APP(INDEX --> AUTH)
function App() {
	return (
		<>
			<BrowserRouter >
				<Routes>
					<Route path="/" element={<Auth/>} />
					{/* <Route path="/legacy" element={<Legacy/>}/>
					<Route path="/privacy" element={<Privacy/>}/> */}
				</Routes>		
			</BrowserRouter>
		</>
	)
}

export default App
