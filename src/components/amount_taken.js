import React from "react";
import { connect } from "react-redux";
import {
	total_amount_taken,
	calculate_remaining
} from "../redux/actions/amount_taken";

class AmountTaken extends React.Component {
	state = {
		five_thousand: 0,
		one_thousand: 0,
		five_hundred: 0,
		one_hundred: 0,
		fifty: 0,
		twenty: 0,
		ten: 0,
		five: 0,
		two: 0,
		one: 0
	};
	ontotalAmountChange = e => {
		for (let i = 0; i < document.getElementsByClassName("denom").length; i++) {
			document.getElementsByClassName("denom")[i].value = parseInt("");
		}
		this.props.total_amount_taken(e.target.value);
		this.props.calculate_remaining(this.props.totalBill, null);
		this.setState({
			five_thousand: 0,
			one_thousand: 0,
			five_hundred: 0,
			one_hundred: 0,
			fifty: 0,
			twenty: 0,
			ten: 0,
			five: 0,
			two: 0,
			one: 0
		});
	};
	onDenomChange = e => {
		const {
			five_thousand,
			one_thousand,
			five_hundred,
			one_hundred,
			fifty,
			twenty,
			ten,
			five,
			two,
			one
		} = this.state;
		const numbers = /^[0-9]+$/;
		if (e.target.value.match(numbers) || e.target.value === "") {
			this.setState({
				[e.target.id]: e.target.value * parseInt(e.target.name)
			});
			document.getElementById("total_amount").value = parseFloat("").toFixed(2);

			if (e.target.name === "5000") {
				this.props.total_amount_taken(
					5000 * e.target.value +
						parseInt(one_thousand) +
						parseInt(five_hundred) +
						parseInt(one_hundred) +
						parseInt(fifty) +
						parseInt(twenty) +
						parseInt(ten) +
						parseInt(five) +
						parseInt(two) +
						parseInt(one)
				);
				this.props.calculate_remaining(
					this.props.totalBill,
					5000 * e.target.value +
						parseInt(one_thousand) +
						parseInt(five_hundred) +
						parseInt(one_hundred) +
						parseInt(fifty) +
						parseInt(twenty) +
						parseInt(ten) +
						parseInt(five) +
						parseInt(two) +
						parseInt(one)
				);
			}
			if (e.target.name === "1000") {
				this.props.total_amount_taken(
					parseInt(five_thousand) +
						1000 * e.target.value +
						parseInt(five_hundred) +
						parseInt(one_hundred) +
						parseInt(fifty) +
						parseInt(twenty) +
						parseInt(ten) +
						parseInt(five) +
						parseInt(two) +
						parseInt(one)
				);
				this.props.calculate_remaining(
					this.props.totalBill,
					parseInt(five_thousand) +
						1000 * e.target.value +
						parseInt(five_hundred) +
						parseInt(one_hundred) +
						parseInt(fifty) +
						parseInt(twenty) +
						parseInt(ten) +
						parseInt(five) +
						parseInt(two) +
						parseInt(one)
				);
			}
			if (e.target.name === "500") {
				this.props.total_amount_taken(
					parseInt(five_thousand) +
						parseInt(one_thousand) +
						500 * e.target.value +
						parseInt(one_hundred) +
						parseInt(fifty) +
						parseInt(twenty) +
						parseInt(ten) +
						parseInt(five) +
						parseInt(two) +
						parseInt(one)
				);
				this.props.calculate_remaining(
					this.props.totalBill,
					parseInt(five_thousand) +
						parseInt(one_thousand) +
						500 * e.target.value +
						parseInt(one_hundred) +
						parseInt(fifty) +
						parseInt(twenty) +
						parseInt(ten) +
						parseInt(five) +
						parseInt(two) +
						parseInt(one)
				);
			}
			if (e.target.name === "100") {
				this.props.total_amount_taken(
					parseInt(five_thousand) +
						parseInt(one_thousand) +
						parseInt(five_hundred) +
						100 * e.target.value +
						parseInt(fifty) +
						parseInt(twenty) +
						parseInt(ten) +
						parseInt(five) +
						parseInt(two) +
						parseInt(one)
				);
				this.props.calculate_remaining(
					this.props.totalBill,
					parseInt(five_thousand) +
						parseInt(one_thousand) +
						parseInt(five_hundred) +
						100 * e.target.value +
						parseInt(fifty) +
						parseInt(twenty) +
						parseInt(ten) +
						parseInt(five) +
						parseInt(two) +
						parseInt(one)
				);
			}
			if (e.target.name === "50") {
				this.props.total_amount_taken(
					parseInt(five_thousand) +
						parseInt(one_thousand) +
						parseInt(five_hundred) +
						parseInt(one_hundred) +
						50 * e.target.value +
						parseInt(twenty) +
						parseInt(ten) +
						parseInt(five) +
						parseInt(two) +
						parseInt(one)
				);
				this.props.calculate_remaining(
					this.props.totalBill,
					parseInt(five_thousand) +
						parseInt(one_thousand) +
						parseInt(five_hundred) +
						parseInt(one_hundred) +
						50 * e.target.value +
						parseInt(twenty) +
						parseInt(ten) +
						parseInt(five) +
						parseInt(two) +
						parseInt(one)
				);
			}
			if (e.target.name === "20") {
				this.props.total_amount_taken(
					parseInt(five_thousand) +
						parseInt(one_thousand) +
						parseInt(five_hundred) +
						parseInt(one_hundred) +
						parseInt(fifty) +
						20 * e.target.value +
						parseInt(ten) +
						parseInt(five) +
						parseInt(two) +
						parseInt(one)
				);
				this.props.calculate_remaining(
					this.props.totalBill,
					parseInt(five_thousand) +
						parseInt(one_thousand) +
						parseInt(five_hundred) +
						parseInt(one_hundred) +
						parseInt(fifty) +
						20 * e.target.value +
						parseInt(ten) +
						parseInt(five) +
						parseInt(two) +
						parseInt(one)
				);
			}
			if (e.target.name === "10") {
				this.props.total_amount_taken(
					parseInt(five_thousand) +
						parseInt(one_thousand) +
						parseInt(five_hundred) +
						parseInt(one_hundred) +
						parseInt(fifty) +
						parseInt(twenty) +
						10 * e.target.value +
						parseInt(five) +
						parseInt(two) +
						parseInt(one)
				);
				this.props.calculate_remaining(
					this.props.totalBill,
					parseInt(five_thousand) +
						parseInt(one_thousand) +
						parseInt(five_hundred) +
						parseInt(one_hundred) +
						parseInt(fifty) +
						parseInt(twenty) +
						10 * e.target.value +
						parseInt(five) +
						parseInt(two) +
						parseInt(one)
				);
			}
			if (e.target.name === "5") {
				this.props.total_amount_taken(
					parseInt(five_thousand) +
						parseInt(one_thousand) +
						parseInt(five_hundred) +
						parseInt(one_hundred) +
						parseInt(fifty) +
						parseInt(twenty) +
						parseInt(ten) +
						5 * e.target.value +
						parseInt(two) +
						parseInt(one)
				);
				this.props.calculate_remaining(
					this.props.totalBill,
					parseInt(five_thousand) +
						parseInt(one_thousand) +
						parseInt(five_hundred) +
						parseInt(one_hundred) +
						parseInt(fifty) +
						parseInt(twenty) +
						parseInt(ten) +
						5 * e.target.value +
						parseInt(two) +
						parseInt(one)
				);
			}
			if (e.target.name === "2") {
				this.props.total_amount_taken(
					parseInt(five_thousand) +
						parseInt(one_thousand) +
						parseInt(five_hundred) +
						parseInt(one_hundred) +
						parseInt(fifty) +
						parseInt(twenty) +
						parseInt(ten) +
						parseInt(five) +
						2 * e.target.value +
						parseInt(one)
				);
				this.props.calculate_remaining(
					this.props.totalBill,
					parseInt(five_thousand) +
						parseInt(one_thousand) +
						parseInt(five_hundred) +
						parseInt(one_hundred) +
						parseInt(fifty) +
						parseInt(twenty) +
						parseInt(ten) +
						parseInt(five) +
						2 * e.target.value +
						parseInt(one)
				);
			}
			if (e.target.name === "1") {
				this.props.total_amount_taken(
					parseInt(five_thousand) +
						parseInt(one_thousand) +
						parseInt(five_hundred) +
						parseInt(one_hundred) +
						parseInt(fifty) +
						parseInt(twenty) +
						parseInt(ten) +
						parseInt(five) +
						parseInt(two) +
						1 * e.target.value
				);
				this.props.calculate_remaining(
					this.props.totalBill,
					parseInt(five_thousand) +
						parseInt(one_thousand) +
						parseInt(five_hundred) +
						parseInt(one_hundred) +
						parseInt(fifty) +
						parseInt(twenty) +
						parseInt(ten) +
						parseInt(five) +
						parseInt(two) +
						1 * e.target.value
				);
			}
		}
	};

