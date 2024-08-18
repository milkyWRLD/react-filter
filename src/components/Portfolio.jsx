import PropTypes from 'prop-types'
import React from 'react'
import ProjectList from './ProjectList'
import Toolbar from './Toolbar'

class Portfolio extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			filters: props.filters,
			selected: props.filters[0],
			projects: props.projects,
		}
	}

	handlerToggle = filter => {
		const filteredProjects =
			filter === this.state.filters[0]
				? this.props.projects
				: this.props.projects.filter(project => project.category === filter)
		this.setState({
			selected: filter,
			projects: filteredProjects,
		})
	}

	render() {
		return (
			<div>
				<Toolbar
					filters={this.state.filters}
					selected={this.state.selected}
					onSelectFilter={this.handlerToggle}
				/>
				<ProjectList projects={this.state.projects} />
			</div>
		)
	}
}

Portfolio.propTypes = {
	projects: PropTypes.array.isRequired,
	filters: PropTypes.array.isRequired,
}

export default Portfolio
