import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";

import styles from "./App.module.css";
import coverImage from './image/cover.png'

class App extends React.Component {
	state = {
		data: {},
		country: "",
	};

	
	async componentDidMount() {
		const fetchedData = await fetchData();
		this.setState({ data: fetchedData });
	}

	onChangeCountryHandler = async (country) => {
		const fetchedData = await fetchData(country);
		this.setState({ data: fetchedData,country:country});
	};

	render() {
		const { data , country} = this.state;
		return (
			<div className={styles.container}>
				<img src={coverImage} alt="COVID-19"></img>
				<Cards data={data} />
				<CountryPicker onChangeCountryHandler={this.onChangeCountryHandler} />
				<Chart  data={data} country= {country} />
			</div>
		);
	}
}

export default App;
