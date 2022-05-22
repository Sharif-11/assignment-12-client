import React from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Parts from "./Parts";
import Reviews from "./Reviews";

const Home = () => {
	return (
		<div>
			<Header />
			<Banner />
			<Parts />
			<BusinessSummary />
			<Reviews />

			<Footer />
		</div>
	);
};

export default Home;
