import { memo, useState } from "react";
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
} from "react-native";
import { MainHeader } from "../components/MainHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { QUIZ_LIST } from "../data/quizData";
import { MainButton } from "../components/MainButton";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootNavigation, RootStackParamList } from "../navigation/Routing";

const shuffleArray = <T,>(array: T[]) => {
	return [...array].sort(() => Math.random() - 0.5);
};

export const QuizScreen = memo(() => {
	const navigation = useNavigation<RootNavigation>();
	const route = useRoute<RouteProp<RootStackParamList, "Quiz">>();
	const { quizListKey } = route.params;
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null);
	const [score, setScore] = useState(0);

	const [quizData] = useState(() =>
		QUIZ_LIST[quizListKey].map((question) => ({
			...question,
			answers: shuffleArray(question.answers),
		}))
	);

	const currentQuestion = quizData[currentQuestionIndex];

	const handleSelectAnswer = (answerId: number) => {
		if (selectedAnswerId !== null) return;

		setSelectedAnswerId(answerId);

		const selectedAnswer = currentQuestion.answers.find(
			(answer) => answer.id === answerId
		);

		if (selectedAnswer?.isCorrect) {
			setScore((prev) => prev + 1);
		}
	};

	const handleNext = () => {
		if (selectedAnswerId === null) return;

		const isLastQuestion = currentQuestionIndex === quizData.length - 1;

		if (isLastQuestion) {
			navigation.navigate("QuizResult", {
				score,
				total: quizData.length,
				quizListKey,
			});
			return;
		}

		setCurrentQuestionIndex((prev) => prev + 1);
		setSelectedAnswerId(null);
	};

	return (
		<SafeAreaView style={styles.container}>
			<MainHeader title="Daily Quiz" />

			<ScrollView
				style={styles.scroll}
				contentContainerStyle={styles.scrollContent}
			>
				<Text style={styles.questionNumber}>
					Question {currentQuestionIndex + 1}/{quizData.length}
				</Text>

				<Text style={styles.questionText}>
					{currentQuestion.question}
				</Text>

				{currentQuestion.answers.map((answer) => {
					const isAnswered = selectedAnswerId !== null;
					const isSelected = selectedAnswerId === answer.id;

					return (
						<TouchableOpacity
							key={answer.id}
							onPress={() => handleSelectAnswer(answer.id)}
							activeOpacity={0.8}
							disabled={selectedAnswerId !== null}
							style={[
								styles.answerButton,
								!isAnswered
									? styles.answerButtonDefault
									: answer.isCorrect
										? styles.answerButtonCorrect
										: isSelected
											? styles.answerButtonIncorrect
											: styles.answerButtonDefault,
							]}
						>
							<Text style={styles.answerText}>
								{answer.option} {answer.isCorrect ? "✓" : "✗"}
							</Text>

							{selectedAnswerId !== null && isSelected && (
								<Text style={styles.explanationText}>
									{currentQuestion.explanation}
								</Text>
							)}
						</TouchableOpacity>
					);
				})}
			</ScrollView>

			<MainButton
				title="Next"
				onPress={handleNext}
				disabled={selectedAnswerId === null}
				buttonStyle={selectedAnswerId === null ? styles.nextButtonDisabled : styles.nextButton}
			/>
		</SafeAreaView>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1B1B1B",
		paddingTop: 20,
		paddingBottom: 30,
		paddingHorizontal: 20,
	},
	scroll: {
		marginBottom: 10,
		marginTop: 40,
	},
	scrollContent: {
		gap: 20,
	},
	answerButton: {
		gap: 10,
		paddingVertical: 14,
		paddingHorizontal: 14,
		borderRadius: 10,
	},
	answerButtonDefault: {
		backgroundColor: "#242424",
	},
	answerButtonCorrect: {
		backgroundColor: "#3C8B12",
	},
	answerButtonIncorrect: {
		backgroundColor: "#582424",
	},
	answerText: {
		color: "#FFFFFF",
		fontSize: 20,
		fontStyle: "italic",
	},
	questionNumber: {
		color: "#FFFFFF",
		fontSize: 24,
		fontWeight: "900",
	},
	questionText: {
		color: "#FFFFFF",
		fontSize: 24,
		fontWeight: "900",
	},
	explanationText: {
		color: "#FFFFFF",
		fontSize: 18,
		lineHeight: 26,
		fontStyle: "italic",
		fontWeight: "700",
	},
	nextButton: {
		opacity: 1,
	},
	nextButtonDisabled: {
		opacity: 0.5,
	},
});