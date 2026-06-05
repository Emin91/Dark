import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { MainButton } from "../components/MainButton";
import { RootNavigation, RootStackParamList } from "../navigation/Routing";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDefaultStore } from "../store/useDefaultStore";

const getQuickTestResult = (percent: number) => {
	if (percent === 100) {
		return {
			level: "Elite",
			percent,
			cardColor: "#2C3A24",
			description: "You recognize and apply the rules naturally.\n\nYour behavior reflects control and awareness.",
		};
	}

	if (percent >= 30) {
		return {
			level: "Refined",
			percent,
			cardColor: "#537e33",
			description: "You understand key signals,\nbut not consistently.\n\nPrecision comes with practice.",
		};
	}

	return {
		level: "Poor Taste",
		percent,
		cardColor: "#4A2B2B",
		description: "You rely on instinct more than awareness.\n\nThere’s room to refine your approach.",
	};
};

export const QuickTestResultScreen = memo(() => {
	const navigation = useNavigation<RootNavigation>();
	const route = useRoute<RouteProp<RootStackParamList, "QuickTestResult">>();
	const isRetake = route?.params?.isRetake;
	const quicTestScoreInPercent = useDefaultStore(state => state.quicTestScoreInPercent);
	const setInitialTestResultPercent = useDefaultStore(state => state.setInitialTestResultPercent);

	const result = getQuickTestResult(quicTestScoreInPercent);

	const handleContinuePress = () => {
		setInitialTestResultPercent(result.percent);
		if (isRetake) {
			navigation.reset({
				index: 0,
				routes: [{ name: "Home" }],
			});
		} else {
			navigation.navigate("Disclaimer");
		}
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<View style={styles.content}>
					<Text style={styles.title}>Your Baseline Is Set</Text>
					<View style={[styles.resultCard, { backgroundColor: result.cardColor }]}>
						<Text style={styles.resultTitle}>
							{result.level} — {result.percent}%
						</Text>
						<Text style={styles.resultDescription}>{result.description}</Text>
					</View>
					<Text style={styles.text}>
						Your result reflects how your current behavior aligns with modern
						standards of refinement.
					</Text>
					<Text style={styles.text}>
						This is not a final judgment — it’s a reference point. As you progress,
						your daily choices and quiz results will shape your growth.
					</Text>
				</View>
				<MainButton title="Continue" onPress={handleContinuePress} buttonStyle={{ backgroundColor: "#3C8B12" }} />
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
		paddingHorizontal: 24,
		paddingBottom: 30
	},
	content: {
		flex: 1,
		gap: 14,
		justifyContent: "center",
	},
	title: {
		color: "#FFFFFF",
		fontSize: 24,
		fontWeight: "900",
	},
	resultCard: {
		borderRadius: 8,
		padding: 16,
		gap: 10
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
});