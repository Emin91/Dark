import { memo } from "react";
import { ScrollView, StyleSheet, Text, } from "react-native";
import { MainButton } from "../components/MainButton";
import { RootNavigation, } from "../navigation/Routing";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDefaultStore } from "../store/useDefaultStore";

const info = 'This app is designed for educational and entertainment purposes only.\n\nIt provides general insights into etiquette, social behavior, and perception in modern environments.\n\nThe content does not represent universal rules or absolute standards, and it should not be interpreted as a definitive measure of personal value, success, or social status.\n\nResults, feedback, and classifications within the app are illustrative and based on simplified models of behavior.\n\nUse the app as a tool for reflection and self-improvement — not as a strict guideline for judgment.'

export const DisclaimerScreen = memo(() => {
	const navigation = useNavigation<RootNavigation>();
	const setIsOnboardingShown = useDefaultStore(state => state.setIsOnboardingShown);

	const handleGotIt = () => {
		setIsOnboardingShown(true);
		navigation.navigate("Home");
	};

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
				<Text style={styles.title}>Disclaimer</Text>
				<Text style={styles.description}>{info}</Text>
			</ScrollView>
			<MainButton title="Got it" onPress={handleGotIt} buttonStyle={{ backgroundColor: "#582424" }} />
		</SafeAreaView>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1B1B1B",
		paddingBottom: 30,
		paddingHorizontal: 40
	},
	title: {
		color: "#FFF",
		fontSize: 24,
		fontWeight: "bold"
	},
	description: {
		color: "#FFF",
		fontSize: 18,
		fontWeight: "500",
		fontStyle: "italic"
	},
	scrollView: {
		marginBottom: 30
	},
	scrollContent: {
		gap: 10,
		flexGrow: 1,
		justifyContent: "flex-end"
	}
});
