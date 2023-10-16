import { Center, Heading, Button } from "@chakra-ui/react";

import { motion, useAnimation } from "framer-motion";

import { useEffect, useState } from "react";

import backImage1 from "../../../../resources/backImage1.png";

interface GettingStartedProps {

	onGettingStartedClick: () => void;

}

const GettingStarted: React.FC<GettingStartedProps> = ({ onGettingStartedClick }) => {

	const [typedText, setTypedText] = useState("");

	const [animationComplete, setAnimationComplete] = useState(false);

	const controls = useAnimation();

	const HeadingText = "_PokedexApp";

	useEffect(() => {

		let currentIndex = 0;

		let timeoutId: NodeJS.Timeout | undefined;

		const typeNextCharacter = () => {

			if (currentIndex <= HeadingText.length) {

				setTypedText(HeadingText.slice(0, currentIndex));

				currentIndex++;

				timeoutId = setTimeout(typeNextCharacter, 150);

			} else {

				setAnimationComplete(true);

				controls.start("visible");

			}

		};

		typeNextCharacter();

		return () => {

			if (timeoutId) {

				clearTimeout(timeoutId);

			}

		};

	}, [controls]);

	return (

		<Center
			h={"100vh"}
			w={"100vw"}
			flexDirection="column"
			gap={"5rem"}
			backgroundImage={backImage1}
			backgroundSize={"cover"}
		>

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

				<Heading size={"sm"} color={"#fff"}>
					A pokedex app made with React js + Electron js + Chakra ui
				</Heading>

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