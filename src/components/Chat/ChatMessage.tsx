"use client";

import React from "react";
import { useTheme } from "@/theme/ThemeContext";

interface ChatMessageProps {
	message: string;
	isBot: boolean;
	component?: React.ReactNode;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
	message,
	isBot,
	component,
}) => {
	const { theme } = useTheme();

	return (
		<div className={`flex ${isBot ? "justify-start" : "justify-end"} mb-4`}>
			<div
				style={{
					backgroundColor: isBot ? theme.accent : theme.primary,
					color: isBot ? theme.text : theme.background,
					borderColor: theme.border,
				}}
				className={`max-w-[85%] md:max-w-[70%] rounded-lg p-3 md:p-4 border`}
			>
				<p className='text-sm md:text-base break-words'>{message}</p>
				{component && (
					<div
						style={{ borderColor: theme.border }}
						className='mt-3 md:mt-4 bg-white p-2 md:p-4 rounded-md shadow-sm overflow-x-auto border'
					>
						{component}
					</div>
				)}
			</div>
		</div>
	);
};
