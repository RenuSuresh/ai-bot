"use client";

import React from "react";
import { useTheme } from "@/theme/ThemeContext";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "outline";
	size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
	children,
	variant = "primary",
	size = "md",
	className = "",
	style,
	...props
}) => {
	const { theme } = useTheme();
	const baseStyles =
		"rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

	const getVariantStyles = () => {
		switch (variant) {
			case "primary":
				return {
					backgroundColor: theme.primary,
					color: theme.background,
					"&:hover": {
						backgroundColor: theme.secondary,
					},
				};
			case "secondary":
				return {
					backgroundColor: theme.secondary,
					color: theme.background,
					"&:hover": {
						filter: "brightness(90%)",
					},
				};
			case "outline":
				return {
					backgroundColor: "transparent",
					color: theme.primary,
					border: `2px solid ${theme.primary}`,
					"&:hover": {
						backgroundColor: theme.accent,
					},
				};
			default:
				return {};
		}
	};

	const sizes = {
		sm: "px-3 py-1.5 text-sm",
		md: "px-4 py-2 text-base",
		lg: "px-6 py-3 text-lg",
	};

	return (
		<button
			className={`${baseStyles} ${sizes[size]} ${className}`}
			style={{
				...getVariantStyles(),
				...style,
			}}
			{...props}
		>
			{children}
		</button>
	);
};
