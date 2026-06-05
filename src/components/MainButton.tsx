import { FC } from "react";
import { StyleSheet, Text, TextProps, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { StyleProp } from "react-native";

interface IProps extends Omit<TouchableOpacityProps, "style"> {
	title: string;
	buttonStyle?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
	textProps?: TextProps;
}

export const MainButton: FC<IProps> = ({ title, buttonStyle, textStyle, textProps, ...buttonProps }) => {
	return (
		<TouchableOpacity activeOpacity={0.8} style={[styles.container, buttonStyle]} {...buttonProps}>
			<Text numberOfLines={1} style={[styles.text, textStyle]} {...textProps}>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 34,
		borderRadius: 8,
		paddingHorizontal: 20,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#8B4A12"
	},
	text: {
		fontSize: 14,
		color: "#FFF",
		fontWeight: "bold"
	}
});
