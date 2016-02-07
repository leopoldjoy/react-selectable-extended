import React from 'react';
import ReactDOM from 'react-dom';

const createSelectable = (WrappedComponent) => {
	class SelectableItem extends React.Component {

		componentDidMount () {
			this.context.selectable.register(this.props.selectableKey, ReactDOM.findDOMNode(this));
		}


		componentWillUnmount () {
			this.context.selectable.unregister(this.props.selectableKey);
		}


		render () {
			return React.createElement(WrappedComponent, this.props);
		}
	}

	SelectableItem.contextTypes = {
		selectable: React.PropTypes.object
	};

	SelectableItem.propTypes = {
		selectableKey: React.PropTypes.any.isRequired
	};

	return SelectableItem;
}


export default createSelectable;