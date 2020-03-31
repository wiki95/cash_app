import React from "react";
import { connect } from "react-redux";

class Data extends React.Component {
	render() {
		return (
			<div>
				<h2>Total : {this.props.total}</h2>
				<h2>Amount Taken : 0</h2>
				<h2>Remaining : 0</h2>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	total: state.addList.total
});
export default connect(mapStateToProps, {})(Data);
