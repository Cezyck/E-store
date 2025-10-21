// src/app/App.jsx
import { RouterProvider } from 'react-router-dom'
import { createMainRouter } from './routes'
import './styles/styles.css'

function App() {
	const router = createMainRouter()
	
	return <RouterProvider router={router} />
}

export default App