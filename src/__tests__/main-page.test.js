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
});
