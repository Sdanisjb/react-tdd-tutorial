import React from "react";
import { render, screen } from "@testing-library/react";

import { MainPage } from "../components/MainPage";

beforeEach(() => render(<MainPage />));

describe("Main Page Mount", () => {
	it("must display the main page title", () => {
		expect(
			screen.getByRole("heading", { name: /simpsons quotes/i })
		).toBeInTheDocument();
	});
});

describe("Quotes list", () => {
	it("must display 3 quotes", async () => {
		expect(await screen.findAllByRole("listitem")).toHaveLength(3);
	});

	it("must contain quote value", async () => {
		const [firstQuote, secondQuote, thirdQuote] = await screen.findAllByRole(
			"listitem"
		);
		expect(firstQuote.textContent).toBe("Gah, stupid sexy Flanders!");
		expect(secondQuote.textContent).toBe("Eat my shorts");
		expect(thirdQuote.textContent).toBe(
			"Shut up, brain. I got friends now. I don't need you anymore"
		);
	});
});
