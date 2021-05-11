import { createGlobalStyle } from "styled-components";
import { Colors } from "utils/colors";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	button {
		cursor: pointer;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	body, input, textarea, button {
		font: 400 1rem "Roboto", sans-serif;
	}
	html, body {
		height: 100%;
	}
  .main_container {
    width: 100%;
    height: 100%;

    background-color: ${Colors.black_600};
  }
`;
