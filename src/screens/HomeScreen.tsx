import { memo } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { RootNavigation } from "../navigation/Routing";
import { AchievementsIcon, SettingsIcon } from "../assets/svg";
import { ImageKeys, IMAGES } from "../assets/images";
import { useDefaultStore } from "../store/useDefaultStore";
import { getNextQuizListKey } from "../data/quizData";
import { getLocalDateKey } from "../utils/getLocalDateKey";

export const HomeScreen = memo(() => {
	const navigation = useNavigation<RootNavigation>();
	const quizScore = useDefaultStore(state => state.quizScore);
	const quizStatistics = useDefaultStore(state => state.quizStatistics);
	const lastQuizListKey = useDefaultStore(state => state.lastQuizListKey);
	const lastDailyQuizCompletedDate = useDefaultStore(state => state.lastDailyQuizCompletedDate);
	const standingPercent = useDefaultStore(state => state.quicTestScoreInPercent);
	const isDailyQuizCompletedToday = lastDailyQuizCompletedDate === getLocalDateKey();

	const onStartQuiz = () => {
		if (isDailyQuizCompletedToday) {
			return;
		}

		const quizListKey = getNextQuizListKey(lastQuizListKey);

		navigation.navigate("Quiz", { quizListKey });
	};

	const quizData = [
		{
			id: 1,
			title: "Poor Taste",
			score: quizScore.poorTaste,
			backgroundColor: "#382B26"
		},
		{
			id: 2,
			title: "Middle",
			score: quizScore.middle,
			backgroundColor: "#313826"
		},
		{
			id: 3,
			title: "Elite",
			score: quizScore.elite,
			backgroundColor: "#4A2B2B"
		}
	];

	const cards = [
		{
			id: 1,
			title: "Test Your Instincts",
			description: "Sharpen your sense of etiquette through daily scenarios.\n\nLearn subtle rules, refine your choices, and elevate your standard.",
			buttonTitle: isDailyQuizCompletedToday ? "Available Tomorrow" : "Start Daily Quiz",
			buttonColor: "#3C8B12",
			isDisabled: isDailyQuizCompletedToday,
			onPress: onStartQuiz
		},
		{
			id: 2,
			title: "Private Knowledge",
			description: "Access curated insights on etiquette, social signals, and refined living.\n\nLearn what defines true class in modern society.",
			buttonTitle: "Open Library",
			buttonColor: "#8B4A12",
			isDisabled: false,
			onPress: () => navigation.navigate("Library")
		}
	];

	const statistic = [
		{
			title: "Streak",
			value: quizStatistics.streak
		},
		{
			title: "Previous Test Results",
			value: `${quizStatistics.previousTestResultPercent}%`
		},
		{
			title: "Initial Test Results",
			value: `${quizStatistics.initialTestResultPercent}%`
		}
	];

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<View style={styles.headerTextWrapper}>
					<Text numberOfLines={1} style={styles.title}>Keep Your Standard High</Text>
					<Text numberOfLines={1} style={styles.subtitle}>Refined habits define your presence</Text>
				</View>
				<View style={styles.headerIcons}>
					<TouchableOpacity onPress={() => navigation.navigate("Settings")}>
						<SettingsIcon />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigation.navigate("Achievements")}>
						<AchievementsIcon />
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.quizWrapper}>
				{quizData.map((item) => (
					<View key={item.id} style={styles.quizItem}>
						<View key={item.id} style={styles.quizHeader}>
							<Text style={styles.quizTitle}>{item.title}</Text>
							<View style={[styles.quizLine, { backgroundColor: item.backgroundColor }]} />
						</View>
						<View style={[styles.quizCard, { backgroundColor: item.backgroundColor }]}>
							<Image source={IMAGES[`chip${item.id}` as ImageKeys]} style={styles.quizImage} />
							<Text style={styles.quizScore}>{item.score}</Text>
						</View>
					</View>
				))}
			</View>
			<ScrollView contentContainerStyle={styles.scrollContent}>
				<View style={styles.standingWrapper}>
					<View style={styles.standingHeader}>
						<Text style={styles.standingTitle}>Your standing:</Text>
						<TouchableOpacity style={[styles.retake, { opacity: true ? 1 : 0.3 }]} onPress={() => navigation.navigate("QuickTest", { isRetake: true })}>
							<Text style={styles.retakeText}>Retake</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.standingProgressWrapper}>
						<View style={[styles.standingProgress, { width: `${standingPercent}%` }]} />
						<Text style={styles.standingPercent}>{standingPercent}%</Text>
					</View>
				</View>
				<View style={styles.cardsWrapper}>
					{cards.map((card) => (
						<View key={card.id} style={styles.card}>
							<Image source={IMAGES[`img${card.id}` as ImageKeys]} style={styles.cardImage} resizeMode="stretch" />
							<Text style={styles.cardTitle}>{card.title}</Text>
							<Text style={styles.cardDescription}>{card.description}</Text>
							<TouchableOpacity
								disabled={card.isDisabled}
								onPress={card.onPress}
								style={[styles.cardButton, { backgroundColor: card.buttonColor }, card.isDisabled && styles.cardButtonDisabled]}
							>
								<Text style={styles.cardButtonText}>{card.buttonTitle}</Text>
							</TouchableOpacity>
						</View>
					))}
				</View>
				<View style={styles.statisticsWrapper}>
					<Text style={styles.statisticsTitle}>Statistics:</Text>
					{statistic.map((item) => (
						<View key={item.title} style={styles.statisticsItem}>
							<Text style={styles.statisticsItemTitle}>{item.title}</Text>
							<Text style={styles.statisticsItemValue}>{item.value}</Text>
						</View>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1B1B1B",
		paddingBottom: 30,
		paddingHorizontal: 24
	},
	header: {
		gap: 10,
		marginTop: 10,
		alignItems: "center",
		flexDirection: "row"
	},
	headerTextWrapper: {
		flex: 1,
		gap: 4
	},
	headerIcons: {
		gap: 8
	},
	title: {
		flex: 1,
		color: "#FFFFFF",
		fontSize: 20,
		fontWeight: "900"
	},
	subtitle: {
		flex: 1,
		color: "#FFFFFF",
		fontSize: 16,
		fontWeight: "normal"
	},
	quizWrapper: {
		gap: 6,
		flexDirection: "row"
	},
	quizItem: {
		width: `${100 / 3}%`,
		gap: 6,
		marginTop: 20
	},
	quizHeader: {
		width: "100%",
		gap: 6,
		flexDirection: "row",
		alignItems: "center"
	},
	quizTitle: {
		color: "#6E6E6E",
		fontSize: 10,
		fontWeight: "bold"
	},
	quizLine: {
		height: 6,
		flex: 1,
		borderRadius: 6
	},
	quizCard: {
		height: 40,
		width: "100%",
		flexDirection: "row",
		gap: 10,
		alignItems: "center",
		paddingHorizontal: 10,
		borderRadius: 10
	},
	quizImage: {
		width: 34,
		height: 34
	},
	quizScore: {
		color: "#FFFFFF",
		fontSize: 24,
		fontWeight: "800"
	},
	scrollContent: {
		gap: 20
	},
	standingWrapper: {
		marginTop: 20,
		padding: 10,
		backgroundColor: "#252525",
		borderRadius: 10,
		gap: 6
	},
	standingTitle: {
		color: "#FFFFFF",
		fontSize: 12,
		fontWeight: "700"
	},
	standingProgressWrapper: {
		backgroundColor: "#1B1B1B",
		padding: 4,
		width: "100%",
		borderRadius: 10,
		justifyContent: "center"
	},
	standingProgress: {
		backgroundColor: "#313826",
		height: 14,
		borderRadius: 10
	},
	standingPercent: {
		color: "#FFFFFF",
		fontSize: 10,
		fontWeight: "500",
		position: "absolute",
		right: 10
	},
	cardsWrapper: {
		gap: 20
	},
	card: {
		backgroundColor: "#242424",
		borderRadius: 10,
		padding: 10,
		gap: 10,
		overflow: "hidden"
	},
	cardImage: {
		width: "40%",
		height: 160,
		position: "absolute",
		right: 0,
		bottom: 0
	},
	cardTitle: {
		color: "#FFFFFF",
		fontSize: 20,
		fontWeight: "900"
	},
	cardDescription: {
		color: "#FFFFFF",
		fontSize: 12,
		opacity: 0.8,
		fontWeight: "500",
		marginRight: 60
	},
	cardButton: {
		padding: 10,
		borderRadius: 10,
		alignItems: "center"
	},
	cardButtonDisabled: {
		opacity: 0.5
	},
	cardButtonText: {
		color: "#FFFFFF",
		fontSize: 14,
		fontWeight: "700"
	},
	statisticsWrapper: {
		gap: 10,
		backgroundColor: "#252525",
		borderRadius: 10,
		padding: 10
	},
	statisticsTitle: {
		color: "#6E6E6E",
		fontSize: 12,
		fontWeight: "900"
	},
	statisticsItem: {
		backgroundColor: "#1B1B1B",
		borderRadius: 10,
		paddingHorizontal: 10,
		paddingVertical: 4,
		gap: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	statisticsItemTitle: {
		color: "#FFFFFF",
		fontSize: 12,
		fontWeight: "700"
	},
	statisticsItemValue: {
		color: "#FFFFFF",
		fontSize: 12,
		fontWeight: "500"
	},
	standingHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	retake: {
		paddingHorizontal: 12,
		paddingVertical: 6,
		borderRadius: 6,
		backgroundColor: "#3C8B12"
	},
	retakeText: {
		color: "#FFFFFF",
		fontSize: 10,
		fontWeight: "900"
	}
});