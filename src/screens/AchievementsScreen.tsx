import { memo } from "react";
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { MainHeader } from "../components/MainHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageKeys, IMAGES } from "../assets/images";
import { useDefaultStore } from "../store/useDefaultStore";

const SCREEN_PADDING = 20;
const CARD_GAP = 10;
const CARD_COLUMNS = 3;
const CARD_WIDTH =
	(Dimensions.get("window").width -
		SCREEN_PADDING * 2 -
		CARD_GAP * (CARD_COLUMNS - 1)) /
	CARD_COLUMNS;

export const AchievementsScreen = memo(() => {
	const achievements = useDefaultStore(state => state.achievements);

	return (
		<SafeAreaView style={styles.container}>
			<MainHeader title="Achievements" />
			<FlatList
				data={achievements}
				keyExtractor={(item) => item.id.toString()}
				numColumns={CARD_COLUMNS}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.listContent}
				columnWrapperStyle={styles.row}
				renderItem={({ item }) => (
					<View style={styles.card}>
						<Image
							source={item.isUnlocked ? IMAGES[`a${item.id}` as ImageKeys] : IMAGES.lock}
							style={styles.cardImage}
							resizeMode="contain"
						/>
						<Text numberOfLines={2} style={[styles.cardTitle, { opacity: item.isUnlocked ? 1 : 0.2 }]}>{item.title}</Text>
						<Text numberOfLines={2} style={[styles.cardDescription, { opacity: item.isUnlocked ? 1 : 0.2 }]}>{item.description}</Text>
					</View>
				)}
			/>
		</SafeAreaView>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1B1B1B",
		paddingTop: 20,
		paddingHorizontal: SCREEN_PADDING,
	},
	listContent: {
		paddingTop: 34,
		paddingBottom: 40,
	},
	row: {
		gap: CARD_GAP,
		marginBottom: CARD_GAP,
	},
	card: {
		gap: 6,
		width: CARD_WIDTH,
		borderRadius: 16,
		height: 164,
		overflow: "hidden",
		alignItems: "center",
		backgroundColor: "#252525",
		padding: 10,
	},
	cardImage: {
		width: "100%",
		height: 86,
		marginBottom: 10,
	},
	cardTitle: {
		color: "#FFFFFF",
		fontSize: 12,
		fontWeight: "900",
		textAlign: "center",
	},
	cardDescription: {
		color: "#FFFFFF",
		fontSize: 10,
		fontWeight: "400",
		textAlign: "center",
	},
});