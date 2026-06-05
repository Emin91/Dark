import { memo } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/Routing";
import { MainHeader } from "../components/MainHeader";

export const LibraryDetailsScreen = memo(() => {
	const route = useRoute<RouteProp<RootStackParamList, "LibraryDetails">>();
	const data = route?.params?.item;

	return (
		<SafeAreaView style={styles.container}>
			<MainHeader title="Library" />
			<ScrollView
				contentContainerStyle={styles.scrollContent}
				showsVerticalScrollIndicator={false}
			>
				<Text style={styles.title}>{data?.title}</Text>
				<Text style={styles.description}>{data?.description}</Text>
				<Text style={styles.contentText}>{data?.content}</Text>
			</ScrollView>
		</SafeAreaView>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 14,
		backgroundColor: "#1B1B1B",
		paddingBottom: 30,
		paddingHorizontal: 30
	},
	content: {
		flex: 1
	},
	scrollContent: {
		backgroundColor: "#242424",
		borderRadius: 10,
		padding: 14,
		gap: 12
	},
	title: {
		color: "#FFFFFF",
		fontSize: 24,
		fontWeight: 900
	},
	description: {
		color: "#FFFFFF",
		fontSize: 20,
		fontWeight: 600,
		fontStyle: "italic"
	},
	contentText: {
		color: "#FFFFFF",
		fontSize: 18,
		fontWeight: 600
	}
});