import { useEffect, useState } from 'react'
import './App.css'

function App() {
	const [string, setString] = useState('')

	useEffect(() => {
		// use String
		fetch('/api')
			.then((res) => res.text())
			.then(setString)
	}, [])

	return (
		<>
			<h1>Vite + React</h1>
			<h1>{string}</h1>
		</>
	)
}

export default App
