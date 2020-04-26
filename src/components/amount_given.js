import React from "react";
import { Switch } from "antd";
import { connect } from "react-redux";
import { onSwitch } from "../redux/actions/amount_given";
import Standard from "./standard";
import Manual from "./manual";
import SaveData from "./save_data";
import ViewData from "./view_data";

class AmountGiven extends React.Component {
	state = {
		toGiveSelf: "",
	};
	onSwitch = (e) => {
		this.props.onSwitch(e);
	};
	onChangeToGive = (e) => {
		this.setState({
			toGiveSelf: e.target.value,
		});
	};
	onReset = () => {
		this.setState(
			{
				toGiveSelf: "",
			},
			() => {
				this.props.onSwitch(false);
			}
		);
	};
	render() {
		return (
			<div style={styles.container}>
				<div style={styles.innerContainer}>
					<div>
						<input
							value={this.state.toGiveSelf}
							onChange={this.onChangeToGive}
							type="number"
							style={styles.toGive}
							placeholder="To Give"
						/>
					</div>
					<div style={styles.switch}>
						<div style={{ display: "flex", float: "right" }}>
							<Switch checked={this.props.switchOn} onChange={this.onSwitch} />
						</div>
						<h3>{this.props.switchOn ? "Manual" : "Standard"}</h3>
					</div>
				</div>
				<h3>
					For :{" "}
					{this.state.toGiveSelf === ""
						? this.props.amount > 0
							? this.props.amount
									.toString()
									.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
							: 0
						: this.state.toGiveSelf}
				</h3>
				{this.props.switchOn ? (
					<Manual
						toGiveSelf={this.state.toGiveSelf}
						remaining={this.props.amount}
					/>
				) : (
					<Standard toGiveSelf={this.state.toGiveSelf} />
				)}
				<input style={{ marginTop: "10px" }} placeholder="USER ID" />
				<SaveData onReset={this.onReset} />
				<ViewData />
			</div>
		);
	}
}
const styles = {
	switch: {
		display: "block",
	},
	innerContainer: {
		display: "flex",
		justifyContent: "space-between",
	},
};
const mapStateToProps = (state) => ({
	switchOn: state.amount_given.switchOn,
	amount: state.amount_taken.toGive,
});
export default connect(mapStateToProps, { onSwitch })(AmountGiven);
