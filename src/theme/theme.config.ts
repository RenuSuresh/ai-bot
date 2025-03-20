export type VendorType = "pharmeasy" | "thyrocare" | "rio";

interface ThemeColors {
	primary: string;
	secondary: string;
	accent: string;
	background: string;
	text: string;
	border: string;
}

export const vendorThemes: Record<VendorType, ThemeColors> = {
	pharmeasy: {
		primary: "#10847E",
		secondary: "#4CAF50",
		accent: "#E7FAFE",
		background: "#FFFFFF",
		text: "#4B4B4B",
		border: "#E0E0E0",
	},
	thyrocare: {
		primary: "#E31837",
		secondary: "#FF6B00",
		accent: "#FFF4F4",
		background: "#FFFFFF",
		text: "#333333",
		border: "#E0E0E0",
	},
	rio: {
		primary: "#0070F3",
		secondary: "#0EA5E9",
		accent: "#F0F7FF",
		background: "#FFFFFF",
		text: "#1F2937",
		border: "#E5E7EB",
	},
};