	render() {
		const {
			five_thousand,
			one_thousand,
			five_hundred,
			one_hundred,
			fifty,
			twenty,
			ten,
			five,
			two,
			one
		} = this.state;
		return (
			<div>
				<table
					style={{
						border: "2px solid black",
						borderRadius: "10px",
						backgroundColor: "#f7e9d2"
					}}
				>
					<tbody>
						<tr>
							<th style={{ textAlign: "right" }}>Amount Taken</th>
							<th>
								<input
									type="number"
									id="total_amount"
									onChange={this.ontotalAmountChange}
									style={styles.input}
									placeholder="Amount Taken"
								/>
							</th>
							<th style={styles.denom}>
								{isNaN(this.props.total)
									? "0"
									: this.props.total
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</th>
						</tr>
						<tr>
							<th style={{ textAlign: "right" }}>5000 x</th>
							<th>
								<input
									className="denom"
									name="5000"
									id="five_thousand"
									onChange={this.onDenomChange}
									type="number"
									style={styles.input}
								/>
							</th>
							<th style={styles.denom}>
								{five_thousand.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</th>
						</tr>
						<tr>
							<th style={{ textAlign: "right" }}>1000 x</th>
							<th>
								<input
									className="denom"
									name="1000"
									id="one_thousand"
									onChange={this.onDenomChange}
									type="number"
									style={styles.input}
								/>
							</th>
							<th style={styles.denom}>
								{one_thousand.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</th>
						</tr>
						<tr>
							<th style={{ textAlign: "right" }}>500 x</th>
							<th>
								<input
									className="denom"
									name="500"
									id="five_hundred"
									onChange={this.onDenomChange}
									type="number"
									style={styles.input}
								/>
							</th>
							<th style={styles.denom}>
								{five_hundred.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</th>
						</tr>
						<tr>
							<th style={{ textAlign: "right" }}>100 x</th>
							<th>
								<input
									className="denom"
									name="100"
									id="one_hundred"
									onChange={this.onDenomChange}
									type="number"
									style={styles.input}
								/>
							</th>
							<th style={styles.denom}>
								{one_hundred.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</th>
						</tr>
						<tr>
							<th style={{ textAlign: "right" }}>50 x</th>
							<th>
								<input
									className="denom"
									name="50"
									id="fifty"
									onChange={this.onDenomChange}
									type="number"
									style={styles.input}
								/>
							</th>
							<th style={styles.denom}>
								{fifty.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</th>
						</tr>
						<tr>
							<th style={{ textAlign: "right" }}>20 x</th>
							<th>
								<input
									className="denom"
									name="20"
									id="twenty"
									onChange={this.onDenomChange}
									type="number"
									style={styles.input}
								/>
							</th>
							<th style={styles.denom}>
								{twenty.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</th>
						</tr>
						<tr>
							<th style={{ textAlign: "right" }}>10 x</th>
							<th>
								<input
									className="denom"
									name="10"
									id="ten"
									onChange={this.onDenomChange}
									type="number"
									style={styles.input}
								/>
							</th>
							<th style={styles.denom}>
								{ten.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</th>
						</tr>
						<tr>
							<th style={{ textAlign: "right" }}>5 x</th>
							<th>
								<input
									className="denom"
									name="5"
									id="five"
									onChange={this.onDenomChange}
									type="number"
									style={styles.input}
								/>
							</th>
							<th style={styles.denom}>
								{five.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</th>
						</tr>
						<tr>
							<th style={{ textAlign: "right" }}>2 x</th>
							<th>
								<input
									className="denom"
									name="2"
									id="two"
									onChange={this.onDenomChange}
									type="number"
									style={styles.input}
								/>
							</th>
							<th style={styles.denom}>
								{two.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</th>
						</tr>
						<tr>
							<th style={{ textAlign: "right" }}>1 x</th>
							<th>
								<input
									className="denom"
									name="1"
									id="one"
									onChange={this.onDenomChange}
									type="number"
									style={styles.input}
								/>
							</th>
							<th style={styles.denom}>
								{one.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</th>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
const styles = {
	input: { height: "30px	", width: "100px", margin: "5px" },
	denom: { width: "100px" }
};
const mapStateToProps = state => ({
	totalBill: state.addList.total,
	total: state.amount_taken.total
});
export default connect(mapStateToProps, {
	total_amount_taken,
	calculate_remaining
})(AmountTaken);
