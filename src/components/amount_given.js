import React from "react";
import { Switch } from "antd";
import { connect } from "react-redux";
import { onSwitch } from "../redux/actions/amount_given";

class AmountGiven extends React.Component {
	state = {
		switchValue: "Standard"
	};
	onSwitch = e => {
		this.props.onSwitch(e);
		if (e === false) {
			this.setState({
				switchValue: "Standard"
			});
		} else {
			this.setState({
				switchValue: "Manual"
			});
		}
	};
	render() {
		return (
			<div style={styles.container}>
				<div style={styles.innerContainer}>
					<div>
						<input type="number" style={styles.toGive} placeholder="To Give" />
					</div>
					<div style={styles.switch}>
						<div style={{ display: "flex", float: "right" }}>
							<Switch onChange={this.onSwitch} />
						</div>
						<h3>{this.props.switchOn ? "Manual" : "Standard"}</h3>
					</div>
				</div>
				<h3>
					For :{" "}
					{this.props.amount > 0
						? this.props.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
						: 0}
				</h3>
				<table width="100%" border="2">
					<tbody>
						<tr>
							<th style={styles.cells}>0x</th>
							<th style={styles.cellsValue}>3</th>
						</tr>
						<tr>
							<th style={styles.cells}>5000x </th>
							<th style={styles.cellsValue}>3</th>
						</tr>
						<tr>
							<th style={styles.cells}>5000x </th>
							<th style={styles.cellsValue}>3</th>
						</tr>
						<tr>
							<th style={styles.cells}>5000x </th>
							<th style={styles.cellsValue}>3</th>
						</tr>
						<tr>
							<th style={styles.cells}>5000x </th>
							<th style={styles.cellsValue}>3</th>
						</tr>
						<tr>
							<th style={styles.cells}>5000x </th>
							<th style={styles.cellsValue}>3</th>
						</tr>
						<tr>
							<th style={styles.cells}>5000x </th>
							<th style={styles.cellsValue}>3</th>
						</tr>
						<tr>
							<th style={styles.cells}>5000x </th>
							<th style={styles.cellsValue}>3</th>
						</tr>
						<tr>
							<th style={styles.cells}>5000x </th>
							<th style={styles.cellsValue}>3</th>
						</tr>
						<tr>
							<th style={styles.cells}>5000x </th>
							<th style={styles.cellsValue}>3</th>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
const styles = {
	switch: {
		display: "block"
	},
	innerContainer: {
		display: "flex",
		justifyContent: "space-between"
	},
	toGive: {
		height: "30px",
		width: "100px"
	},
	cells: {
		width: "150px",
		textAlign: "right",
		fontSize: "15px"
	},
	cellsValue: {
		width: "150px",
		textAlign: "left",
		fontSize: "20px"
	}
};
const mapStateToProps = state => ({
	switchOn: state.amount_given.switchOn,
	amount: state.amount_taken.toGive
});
export default connect(mapStateToProps, { onSwitch })(AmountGiven);
