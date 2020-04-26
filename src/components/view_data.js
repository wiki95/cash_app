import React from "react";

class ViewData extends React.Component {
	render() {
		return (
			<div style={styles.container}>
				<button onClick={this.onReset} style={styles.button}>
					View Records
				</button>
			</div>
		);
	}
}
const styles = {
	container: {
		marginTop: "10px",
		display: "flex",
		justifyContent: "space-between",
	},
	button: {
		cursor: "pointer",
		border: "1px solid black",
		borderRadius: "3px",
		fontSize: "18px",
	},
};

export default ViewData;
