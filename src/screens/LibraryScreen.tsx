import { memo, useState } from "react";
import {
	FlatList,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { RootNavigation } from "../navigation/Routing";
import { MainHeader } from "../components/MainHeader";
import { LIBRARY } from "../data/libraryData";

export const LibraryScreen = memo(() => {
	const navigation = useNavigation<RootNavigation>();

	const tabs = LIBRARY.map((item) => item.title);
	const [selectedTab, setSelectedTab] = useState(tabs[0]);

	const selectedLibrary = LIBRARY.find(
		(item) => item.title === selectedTab
	)?.data;

	return (
		<SafeAreaView style={styles.container}>
			<MainHeader title="Library" containerStyle={styles.headerContainer} />
			<ScrollView
				horizontal
				style={styles.tabsScroll}
				contentContainerStyle={styles.tabsContent}
				showsHorizontalScrollIndicator={false}
			>
				{tabs.map((item) => (
					<TouchableOpacity
						key={item}
						onPress={() => setSelectedTab(item)}
						style={[
							styles.tabButton,
							selectedTab === item && styles.selectedTabButton,
						]}
					>
						<Text style={styles.tabText}>{item}</Text>
					</TouchableOpacity>
				))}
			</ScrollView>
			<View style={styles.content}>
				<FlatList
					data={selectedLibrary}
					keyExtractor={(item) => item.title}
					contentContainerStyle={styles.listContent}
					renderItem={({ item }) => (
						<View style={styles.card}>
							<View style={styles.cardTextContainer}>
								<Text style={styles.cardTitle}>{item.title}</Text>
								<Text style={styles.cardDescription}>{item.description}</Text>
							</View>
							<TouchableOpacity style={styles.readButton} onPress={() => navigation.navigate("LibraryDetails", { item })}>
								<Text style={styles.readButtonText}>Read</Text>
							</TouchableOpacity>
						</View>
					)}
				/>
			</View>
		</SafeAreaView>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1B1B1B",
		paddingBottom: 30,
	},
	headerContainer: {
		paddingHorizontal: 30,
	},
	tabsScroll: {
		height: 40,
		flexGrow: 0,
		marginTop: 32,
		marginBottom: 20,
	},
	tabsContent: {
		gap: 10,
		paddingHorizontal: 30,
	},
	tabButton: {
		backgroundColor: "#3F3F3F",
		padding: 12,
		borderRadius: 10,
		height: 40,
	},
	selectedTabButton: {
		backgroundColor: "#5B5A5A",
	},
	tabText: {
		color: "#FFFFFF",
		fontSize: 14,
		fontWeight: "800",
	},
	content: {
		flex: 1,
	},
	listContent: {
		gap: 10,
		paddingHorizontal: 30,
	},
	card: {
		backgroundColor: "#242424",
		paddingVertical: 12,
		paddingHorizontal: 16,
		borderRadius: 10,
		flexDirection: "row",
		gap: 10,
		alignItems: "center",
	},
	cardTextContainer: {
		flex: 1,
		gap: 4,
	},
	cardTitle: {
		color: "#FFFFFF",
		fontSize: 18,
		fontWeight: "800",
	},
	cardDescription: {
		color: "#FFFFFF",
		fontSize: 14,
		fontWeight: "600",
	},
	readButton: {
		backgroundColor: "#3C8B12",
		height: 20,
		borderRadius: 20,
		paddingHorizontal: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	readButtonText: {
		color: "#FFFFFF",
		fontSize: 14,
		fontWeight: "700",
	},
});