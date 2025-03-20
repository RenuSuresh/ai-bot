"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { ChatMessage } from "@/components/Chat/ChatMessage";
import { useTheme } from "@/theme/ThemeContext";
import { VendorType } from "@/theme/theme.config";

export default function Home() {
	const { setVendor, theme } = useTheme();
	const [messages, setMessages] = React.useState<
		Array<{
			text: string;
			isBot: boolean;
			component?: React.ReactNode;
		}>
	>([
		{
			text: "Hello! I'm your UI assistant. I can show you various UI components like buttons, product cards, and more. What would you like to see?",
			isBot: true,
		},
	]);
	const [input, setInput] = React.useState("");

	const handleSendMessage = () => {
		if (!input.trim()) return;

		// Add user message
		setMessages((prev) => [...prev, { text: input, isBot: false }]);

		// Simulate bot response with components
		const lowerInput = input.toLowerCase();
		let botResponse: {
			text: string;
			isBot: boolean;
			component?: React.ReactNode;
		} = {
			text: "",
			isBot: true,
		};

		if (lowerInput.includes("button")) {
			botResponse = {
				text: "Here are different button variants:",
				isBot: true,
				component: (
					<div className='flex gap-2 flex-wrap'>
						<Button variant='primary'>Primary</Button>
						<Button variant='secondary'>Secondary</Button>
						<Button variant='outline'>Outline</Button>
					</div>
				),
			};
		} else if (lowerInput.includes("product") || lowerInput.includes("card")) {
			botResponse = {
				text: "Here's a sample product card:",
				isBot: true,
				component: (
					<ProductCard
						title='Sample Product'
						price={999}
						description='This is a sample product description. It showcases how the product card component looks.'
						imageUrl='/placeholder.jpg'
						onAddToCart={() => alert("Added to cart!")}
					/>
				),
			};
		} else {
			botResponse = {
				text: "I can show you various UI components. Try asking for 'button' or 'product card'!",
				isBot: true,
			};
		}

		setMessages((prev) => [...prev, botResponse]);
		setInput("");
	};

	return (
		<main
			className='w-full h-screen flex flex-col overflow-hidden px-2 py-4 md:p-4'
			style={{ backgroundColor: theme.background }}
		>
			<div className='flex justify-end mb-4 max-w-4xl mx-auto w-full'>
				<select
					onChange={(e) => setVendor(e.target.value as VendorType)}
					className='rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none text-sm'
					style={{ borderColor: theme.border, color: theme.text }}
				>
					<option value='pharmeasy'>PharmEasy</option>
					<option value='thyrocare'>Thyrocare</option>
					<option value='rio'>Rio</option>
				</select>
			</div>
			<div
				className='flex-1 w-full max-w-4xl mx-auto rounded-lg border bg-white shadow-sm flex flex-col overflow-hidden'
				style={{ borderColor: theme.border }}
			>
				<div className='flex-1 overflow-y-auto p-2 md:p-4'>
					{messages.map((message, index) => (
						<ChatMessage
							key={index}
							message={message.text}
							isBot={message.isBot}
							component={message.component}
						/>
					))}
				</div>
				<div
					className='p-2 md:p-4 border-t'
					style={{ borderColor: theme.border }}
				>
					<div className='flex gap-2'>
						<input
							type='text'
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
							placeholder='Ask about UI components...'
							className='flex-1 min-w-0 rounded-lg border border-gray-300 px-3 py-2 md:px-4 focus:border-blue-500 focus:outline-none text-sm md:text-base'
						/>
						<Button onClick={handleSendMessage}>Send</Button>
					</div>
				</div>
			</div>
		</main>
	);
}
