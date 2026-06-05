import { memo, } from "react";
import { StyleSheet } from "react-native";
import { MainHeader } from "../components/MainHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import WebView from "react-native-webview";

export const PrivacyScreen = memo(() => {

	return (
		<SafeAreaView style={styles.container}>
			<MainHeader title="Privacy" />
			<WebView
				source={{ uri: "https://www.freeprivacypolicy.com/live/ac957d72-d10e-4f1c-976e-3aa99e6f80c1" }}
				style={styles.webview}
			/>
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
