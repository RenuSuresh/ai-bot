"use client";
import React, { createContext, useContext, useState } from "react";
import { VendorType, vendorThemes } from "./theme.config";

interface ThemeContextType {
	vendor: VendorType;
	setVendor: (vendor: VendorType) => void;
	theme: typeof vendorThemes.pharmeasy;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [vendor, setVendor] = useState<VendorType>("pharmeasy");

	const value = {
		vendor,
		setVendor,
		theme: vendorThemes[vendor],
	};

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
