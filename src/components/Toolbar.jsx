import PropTypes from 'prop-types'

function Toolbar(props) {
	const { filters, selected, onSelectFilter } = props
	return (
		<div>
			{filters.map((f, i) => {
				const className = f === selected ? 'filter-selected' : 'filter'
				return (
					<button
						className={className}
						onClick={() => onSelectFilter(f)}
						key={`${i}`}
					>
						{f}
					</button>
				)
			})}
		</div>
	)
}

export default Toolbar

Toolbar.propTypes = {
	filters: PropTypes.array.isRequired,
	onSelectFilter: PropTypes.func.isRequired,
	selected: PropTypes.string,
}
