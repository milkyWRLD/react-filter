import './App.css'
import { filters, projects } from './components/date'
import Portfolio from './components/Portfolio'

function App() {
	return <Portfolio filters={filters} projects={projects} />
}

export default App
