import { memo, } from "react";
import { StyleSheet } from "react-native";
import { MainHeader } from "../components/MainHeader";
import { SafeAreaView } from "react-native-safe-area-context";

export const PrivacyScreen = memo(() => {

	return (
		<SafeAreaView style={styles.container}>
			<MainHeader title="Privacy" />
		</SafeAreaView>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 20,
		backgroundColor: "#1B1B1B",
		paddingTop: 20,
		paddingHorizontal: 20
	},
	webview: {
		flex: 1,
	}
});
