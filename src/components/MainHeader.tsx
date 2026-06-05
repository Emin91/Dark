import { FC } from "react";
import { StyleSheet, Text, TextProps, TextStyle, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from "react-native";
import { StyleProp } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowIcon } from "../assets/svg";

interface IProps extends TouchableOpacityProps {
	title?: string;
	containerStyle?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
	textProps?: TextProps;
	isBackShown?: boolean;
	onBack?: () => void;
}

export const MainHeader: FC<IProps> = ({
	title,
	containerStyle,
	textStyle,
	textProps,
	isBackShown = true,
	onBack,
	...buttonProps
}) => {
	const navigation = useNavigation();

	return (
		<View style={[styles.wrapper, containerStyle]}>
			<TouchableOpacity
				activeOpacity={0.8}
				disabled={!isBackShown}
				style={styles.button}
				onPress={onBack || (() => navigation.goBack())}
				{...buttonProps}
			>
				{isBackShown && <ArrowIcon />}
			</TouchableOpacity>
			{title ? (
				<Text numberOfLines={1} style={[styles.title, textStyle]} {...textProps}>
					{title}
				</Text>
			) : null}

		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	button: {
		width: 30,
		height: 40,
		justifyContent: "center",
		alignItems: "center"
	},
	titleContainer: {
		justifyContent: "center",
		alignItems: "center"
	},
	title: {
		fontSize: 20,
		color: "#FFFFFF",
		fontWeight: "900"
	}
});
