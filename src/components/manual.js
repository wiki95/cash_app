import React from "react";

class Manual extends React.Component {
	render() {
		return (
			<table width="100%" border="2">
				<tbody>
					<tr>
						<th style={styles.cells}>0x</th>
						<th style={styles.cellsValue}>3</th>
					</tr>
					<tr>
						<th style={styles.cells}>Manual </th>
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
		fontSize: "20px",
	},
};
export default Manual;
