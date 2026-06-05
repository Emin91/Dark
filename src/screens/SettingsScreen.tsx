import { memo, } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MainHeader } from "../components/MainHeader";
import { MainButton } from "../components/MainButton";
import { useDefaultStore } from "../store/useDefaultStore";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Toggle } from "../components/Toggle";

export const SettingsScreen = memo(() => {
	const navigation = useNavigation<any>();
	const isSoundEnabled = useDefaultStore(state => state.isSoundsEnabled);
	const isNotificationEnabled = useDefaultStore(state => state.isNotificationEnabled);
	const toggleIsSoundsEnabled = useDefaultStore(state => state.toggleIsSoundsEnabled);
	const toggleIsNotificationEnabled = useDefaultStore(state => state.toggleIsNotificationEnabled);
	const resetProgress = useDefaultStore(state => state.resetProgress);

	const options = [
		{
			title: 'Sounds',
			state: isSoundEnabled,
			onChange: toggleIsSoundsEnabled
		},
		{
			title: 'Notifications',
			state: isNotificationEnabled,
			onChange: toggleIsNotificationEnabled
		},
	]

	const onClear = () => {
		Alert.alert("Clear cache?", "This will remove all cached data and reset the app to its initial state.", [
			{
				text: "Cancel",
				style: "cancel"
			},
			{
				text: "Clear cache",
				style: "destructive",
				onPress: () => {
				}
			}
		]);
	}

	const onReset = () => {
		Alert.alert("Reset app?", "This will remove all cached data and reset the app to its initial state.", [
			{
				text: "Cancel",
				style: "cancel"
			},
			{
				text: "Reset app",
				style: "destructive",
				onPress: resetProgress
			}
		]);
	}

	return (
		<SafeAreaView style={styles.container} >
			<View style={styles.optionsContainer}>
				<MainHeader />
				{options.map((option, index) => (
					<View key={index} style={styles.option}>
						<Text style={styles.optionText}>{option.title}</Text>
						<Toggle value={option.state} onChange={option.onChange} />
					</View>
				))}
				<MainButton title="Clear Cache" onPress={onClear} buttonStyle={styles.button} />
				<MainButton title="Reset Progress" onPress={onReset} buttonStyle={[styles.button, { backgroundColor: "#582424" }]} />
			</View>
			<TouchableOpacity onPress={() => navigation.navigate("Privacy")}>
				<Text style={styles.privacyPolicyText}>Privacy Policy</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 8,
		backgroundColor: "#1B1B1B",
		paddingBottom: 30,
	},
	title: {
		fontSize: 26,
		fontWeight: 900,
		color: "#FFF"
	},
	optionsContainer: {
		gap: 8,
		flex: 1,
		paddingHorizontal: 40
	},
	option: {
		height: 44,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	optionText: {
		fontSize: 19,
		fontWeight: 900,
		color: "#FFF"
	},
	button: {
		alignItems: "flex-start",
		backgroundColor: "#382B26"
	},
	privacyPolicyText: {
		fontSize: 14,
		fontWeight: 700,
		color: "#FFF",
		opacity: 0.6,
		alignSelf: "center",
		textDecorationLine: "underline"
	}
});
