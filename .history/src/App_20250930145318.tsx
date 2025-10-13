
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Legacy from "./rules/legacy";
import Privacy from "./rules/privacy";
import Main from "./view/main/main";
import Auth from "./view/auth";
import Acceuil from "./view/main/acceuil";
import Dashbord from "./view/main/dashbord";
import "../public/css/app.css"
import "../public/vendor/font-awesome-pro/css/all.css"
import InfoAccount from "./view/main/info-account";

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
				path:'acceuil',
				element: <Acceuil/>
			},
			{
				path:'dashbord',
				element: <Dashbord/>,
			},
			{
				path: 'product',
				element:<div>Product</div>
			},
			{
				path:'check',
				element: <div>Localisation</div>
			},
			{
				path:'client',
				element: <InfoAccount/>,
				children: [
					{
						path:'compte',
						element: <div>Mon compte</div>
					}
				]
			}
			
		]
	}
])

// --> POINT D'ENTREE DANS L'APP(INDEX --> AUTH)
function App() {
	return <RouterProvider router={router}/>
}

export default App
