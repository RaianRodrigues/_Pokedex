import { Center, Heading, Button, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface GettingStartedProps {

	onGettingStartedClick: () => void;

}

const GettingStarted: React.FC<GettingStartedProps> = ({ onGettingStartedClick }) => {

	const [typedText, setTypedText] = useState("");

	const [animationComplete, setAnimationComplete] = useState(false);

	const controls = useAnimation();

	const HeadingText = "PokedexApp";

	useEffect(() => {

		let currentIndex = 0;

		const typingInterval = setInterval(() => {

			if (currentIndex <= HeadingText.length) {

				setTypedText(HeadingText.slice(0, currentIndex));

				currentIndex++;

			} else {

				clearInterval(typingInterval);

				setAnimationComplete(true);

				controls.start("visible");

			}

		}, 150);

		return () => clearInterval(typingInterval);

	}, [controls]);

	return (

		<Center h={"100vh"} w={"100vw"} flexDirection="column" gap={"5rem"}>

			<Heading

				sx={{

					position: "relative",

					_after: {

						content: '""',

						position: "absolute",

						right: "-10px",

						top: "0",

						bottom: "0",

						width: "1",

						bg: "#fff",

						animation: "blink-caret 1.3s steps(2, start) infinite",

						"@keyframes blink-caret": {

							to: {

								visibility: "hidden",

							},

						},
					},

				}}

				color={"#fff"}

				fontSize={"5xl"}

			>

				{typedText}

			</Heading>

			<motion.div

				initial="hidden"

				animate={controls}

				variants={{

					visible: { opacity: 1, scale: 1 },

					hidden: { opacity: 0, scale: 0 },

				}}

			>

				<Text>facere minus rem. Repudiandae aperiam, voluptatum totam dolorem odit esse tenetur.</Text>

			</motion.div>

			<motion.div

				initial="hidden"

				animate={controls}

				variants={{

					visible: { opacity: 1, scale: 1 },

					hidden: { opacity: 0, scale: 0 },

				}}

			>

				<Button

					size="lg"

					bg={"#31748f"}

					color={"#fff"}

					_hover={{

						bg: "#31748fCC",

					}}

					style={{ display: animationComplete ? "block" : "none" }}

					onClick={onGettingStartedClick}

				>
					Getting Started

				</Button>

			</motion.div>

		</Center>

	);

};

export default GettingStarted;