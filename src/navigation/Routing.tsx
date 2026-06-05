import React from "react";
import { createNavigationContainerRef, NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { QuickTestScreen } from "../screens/QuickTestScreen";
import { QuickTestResultScreen } from "../screens/QuickTestResultScreen";
import { DisclaimerScreen } from "../screens/DisclaimerScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { LibraryScreen } from "../screens/LibraryScreen";
import { LibraryDetailsScreen } from "../screens/LibraryDetailsScreen";
import { LibraryItem } from "../data/libraryData";
import { QuizScreen } from "../screens/QuizScreen";
import { QuizResultScreen } from "../screens/QuizResultScreen";
import { useDefaultStore } from "../store/useDefaultStore";
import { AchievementsScreen } from "../screens/AchievementsScreen";
import { TQuizListKey } from "../data/quizData";
import { PrivacyScreen } from "../screens/PrivacyScreen";

enableScreens(true);

export type RootStackParamList = {
	Welcome: undefined;
	QuickTest: { isRetake?: boolean } | undefined;
	QuickTestResult: { isRetake?: boolean; };
	Disclaimer: undefined;
	Home: undefined;
	Settings: undefined;
	Library: undefined;
	LibraryDetails: { item: LibraryItem };
	Quiz: { quizListKey: TQuizListKey };
	QuizResult: { score: number; total: number; quizListKey: TQuizListKey };
	Achievements: undefined;
	Privacy: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootNavigation = NativeStackNavigationProp<RootStackParamList>;

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const Routing = () => {
	const isOnboardingShown = useDefaultStore(state => state.isOnboardingShown);

	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator initialRouteName={isOnboardingShown ? "Home" : "Welcome"} screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Welcome" component={WelcomeScreen} />
				<Stack.Screen name="QuickTest" component={QuickTestScreen} />
				<Stack.Screen name="QuickTestResult" component={QuickTestResultScreen} />
				<Stack.Screen name="Disclaimer" component={DisclaimerScreen} />
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Settings" component={SettingsScreen} />
				<Stack.Screen name="Library" component={LibraryScreen} />
				<Stack.Screen name="LibraryDetails" component={LibraryDetailsScreen} />
				<Stack.Screen name="Quiz" component={QuizScreen} />
				<Stack.Screen name="QuizResult" component={QuizResultScreen} />
				<Stack.Screen name="Achievements" component={AchievementsScreen} />
				<Stack.Screen name="Privacy" component={PrivacyScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
