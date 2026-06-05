import { memo, useState } from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, } from "react-native";
import { MainButton } from "../components/MainButton";
import { RootNavigation, } from "../navigation/Routing";
import { useNavigation } from "@react-navigation/native";
import { IMAGES } from "../assets/images";
import { SafeAreaView } from "react-native-safe-area-context";

export const WelcomeScreen = memo(() => {
	const navigation = useNavigation<RootNavigation>();
	const [currentStep, setCurrentStep] = useState(0);

	const infoData = [
		{
			title: "Refinement Is Built, Not Given",
			description: "Modern luxury is not about money alone — it’s about awareness, behavior, and subtle control over how you present yourself.\n\nFrom the way you speak to the way you react, small details shape how others perceive you.\n\nThis app helps you recognize those details, understand unspoken rules, and refine your everyday choices.\n\nYou don’t need to be perfect — but you can become precise."
		},
		{
			title: "Initial Assessment",
			description: "Before you begin, take a moment to answer honestly.\n\nThere are no tricks or hidden rules — just situations that reflect real-life behavior.\n\nYour answers will determine your current level of refinement and set your starting point in the app.\n\nThis test is taken once at the beginning.\n\nYou will be able to retake it later after reaching key milestones."
		}
	]

	const handleNext = () => {
		if (currentStep < infoData.length - 1) {
			setCurrentStep(currentStep + 1);
			return
		}
		navigation.navigate('QuickTest');
	}

	return (
		<ImageBackground style={styles.container} source={IMAGES.bg}>
			<SafeAreaView style={{ flex: 1 }}>
				<ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
					<Text style={styles.title}>{infoData[currentStep].title}</Text>
					<Text style={styles.description}>{infoData[currentStep].description}</Text>
				</ScrollView>
				<MainButton title={currentStep === infoData.length - 1 ? "Start Assessment" : "Next"} onPress={handleNext} buttonStyle={{ backgroundColor: currentStep === infoData.length - 1 ? "#3C8B12" : "#582424" }} />
			</SafeAreaView>
		</ImageBackground>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
		fontWeight: "500"
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
