import React from "react";
import { connect } from "react-redux";

class Data extends React.Component {
	componentDidUpdate() {}
	render() {
		return (
			<div>
				<h2>
					Total :{" "}
					{this.props.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
				</h2>
				<h2>
					Amount Taken :{" "}
					{this.props.toTake.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
				</h2>
				<h2>
					Remaining :{" "}
					{this.props.toGive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
				</h2>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	total: state.addList.total,
	toGive: state.amount_taken.toGive,
	toTake: state.amount_taken.total
});
export default connect(mapStateToProps, {})(Data);
