
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Legacy from "./rules/legacy";
import Privacy from "./rules/privacy";
import Main from "./view/main";
import Auth from "./view/auth";
// import Auth from "./view/auth";

const router =  createBrowserRouter([
	{
		path:'/',
		element:<Auth/>
	},
	{
		path:'/legacy',
		element:<Legacy/>
	},
	{
		path:'/privacy',
		element:<Privacy/>
	},
	{
		path:'/home',
		element:<Main/>,
		children:[
			{
				path:'/acceuil',
				element: <div> Acceuil</div>
			},
			{
				path:'/dashbord',
				element: <div> Dashbord</div>
			}
		]
	}
])

// --> POINT D'ENTREE DANS L'APP(INDEX --> AUTH)
function App() {
	return <RouterProvider router={router}/>
}

export default App
