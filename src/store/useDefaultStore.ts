import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { mmkvStorage } from "../services/MmkvAdapter";
import { TQuizListKey } from "../data/quizData";
import { ACHIEVEMENTS_DATA, type TAchievement } from "../data/achievement";

const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;

type TQuizStatistics = {
	streak: number;
	previousTestResultPercent: number;
	initialTestResultPercent: number;
};

type TQuizScore = {
	poorTaste: number;
	middle: number;
	elite: number;
};

type TDefaultStoreState = {
	isNotificationEnabled: boolean;
	isSoundsEnabled: boolean;
	isOnboardingShown: boolean;
	lastQuizListKey: TQuizListKey | null;
	achievements: TAchievement[];
	lastDailyQuizCompletedDate: string | null;
	quizStatistics: TQuizStatistics;
	quizScore: TQuizScore;
	quicTestScoreInPercent: number;
	toggleIsNotificationEnabled: () => void;
	toggleIsSoundsEnabled: () => void;
	setIsOnboardingShown: (value: boolean) => void;
	setLastQuizListKey: (value: TQuizListKey) => void;
	setLastDailyQuizCompletedDate: (value: string) => void;
	setInitialTestResultPercent: (value: number) => void;
	setQuicTestScoreInPercent: (value: number) => void;
	saveDailyQuizResult: (score: number, total: number, quizListKey: TQuizListKey, completedDate: string) => void;
	resetProgress: () => void;
};

type TAchievementUnlockParams = {
	score?: number;
	total?: number;
	streak: number;
	quizScore: TQuizScore;
	quicTestScoreInPercent: number;
	hasCompletedQuiz: boolean;
};

const getDateTimeFromDateKey = (dateKey: string) => {
	const [year, month, day] = dateKey.split("-").map(Number);

	return new Date(year, month - 1, day).getTime();
};

const getDaysBetweenDateKeys = (startDateKey: string, endDateKey: string) =>
	Math.round((getDateTimeFromDateKey(endDateKey) - getDateTimeFromDateKey(startDateKey)) / MILLISECONDS_IN_DAY);

const getQuizResultPercent = (score: number, total: number) => {
	if (total <= 0) {
		return 0;
	}

	return Math.round((score / total) * 100);
};

const getNextStreak = (currentStreak: number, daysSincePreviousCompletion: number | null) => {
	if (daysSincePreviousCompletion === 0) {
		return currentStreak;
	}

	if (daysSincePreviousCompletion === 1) {
		return currentStreak + 1;
	}

	return 1;
};

const incrementQuizScore = (quizScore: TQuizScore, score: number) => {
	if (score <= 2) {
		return {
			...quizScore,
			poorTaste: quizScore.poorTaste + 1
		};
	}

	if (score <= 4) {
		return {
			...quizScore,
			middle: quizScore.middle + 1
		};
	}

	return {
		...quizScore,
		elite: quizScore.elite + 1
	};
};

const getTotalQuizScore = (quizScore: TQuizScore) => quizScore.poorTaste + quizScore.middle + quizScore.elite;

const isAchievementUnlocked = (achievementId: number, params: TAchievementUnlockParams) => {
	switch (achievementId) {
		case 1:
			return params.hasCompletedQuiz;
		case 2:
			return Boolean(params.total && params.score === params.total);
		case 3:
			return params.score === 4 && params.total === 5;
		case 4:
			return params.streak >= 10;
		case 5:
			return getTotalQuizScore(params.quizScore) >= 10;
		case 6:
			return params.quicTestScoreInPercent >= 50;
		case 7:
			return params.streak >= 25;
		case 8:
			return params.streak >= 50;
		case 9:
			return params.quicTestScoreInPercent >= 90;
		default:
			return false;
	}
};

const getAchievementsWithUnlockState = (achievements: TAchievement[], params: TAchievementUnlockParams) =>
	ACHIEVEMENTS_DATA.map(achievement => {
		const currentAchievement = achievements.find(item => item.id === achievement.id);
		const isUnlocked = Boolean(currentAchievement?.isUnlocked) || isAchievementUnlocked(achievement.id, params);

		return {
			...achievement,
			isUnlocked
		};
	});

