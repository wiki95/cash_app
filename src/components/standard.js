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
		mounted: false,
		denominationTotal: 0,
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
		///  for five thousand ///
		if (e.target.name === "ft") {
			if (e.target.isChecked) {
				this.calculate_five_thousand(true);
			} else {
				this.calculate_five_thousand(false);
			}
		}
		this.setState({
			[e.target.name]: !e.target.isChecked,
		});
	};

	componentDidMount() {
		this.setState({
			mounted: true,
		});
	}
	calculate_total = () => {
		const {
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
			five_thousand * 5000 +
			one_thousand * 1000 +
			five_hundred * 500 +
			one_hundred * 100 +
			_fifty * 50 +
			_twenty * 20 +
			_ten * 10 +
			_five * 5 +
			_two * 2 +
			_one
		);
	};
	calculate_five_thousand = (check) => {
		const { amountToWork, five_thousand } = this.state;
		const calcDenom = Math.floor(amountToWork / 5000);
		let denominationTotal =
			this.calculate_total() - five_thousand * 5000 + calcDenom * 5000;
		if (amountToWork === "" || amountToWork === 0 || amountToWork === "0") {
		} else {
			this.setState({
				five_thousand: calcDenom,
				denominationTotal: check ? denominationTotal : 0,
			});
		}
	};
	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			this.calculate_five_thousand(true);
		}
	}
	componentWillReceiveProps(nextProps) {
		const auto = nextProps.amountToGive;
		const manual = nextProps.toGiveSelf;
		if (manual === "") {
			if (auto > 0) {
				this.setState({
					amountToWork: auto,
				});
			} else {
				this.setState({
					amountToWork: 0,
				});
			}
		} else if (parseFloat(manual) < 1) {
			this.setState({
				amountToWork: 0,
			});
		} else {
			this.setState({
				amountToWork: manual,
			});
		}
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
			denominationTotal,
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
							<th ref={(r) => (this.ft = r)} style={styles.cellsValue}>
								{five_thousand}
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
							<th ref={(r) => (this.ot = r)} style={styles.cellsValue}>
								{}
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
							<th ref={(r) => (this.fh = r)} style={styles.cellsValue}>
								{}
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
							<th ref={(r) => (this.oh = r)} style={styles.cellsValue}>
								{}
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
							<th ref={(r) => (this.fif = r)} style={styles.cellsValue}></th>
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
							<th ref={(r) => (this.twe = r)} style={styles.cellsValue}></th>
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
							<th ref={(r) => (this.ten = r)} style={styles.cellsValue}></th>
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
							<th ref={(r) => (this.fiv = r)} style={styles.cellsValue}></th>
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
							<th ref={(r) => (this.two = r)} style={styles.cellsValue}></th>
						</tr>
						<tr>
							<th style={styles.cells}>1x</th>
							<th ref={(r) => (this.one = r)} style={styles.cellsValue}></th>
						</tr>
						<tr>
							<th style={styles.cells}>Total</th>
							<th ref={(r) => (this.ttl = r)} style={styles.cellsValue}>
								{denominationTotal.toString()}
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
