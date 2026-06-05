export type TAchievement = {
	id: number;
	title: string;
	description: string;
	isUnlocked?: boolean;
};

export const ACHIEVEMENTS_DATA: TAchievement[] = [
	{
		id: 1,
		title: "First Step",
		description: "Complete your first quiz"
	},
	{
		id: 2,
		title: "Perfect Taste",
		description: "Get all answers right"
	},
	{
		id: 3,
		title: "On Track",
		description: "Score 4 out of 5"
	},
	{
		id: 4,
		title: "10 Day Streak",
		description: "Build your routine"
	},
	{
		id: 5,
		title: "Collector",
		description: "Earn 10 chips"
	},
	{
		id: 6,
		title: "Refined Path",
		description: "Reach 50% level"
	},
	{
		id: 7,
		title: "25 Day Streak",
		description: "Discipline shows"
	},
	{
		id: 8,
		title: "50 Day Streak",
		description: "Consistency defines you"
	},
	{
		id: 9,
		title: "Elite Standard",
		description: "Reach 90% level"
	}
];