const DEFAULT_QUIZ_STATISTICS: TQuizStatistics = {
	streak: 0,
	previousTestResultPercent: 0,
	initialTestResultPercent: 58
};

const DEFAULT_QUIZ_SCORE: TQuizScore = {
	poorTaste: 0,
	middle: 0,
	elite: 0
};

export const useDefaultStore = create<TDefaultStoreState>()(
	persist(
		set => ({
			isNotificationEnabled: false,
			isSoundsEnabled: true,
			isOnboardingShown: false,
			lastQuizListKey: null,
			achievements: ACHIEVEMENTS_DATA,
			lastDailyQuizCompletedDate: null,
			quizStatistics: DEFAULT_QUIZ_STATISTICS,
			quizScore: DEFAULT_QUIZ_SCORE,
			quicTestScoreInPercent: 0,
			toggleIsNotificationEnabled: () => set(state => ({ isNotificationEnabled: !state.isNotificationEnabled })),
			toggleIsSoundsEnabled: () => set(state => ({ isSoundsEnabled: !state.isSoundsEnabled })),
			setIsOnboardingShown: value => set({ isOnboardingShown: value }),
			setLastQuizListKey: value => set({ lastQuizListKey: value }),
			setLastDailyQuizCompletedDate: value => set({ lastDailyQuizCompletedDate: value }),
			setQuicTestScoreInPercent: value =>
				set(state => ({
					quicTestScoreInPercent: value,
					achievements: getAchievementsWithUnlockState(state.achievements, {
						streak: state.quizStatistics.streak,
						quizScore: state.quizScore,
						quicTestScoreInPercent: value,
						hasCompletedQuiz: Boolean(state.lastDailyQuizCompletedDate)
					})
				})),
			setInitialTestResultPercent: value =>
				set(state => ({
					quizStatistics: {
						...state.quizStatistics,
						initialTestResultPercent: value
					}
				})),
			saveDailyQuizResult: (score, total, quizListKey, completedDate) =>
				set(state => {
					const previousCompletedDate = state.lastDailyQuizCompletedDate;
					const daysSincePreviousCompletion = previousCompletedDate ? getDaysBetweenDateKeys(previousCompletedDate, completedDate) : null;
					const streak = getNextStreak(state.quizStatistics.streak, daysSincePreviousCompletion);
					const previousTestResultPercent = getQuizResultPercent(score, total);
					const quizScore = incrementQuizScore(state.quizScore, score);

					return {
						lastQuizListKey: quizListKey,
						lastDailyQuizCompletedDate: completedDate,
						quizStatistics: {
							...state.quizStatistics,
							streak,
							previousTestResultPercent
						},
						quizScore,
						achievements: getAchievementsWithUnlockState(state.achievements, {
							score,
							total,
							streak,
							quizScore,
							quicTestScoreInPercent: state.quicTestScoreInPercent,
							hasCompletedQuiz: true
						})
					};
				}),
			resetProgress: () =>
				set({
					lastQuizListKey: null,
					achievements: ACHIEVEMENTS_DATA,
					lastDailyQuizCompletedDate: null,
					quizStatistics: DEFAULT_QUIZ_STATISTICS,
					quizScore: DEFAULT_QUIZ_SCORE,
					quicTestScoreInPercent: 0
				})
		}),
		{
			name: "default-app-store",
			storage: createJSONStorage(() => mmkvStorage),
			partialize: state => ({
				isNotificationEnabled: state.isNotificationEnabled,
				isSoundsEnabled: state.isSoundsEnabled,
				isOnboardingShown: state.isOnboardingShown,
				lastQuizListKey: state.lastQuizListKey,
				lastDailyQuizCompletedDate: state.lastDailyQuizCompletedDate,
				quizScore: state.quizScore,
				quizStatistics: state.quizStatistics,
				achievements: state.achievements,
				quicTestScoreInPercent: state.quicTestScoreInPercent
			})
		}
	)
);
