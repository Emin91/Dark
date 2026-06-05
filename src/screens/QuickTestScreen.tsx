import { memo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootNavigation, RootStackParamList } from "../navigation/Routing";
import { useDefaultStore } from "../store/useDefaultStore";

export interface QuickTestOption {
	title: string;
	isCorrect: boolean;
}

export interface QuickTestQuestion {
	title: string;
	options: QuickTestOption[];
}

const questions: QuickTestQuestion[] = [
	{
		title: "You arrive at a private event.\nWhat do you do first?",
		options: [
			{ title: "Head straight inside", isCorrect: false },
			{ title: "Look around the space", isCorrect: false },
			{ title: "Greet the host first", isCorrect: true },
		],
	},
	{
		title: "At dinner, your phone\nlights up.",
		options: [
			{ title: "Check it immediately", isCorrect: false },
			{ title: "Glance quickly", isCorrect: false },
			{ title: "Ignore it until appropriate", isCorrect: true },
		],
	},
	{
		title: "Dress code is unclear.\nYou choose:",
		options: [
			{ title: "Casual and safe", isCorrect: false },
			{ title: "Something eye-catching", isCorrect: false },
			{
				title: "Slightly more refined than expected",
				isCorrect: true,
			},
		],
	},
	{
		title: "You disagree in a\nconversation.",
		options: [
			{ title: "Defend your point actively", isCorrect: false },
			{ title: "Stay silent", isCorrect: false },
			{
				title: "Respond calmly without tension",
				isCorrect: true,
			},
		],
	},
	{
		title: "You leave the event.",
		options: [
			{ title: "Leave quietly", isCorrect: false },
			{ title: "Message later", isCorrect: false },
			{ title: "Say goodbye to the host", isCorrect: true },
		],
	},
];

const shuffle = <T,>(array: T[]) => {
	const copy = [...array];

	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));

		[copy[i], copy[j]] = [copy[j], copy[i]];
	}

	return copy;
};

export const QuickTestScreen = memo(() => {
	const navigation = useNavigation<RootNavigation>();
	const route = useRoute<RouteProp<RootStackParamList, "QuickTest">>();
	const setQuicTestScoreInPercent = useDefaultStore(state => state.setQuicTestScoreInPercent);
	const [questionIndex, setQuestionIndex] = useState(0);
	const [selectedOptions, setSelectedOptions] = useState<QuickTestOption[]>([]);
	const [quizQuestions] = useState<QuickTestQuestion[]>(() =>
		questions.map((question) => ({
			...question,
			options: shuffle(question.options),
		}))
	);

	const isRetake = route?.params?.isRetake;
	const question = quizQuestions[questionIndex];
	const isLastQuestion = questionIndex === quizQuestions.length - 1;

	const handleOptionPress = (option: QuickTestOption) => {
		const nextSelectedOptions = [...selectedOptions, option];

		setSelectedOptions(nextSelectedOptions);

		if (isLastQuestion) {
			const correctAnswersCount = nextSelectedOptions.filter(selectedOption => selectedOption.isCorrect).length;
			const quicTestScoreInPercent = Math.round((correctAnswersCount / quizQuestions.length) * 100);

			setQuicTestScoreInPercent(quicTestScoreInPercent);
			navigation.navigate("QuickTestResult", { isRetake });

			return;
		}

		setQuestionIndex((prev) => prev + 1);
	};

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.counter}>
					Question {questionIndex + 1}/{quizQuestions.length}
				</Text>

				<Text style={styles.title}>{question.title}</Text>

				{question.options.map((option) => (
					<Pressable
						key={option.title}
						style={({ pressed }) => [
							styles.option,
							pressed && styles.optionPressed,
						]}
						onPress={() => handleOptionPress(option)}
					>
						<Text style={styles.optionText}>{option.title}</Text>
					</Pressable>
				))}
			</View>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1B1B1B",
		paddingHorizontal: 24,
	},
	content: {
		flex: 1,
		gap: 24,
		justifyContent: "center",
	},
	counter: {
		color: "#F4F4F4",
		fontSize: 24,
		fontWeight: "900",
	},
	title: {
		color: "#F4F4F4",
		fontSize: 22,
		lineHeight: 28,
		fontWeight: "800",
		marginBottom: 18,
	},
	option: {
		minHeight: 36,
		borderRadius: 8,
		backgroundColor: "#242424",
		justifyContent: "center",
		paddingHorizontal: 14,
		paddingVertical: 6,
	},
	optionPressed: {
		opacity: 0.75,
	},
	optionText: {
		color: "#F2F2F2",
		fontSize: 21,
		lineHeight: 25,
		fontStyle: "italic",
	},
});