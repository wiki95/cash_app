import React from "react";
import { connect } from "react-redux";
import { Checkbox } from "antd";

class Standard extends React.Component {
	state = {
		ft: true,
		ot: true,
		fh: true,
		oh: true,
		fif: true,
		twe: true,
		ten: true,
		fiv: true,
		two: true,
		five_thousand: 0,
		one_thousand: 0,
		five_hundred: 0,
		one_hundred: 0,
		_fifty: 0,
		_twenty: 0,
		_ten: 0,
		_five: 0,
		_two: 0,
		_one: 0,
		amountToWork: 0,
	};
	onCheck = (e) => {
		this.setState(
			{
				[e.target.name]: !e.target.isChecked,
			},
			() => {
				this.calculationWithChanges();
			}
		);
	};
	calculationWithChanges = () => {
		const {
			ft,
			ot,
			fh,
			oh,
			fif,
			twe,
			ten,
			fiv,
			two,
			amountToWork,
		} = this.state;
		let remAfterCalc = amountToWork;
		let five_thousand,
			one_thousand,
			five_hundred,
			one_hundred,
			_fifty,
			_twenty,
			_ten,
			_five,
			_two = 0;
		if (ft === true) {
			five_thousand = Math.floor(remAfterCalc / 5000);
			remAfterCalc = remAfterCalc % 5000;
		}
		if (ot === true) {
			one_thousand = Math.floor(remAfterCalc / 1000);
			remAfterCalc = remAfterCalc % 1000;
		}
		if (fh === true) {
			five_hundred = Math.floor(remAfterCalc / 500);
			remAfterCalc = remAfterCalc % 500;
		}
		if (oh === true) {
			one_hundred = Math.floor(remAfterCalc / 100);
			remAfterCalc = remAfterCalc % 100;
		}
		if (fif === true) {
			_fifty = Math.floor(remAfterCalc / 50);
			remAfterCalc = remAfterCalc % 50;
		}
		if (twe === true) {
			_twenty = Math.floor(remAfterCalc / 20);
			remAfterCalc = remAfterCalc % 20;
		}
		if (ten === true) {
			_ten = Math.floor(remAfterCalc / 10);
			remAfterCalc = remAfterCalc % 10;
		}
		if (fiv === true) {
			_five = Math.floor(remAfterCalc / 5);
			remAfterCalc = remAfterCalc % 5;
		}
		if (two === true) {
			_two = Math.floor(remAfterCalc / 2);
			remAfterCalc = remAfterCalc % 2;
		}
		this.setState({
			five_thousand,
			one_thousand,
			five_hundred,
			one_hundred,
			_fifty,
			_twenty,
			_ten,
			_five,
			_two,
			_one: parseFloat(remAfterCalc).toFixed(2),
		});
	};
	componentDidMount() {
		const amountToWork = this.onUpdatingOrMounting(
			this.props.amountToGive,
			this.props.toGiveSelf
		);
		this.setState({ amountToWork }, () => {
			this.calculationWithChanges();
		});
	}
	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			this.calculationWithChanges();
		}
	}
	onUpdatingOrMounting = (auto, manual) => {
		let amountToWork = 0;
		if (manual === "") {
			if (auto > 0) {
				amountToWork = auto;
			} else {
				amountToWork = 0;
			}
		} else if (parseFloat(manual) < 1) {
			amountToWork = 0;
		} else {
			amountToWork = manual;
		}
		return amountToWork;
	};
	UNSAFE_componentWillReceiveProps(nextProps) {
		const amountToWork = this.onUpdatingOrMounting(
			nextProps.amountToGive,
			nextProps.toGiveSelf
		);
		this.setState({ amountToWork });
	}

	render() {
		const {
			ft,
			ot,
			fh,
			oh,
			fif,
			twe,
			ten,
			fiv,
			two,
			five_thousand,
			one_thousand,
			five_hundred,
			one_hundred,
			_fifty,
			_twenty,
			_ten,
			_five,
			_two,
			_one,
		} = this.state;
		return (
			<div>
				<table width="100%" border="2">
					<tbody>
						<tr>
							<th style={styles.cells}>
								5000x
								<Checkbox
									onChange={this.onCheck}
									name="ft"
									isChecked={ft}
									style={styles.checkBox}
									defaultChecked
								/>
							</th>
							<th className="denomGivenAuto" style={styles.cellsValue}>
								{parseInt(five_thousand) === 0 ? "" : five_thousand}
							</th>
						</tr>
						<tr>
							<th style={styles.cells}>
								1000x
								<Checkbox
									onChange={this.onCheck}
									name="ot"
									isChecked={ot}
									style={styles.checkBox}
									defaultChecked
								/>
							</th>
							<th className="denomGivenAuto" style={styles.cellsValue}>
								{parseInt(one_thousand) === 0 ? "" : one_thousand}
							</th>
						</tr>
						<tr>
							<th style={styles.cells}>
								500x
								<Checkbox
									onChange={this.onCheck}
									name="fh"
									isChecked={fh}
									style={styles.checkBox}
									defaultChecked
								/>
							</th>
							<th className="denomGivenAuto" style={styles.cellsValue}>
								{parseInt(five_hundred) === 0 ? "" : five_hundred}
							</th>
						</tr>
						<tr>
							<th style={styles.cells}>
								100x
								<Checkbox
									onChange={this.onCheck}
									name="oh"
									isChecked={oh}
									style={styles.checkBox}
									defaultChecked
								/>
							</th>
							<th className="denomGivenAuto" style={styles.cellsValue}>
								{parseInt(one_hundred) === 0 ? "" : one_hundred}
							</th>
						</tr>
						<tr>
							<th style={styles.cells}>
								50x
								<Checkbox
									onChange={this.onCheck}
									name="fif"
									isChecked={fif}
									style={styles.checkBox}
									defaultChecked
								/>
							</th>
							<th className="denomGivenAuto" style={styles.cellsValue}>
								{parseInt(_fifty) === 0 ? "" : _fifty}
							</th>
						</tr>
						<tr>
							<th style={styles.cells}>
								20x
								<Checkbox
									onChange={this.onCheck}
									name="twe"
									isChecked={twe}
									style={styles.checkBox}
									defaultChecked
								/>
							</th>
							<th className="denomGivenAuto" style={styles.cellsValue}>
								{parseInt(_twenty) === 0 ? "" : _twenty}
							</th>
						</tr>
						<tr>
							<th style={styles.cells}>
								10x
								<Checkbox
									onChange={this.onCheck}
									name="ten"
									isChecked={ten}
									style={styles.checkBox}
									defaultChecked
								/>
							</th>
							<th className="denomGivenAuto" style={styles.cellsValue}>
								{parseInt(_ten) === 0 ? "" : _ten}
							</th>
						</tr>
						<tr>
							<th style={styles.cells}>
								5x
								<Checkbox
									onChange={this.onCheck}
									name="fiv"
									isChecked={fiv}
									style={styles.checkBox}
									defaultChecked
								/>
							</th>
							<th className="denomGivenAuto" style={styles.cellsValue}>
								{parseInt(_five) === 0 ? "" : _five}
							</th>
						</tr>
						<tr>
							<th style={styles.cells}>
								2x
								<Checkbox
									onChange={this.onCheck}
									name="two"
									isChecked={two}
									style={styles.checkBox}
									defaultChecked
								/>
							</th>
							<th className="denomGivenAuto" style={styles.cellsValue}>
								{parseInt(_two) === 0 ? "" : _two}
							</th>
						</tr>
						<tr>
							<th style={styles.cells}>1x</th>
							<th className="denomGivenAuto" style={styles.cellsValue}>
								{parseInt(_one) === 0 ? "" : _one}
							</th>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
const styles = {
	cells: {
		width: "125px",
		textAlign: "right",
		fontSize: "15px",
		paddingRight: "5px",
		height: "35px",
	},
	cellsValue: {
		width: "125px",
		textAlign: "left",
		fontSize: "15px",
	},
	checkBox: {
		paddingLeft: "5px",
	},
};

const mapStateToProps = (state) => ({
	amountToGive: state.amount_taken.toGive,
});
export default connect(mapStateToProps, {})(Standard);
