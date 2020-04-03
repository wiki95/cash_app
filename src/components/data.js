import React from "react";
import { connect } from "react-redux";

class Data extends React.Component {
	componentDidUpdate() {}
	render() {
		return (
			<div style={styles.container}>
				<h2>
					Total :{" "}
					{this.props.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
				</h2>
				<h2>
					Amount Taken :{" "}
					{isNaN(this.props.toTake)
						? "0"
						: this.props.toTake
								.toString()
								.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
				</h2>
				<h2 style={this.props.toGive < 0 ? styles.red : styles.green}>
					{this.props.toGive > 0 ? "To Give : " : "Remaining : "}
					{isNaN(this.props.toGive)
						? "0"
						: this.props.toGive
								.toString()
								.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
				</h2>
			</div>
		);
	}
}
const styles = {
	container: {
		border: "2px solid black",
		borderRadius: "10px",
		backgroundColor: "#f7e9d2",
		padding: "5px",
		marginTop: "5px"
	},
	green: {
		color: "green"
	},
	red: {
		color: "red"
	}
};
const mapStateToProps = state => ({
	total: state.addList.total,
	toGive: state.amount_taken.toGive,
	toTake: state.amount_taken.total
});
export default connect(mapStateToProps, {})(Data);
