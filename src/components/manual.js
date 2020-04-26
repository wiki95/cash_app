import React from "react";
import { connect } from "react-redux";
import { givenDenomChange } from "../redux/actions/amount_given";

class Manual extends React.Component {
	denomChange = (e) => {
		this.props.givenDenomChange(e.target.name, e.target.value);
	};
	render() {
		const {
			five_thousand,
			one_hundred,
			five_hundred,
			one_thousand,
			fifty,
			twenty,
			ten,
			five,
			two,
			one,
		} = this.props.givenDenoms;
		const { toGiveSelf, remaining } = this.props;
		return (
			<div>
				<h3>
					Your Amnt :{" "}
					{(
						parseInt(five_thousand === "" ? 0 : five_thousand) * 5000 +
						parseInt(one_thousand === "" ? 0 : one_thousand) * 1000 +
						parseInt(five_hundred === "" ? 0 : five_hundred) * 500 +
						parseInt(one_hundred === "" ? 0 : one_hundred) * 100 +
						parseInt(fifty === "" ? 0 : fifty) * 50 +
						parseInt(twenty === "" ? 0 : twenty) * 20 +
						parseInt(ten === "" ? 0 : ten) * 10 +
						parseInt(five === "" ? 0 : five) * 5 +
						parseInt(two === "" ? 0 : two) * 2 +
						parseInt(one === "" ? 0 : one) * 1
					)
						.toString()
						.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
				</h3>
				<h3
					style={{
						color:
							parseFloat(
								parseFloat(toGiveSelf) > 0
									? parseFloat(toGiveSelf) -
											(parseInt(five_thousand === "" ? 0 : five_thousand) *
												5000 +
												parseInt(one_thousand === "" ? 0 : one_thousand) *
													1000 +
												parseInt(five_hundred === "" ? 0 : five_hundred) * 500 +
												parseInt(one_hundred === "" ? 0 : one_hundred) * 100 +
												parseInt(fifty === "" ? 0 : fifty) * 50 +
												parseInt(twenty === "" ? 0 : twenty) * 20 +
												parseInt(ten === "" ? 0 : ten) * 10 +
												parseInt(five === "" ? 0 : five) * 5 +
												parseInt(two === "" ? 0 : two) * 2 +
												parseInt(one === "" ? 0 : one) * 1)
									: parseFloat(remaining) -
											(parseInt(five_thousand === "" ? 0 : five_thousand) *
												5000 +
												parseInt(one_thousand === "" ? 0 : one_thousand) *
													1000 +
												parseInt(five_hundred === "" ? 0 : five_hundred) * 500 +
												parseInt(one_hundred === "" ? 0 : one_hundred) * 100 +
												parseInt(fifty === "" ? 0 : fifty) * 50 +
												parseInt(twenty === "" ? 0 : twenty) * 20 +
												parseInt(ten === "" ? 0 : ten) * 10 +
												parseInt(five === "" ? 0 : five) * 5 +
												parseInt(two === "" ? 0 : two) * 2 +
												parseInt(one === "" ? 0 : one) * 1)
							).toFixed(2) !== parseFloat("0.00").toFixed(2)
								? "red"
								: "green",
					}}
				>
					Difference :{" "}
					{parseFloat(
						parseFloat(toGiveSelf) > 0
							? parseFloat(toGiveSelf) -
									(parseInt(five_thousand === "" ? 0 : five_thousand) * 5000 +
										parseInt(one_thousand === "" ? 0 : one_thousand) * 1000 +
										parseInt(five_hundred === "" ? 0 : five_hundred) * 500 +
										parseInt(one_hundred === "" ? 0 : one_hundred) * 100 +
										parseInt(fifty === "" ? 0 : fifty) * 50 +
										parseInt(twenty === "" ? 0 : twenty) * 20 +
										parseInt(ten === "" ? 0 : ten) * 10 +
										parseInt(five === "" ? 0 : five) * 5 +
										parseInt(two === "" ? 0 : two) * 2 +
										parseInt(one === "" ? 0 : one) * 1)
							: parseFloat(remaining) -
									(parseInt(five_thousand === "" ? 0 : five_thousand) * 5000 +
										parseInt(one_thousand === "" ? 0 : one_thousand) * 1000 +
										parseInt(five_hundred === "" ? 0 : five_hundred) * 500 +
										parseInt(one_hundred === "" ? 0 : one_hundred) * 100 +
										parseInt(fifty === "" ? 0 : fifty) * 50 +
										parseInt(twenty === "" ? 0 : twenty) * 20 +
										parseInt(ten === "" ? 0 : ten) * 10 +
										parseInt(five === "" ? 0 : five) * 5 +
										parseInt(two === "" ? 0 : two) * 2 +
										parseInt(one === "" ? 0 : one) * 1)
					)
						.toFixed(2)
						.toString()
						.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
				</h3>

				<table width="100%" border="2">
					<tbody>
						<tr>
							<th style={styles.cells}>
								5000x
								<input
									className="denomGiven"
									name="five_thousand"
									onChange={this.denomChange}
									type="number"
									style={styles.manualInput}
									value={five_thousand}
								/>
							</th>
							<th style={styles.cellsValue}>
								{five_thousand === ""
									? ""
									: (parseInt(five_thousand) * 5000)
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</th>
						</tr>
						<tr>
							<th style={styles.cells}>
								1000x
								<input
									className="denomGiven"
									name="one_thousand"
									onChange={this.denomChange}
									type="number"
									style={styles.manualInput}
									value={one_thousand}
								/>
							</th>
							<th style={styles.cellsValue}>
								{one_thousand === ""
									? ""
									: (parseInt(one_thousand) * 1000)
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</th>
						</tr>
						<tr>
							<th style={styles.cells}>
								500x
								<input
									className="denomGiven"
									name="five_hundred"
									onChange={this.denomChange}
									type="number"
									style={styles.manualInput}
									value={five_hundred}
								/>
							</th>
							<th style={styles.cellsValue}>
								{five_hundred === ""
									? ""
									: (parseInt(five_hundred) * 500)
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</th>
						</tr>
						<tr>
							<th style={styles.cells}>
								100x
								<input
									className="denomGiven"
									name="one_hundred"
									onChange={this.denomChange}
									type="number"
									style={styles.manualInput}
									value={one_hundred}
								/>
							</th>
							<th style={styles.cellsValue}>
								{one_hundred === ""
									? ""
									: (parseInt(one_hundred) * 100)
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</th>
						</tr>
						<tr>
							<th style={styles.cells}>
								50x
								<input
									className="denomGiven"
									name="fifty"
									onChange={this.denomChange}
									type="number"
									style={styles.manualInput}
									value={fifty}
								/>
							</th>
							<th style={styles.cellsValue}>
								{fifty === ""
									? ""
									: (parseInt(fifty) * 50)
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</th>
						</tr>
						<tr>
							<th style={styles.cells}>
								20x
								<input
									className="denomGiven"
									name="twenty"
									onChange={this.denomChange}
									type="number"
									style={styles.manualInput}
									value={twenty}
								/>
							</th>
							<th style={styles.cellsValue}>
								{twenty === ""
									? ""
									: (parseInt(twenty) * 20)
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</th>
						</tr>
						<tr>
							<th style={styles.cells}>
								10x
								<input
									className="denomGiven"
									name="ten"
									onChange={this.denomChange}
									type="number"
									style={styles.manualInput}
									value={ten}
								/>
							</th>
							<th style={styles.cellsValue}>
								{ten === ""
									? ""
									: (parseInt(ten) * 10)
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</th>
						</tr>
						<tr>
							<th style={styles.cells}>
								5x
								<input
									className="denomGiven"
									name="five"
									onChange={this.denomChange}
									type="number"
									style={styles.manualInput}
									value={five}
								/>
							</th>
							<th style={styles.cellsValue}>
								{five === ""
									? ""
									: (parseInt(five) * 5)
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</th>
						</tr>
						<tr>
							<th style={styles.cells}>
								2x
								<input
									className="denomGiven"
									name="two"
									onChange={this.denomChange}
									type="number"
									style={styles.manualInput}
									value={two}
								/>
							</th>
							<th style={styles.cellsValue}>
								{two === ""
									? ""
									: (parseInt(two) * 2)
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</th>
						</tr>
						<tr>
							<th style={styles.cells}>
								1x
								<input
									className="denomGiven"
									name="one"
									onChange={this.denomChange}
									type="number"
									style={styles.manualInput}
									value={one}
								/>
							</th>
							<th style={styles.cellsValue}>
								{one === ""
									? ""
									: (parseInt(one) * 1)
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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
	},
	cellsValue: {
		width: "125px",
		textAlign: "left",
		fontSize: "14px",
	},
	manualInput: {
		height: "25px",
		width: "60px",
		fontSize: "15px",
	},
};
const mapStateToProps = (state) => ({
	givenDenoms: state.amount_given,
});
export default connect(mapStateToProps, { givenDenomChange })(Manual);
