import { memo } from "react";
import { Pressable, StyleSheet, View } from "react-native";

type ToggleProps = {
	value: boolean;
	onChange: (value: boolean) => void;
};

export const Toggle = memo(({ value, onChange }: ToggleProps) => {
	return (
		<Pressable style={styles.container} onPress={() => onChange(!value)} >
			<View style={[styles.thumb, value && styles.thumbActive]} />
		</Pressable>
	);
});

const styles = StyleSheet.create({
	container: {
		width: 60,
		height: 36,
		borderRadius: 6,
		backgroundColor: "#242424",
		padding: 4,
	},
	thumb: {
		width: 27,
		height: "100%",
		borderRadius: 4,
		backgroundColor: "#1B1B1B"
	},
	thumbActive: {
		alignSelf: "flex-end",
		backgroundColor: "#62564B",
	},
});