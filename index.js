import "bootstrap/dist/css/bootstrap.min.css";
import "/src/css/style.css";
import "/src/js/learn_var/learn_var";
import "/src/js/learn_condition/condition";
import "/src/js/learn_loop/loop";
import "/src/js/HO/ho";

import React from "react";
import { render } from "react-dom";

import CV from "/src/js/CV/CV";
import { HelloWorld } from "./src/js/learn_condition/condition";
import { Nav } from "./src/js/CV/CV";
import {arr} from '/src/js/common'

function App() {
	return (
		<div>
			<Nav />
			<CV />
			{/* <HelloWorld />  */}
		</div>
	);
}

render(<App />, document.getElementById("app"));


