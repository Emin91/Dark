import { memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MainHeader } from "../components/MainHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootNavigation, RootStackParamList } from "../navigation/Routing";
import { MainButton } from "../components/MainButton";
import { IMAGES } from "../assets/images";
import { useDefaultStore } from "../store/useDefaultStore";
import { getLocalDateKey } from "../utils/getLocalDateKey";

export const QuizResultScreen = memo(() => {
	const route = useRoute<RouteProp<RootStackParamList, "QuizResult">>();
	const navigation = useNavigation<RootNavigation>();
	const saveDailyQuizResult = useDefaultStore(state => state.saveDailyQuizResult);
	const { score, total, quizListKey } = route.params;

	const result =
		score <= 2
			? {
				img: IMAGES.chip1,
				title: "You Missed the Mark",
				backgroundColor: "#4A2B2B",
				description:
					"Your choices lean more on instinct than awareness.\n\nKey signals are often overlooked, which affects how you’re perceived. Refinement starts with noticing what others ignore.",
			}
			: score <= 4
				? {
					img: IMAGES.chip2,
					title: "You’re On Track",
					backgroundColor: "#313826",
					description:
						"You make the right calls, but not always with consistency.\n\nRefinement is about precision in every situation.",

				}
				: {
					img: IMAGES.chip3,
					title: "Flawless Execution!",
					backgroundColor: "#382B26",
					description:
						"You read situations with precision and act with control.\n\nYour choices reflect a clear understanding of subtle social rules.\n\nConsistency like this sets you apart.",
				};

	const onSave = () => {
		saveDailyQuizResult(score, total, quizListKey, getLocalDateKey());
		navigation.reset({ index: 0, routes: [{ name: "Home" }] });
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<MainHeader isBackShown={false} title="Quiz Quiz Result" />
				<View style={styles.content}>
					<Image source={result.img} style={styles.img} />
					<Text style={styles.title}>{result.title}</Text>
					<View
						style={[
							styles.resultCard,
							{ backgroundColor: result.backgroundColor },
						]}
					>
						<Text style={styles.resultTitle}>Refined — {score}/{total}</Text>
						<Text style={styles.resultDescription}>{result.description}</Text>
					</View>
					<View style={[styles.badgeContainer, { backgroundColor: result.backgroundColor }]}>
						<Text style={styles.badgeText}>+1</Text>
					</View>
				</View>
				<MainButton
					title="Save & Quit"
					onPress={onSave}
					buttonStyle={{ backgroundColor: "#3C8B12" }}
				/>
			</View>
		</SafeAreaView>
	);
});

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#1B1B1B",
	},
	container: {
		flex: 1,
		paddingBottom: 30,
		paddingHorizontal: 24,
	},
	img: {
		width: 200,
		height: 200,
		marginBottom: 20,
		alignSelf: "center",
	},
	content: {
		flex: 1,
		gap: 14,
		marginTop: 20,
	},
	title: {
		color: "#FFFFFF",
		fontSize: 24,
		fontWeight: "900",
	},
	resultCard: {
		borderRadius: 8,
		padding: 16,
		gap: 10,
	},
	resultTitle: {
		color: "#FFFFFF",
		fontSize: 20,
		fontWeight: "800",
		fontStyle: "italic",
	},
	resultDescription: {
		color: "#FFFFFF",
		fontSize: 24,
		fontStyle: "italic",
	},
	text: {
		color: "#FFFFFF",
		fontSize: 19,
		fontWeight: "700",
	},
	button: {
		height: 40,
		borderRadius: 8,
		backgroundColor: "#31920B",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonPressed: {
		opacity: 0.8,
	},
	buttonText: {
		color: "#FFFFFF",
		fontSize: 18,
		fontWeight: "800",
	},
	badgeContainer: {
		borderRadius: 10,
		paddingHorizontal: 30,
		paddingVertical: 6,
		alignSelf: "center",
		justifyContent: 'center',
		alignItems: 'center'
	},
	badgeText: {
		color: "#FFFFFF",
		fontSize: 34,
		fontWeight: "900",
	},
});