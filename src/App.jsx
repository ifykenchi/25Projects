import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-modal-popup/modal-test";

function App() {
	return (
		<div className='App'>
			{/* Accordian component */}
			{/* <Accordian/> */}

			{/* Random color component */}
			{/* <RandomColor/> */}

			{/* Star rating component */}
			{/* <StarRating noOfStars={10}/> */}

			{/* Image slider component */}
			{/* <ImageSlider
				url={"https://picsum.photos/v2/list"}
				limit={"10"}
				page={"1"}
			/> */}

			{/* Load more products component */}
			{/* <LoadMoreData /> */}

			{/* Tree view component/menu UI component/ recursive navigation menu */}
			{/* <TreeView menus={menus} /> */}

			{/* QR code generator */}
			{/* <QRCodeGenerator /> */}

			{/* light and dark theme switch */}
			{/* <LightDarkMode /> */}

			{/* Scroll Indicator component */}
			{/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

			{/* Custom tabs component */}
			{/* <TabTest /> */}

			{/* Custom Modal popup */}
			<ModalTest />
		</div>
	);
}

export default App;
