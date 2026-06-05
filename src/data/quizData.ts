export interface Quiz {
	id: number;
	question: string;
	explanation: string;
	answers: {
		id: number;
		option: string;
		isCorrect: boolean;
	}[];
}

const list_1: Quiz[] = [
	{
		id: 1,
		question: "You arrive at a private dinner. The host is busy talking to other guests.",
		explanation: "A balanced approach is usually best. Greeting the host briefly shows politeness without demanding immediate attention.",
		answers: [
			{
				id: 1,
				option: "Greet the host briefly, then step aside",
				isCorrect: true
			},
			{
				id: 2,
				option: "Wait silently until the host notices you",
				isCorrect: false
			},
			{
				id: 3,
				option: "Walk straight into the group conversation",
				isCorrect: false
			}
		]
	},
	{
		id: 2,
		question: "At the table, everyone starts ordering drinks. You're unsure what to choose.",
		explanation: "Asking for guidance shows confidence and engagement, while avoiding a decision may make you appear hesitant.",
		answers: [
			{
				id: 1,
				option: "Ask the waiter for a recommendation",
				isCorrect: true
			},
			{
				id: 2,
				option: "Order exactly what someone else orders",
				isCorrect: false
			},
			{
				id: 3,
				option: "Wait until everyone else has ordered first",
				isCorrect: false
			}
		]
	},
	{
		id: 3,
		question: "One guest speaks loudly and dominates the conversation.",
		explanation: "Joining naturally when there is space keeps the conversation flowing without creating tension.",
		answers: [
			{
				id: 1,
				option: "Add a short comment when there's a natural pause",
				isCorrect: true
			},
			{
				id: 2,
				option: "Stay quiet and completely disengage",
				isCorrect: false
			},
			{
				id: 3,
				option: "Interrupt them to take control of the discussion",
				isCorrect: false
			}
		]
	},
	{
		id: 4,
		question: "A topic comes up that you know very little about.",
		explanation: "Showing curiosity is often more effective than pretending to be an expert or withdrawing from the discussion.",
		answers: [
			{
				id: 1,
				option: "Ask a few questions and learn from others",
				isCorrect: true
			},
			{
				id: 2,
				option: "Pretend you know the topic well",
				isCorrect: false
			},
			{
				id: 3,
				option: "Stop participating in the conversation",
				isCorrect: false
			}
		]
	},
	{
		id: 5,
		question: "The dinner is ending and guests are beginning to leave.",
		explanation: "Thanking the host and saying goodbye leaves a positive final impression and shows appreciation.",
		answers: [
			{
				id: 1,
				option: "Thank the host and say goodbye before leaving",
				isCorrect: true
			},
			{
				id: 2,
				option: "Leave without saying anything",
				isCorrect: false
			},
			{
				id: 3,
				option: "Wait for everyone else to leave first",
				isCorrect: false
			}
		]
	}
];

const list_2: Quiz[] = [
	{
		id: 1,
		question: "You arrive at a networking event where you don't know anyone.",
		explanation: "Introducing yourself to a small group is usually the most effective way to start conversations and build connections.",
		answers: [
			{
				id: 1,
				option: "Approach a small group and introduce yourself",
				isCorrect: true
			},
			{
				id: 2,
				option: "Stay near the entrance and wait for someone to approach",
				isCorrect: false
			},
			{
				id: 3,
				option: "Spend the whole time checking your phone",
				isCorrect: false
			}
		]
	},
	{
		id: 2,
		question: "Someone asks for your opinion on a topic you haven't considered before.",
		explanation: "Being honest and open to discussion shows confidence and authenticity.",
		answers: [
			{
				id: 1,
				option: "Share your initial thoughts and stay open to other views",
				isCorrect: true
			},
			{
				id: 2,
				option: "Agree with the majority without thinking about it",
				isCorrect: false
			},
			{
				id: 3,
				option: "Avoid answering and change the subject immediately",
				isCorrect: false
			}
		]
	},
	{
		id: 3,
		question: "A conversation becomes awkward after a long silence.",
		explanation: "Introducing a simple, relevant topic helps keep the interaction comfortable and engaging.",
		answers: [
			{
				id: 1,
				option: "Ask a casual question to restart the conversation",
				isCorrect: true
			},
			{
				id: 2,
				option: "Remain silent until someone else speaks",
				isCorrect: false
			},
			{
				id: 3,
				option: "Leave without saying anything",
				isCorrect: false
			}
		]
	},
	{
		id: 4,
		question: "You notice a guest standing alone at the event.",
		explanation: "Including others helps create a welcoming atmosphere and often leads to interesting conversations.",
		answers: [
			{
				id: 1,
				option: "Introduce yourself and start a friendly conversation",
				isCorrect: true
			},
			{
				id: 2,
				option: "Assume they want to be left alone",
				isCorrect: false
			},
			{
				id: 3,
				option: "Wait for them to approach you first",
				isCorrect: false
			}
		]
	},
	{
		id: 5,
		question: "During dinner, a disagreement arises between guests.",
		explanation: "Acknowledging different viewpoints calmly helps maintain a positive social atmosphere.",
		answers: [
			{
				id: 1,
				option: "Listen respectfully and respond calmly if needed",
				isCorrect: true
			},
			{
				id: 2,
				option: "Take sides immediately and argue strongly",
				isCorrect: false
			},
			{
				id: 3,
				option: "Ignore everyone and disengage from the table",
				isCorrect: false
			}
		]
	}
];

const list_3: Quiz[] = [
	{
		id: 1,
		question: "You join a group conversation and everyone seems to know each other.",
		explanation: "Introducing yourself and showing interest helps you become part of the conversation naturally.",
		answers: [
			{
				id: 1,
				option: "Introduce yourself and ask how people know each other",
				isCorrect: true
			},
			{
				id: 2,
				option: "Stand nearby and hope someone includes you",
				isCorrect: false
			},
			{
				id: 3,
				option: "Leave the group immediately",
				isCorrect: false
			}
		]
	},
	{
		id: 2,
		question: "Someone tells a story you've heard several times before.",
		explanation: "Showing interest keeps the interaction positive and respectful, even if the story isn't new to you.",
		answers: [
			{
				id: 1,
				option: "Listen politely and react to the story",
				isCorrect: true
			},
			{
				id: 2,
				option: "Interrupt and tell everyone you've heard it before",
				isCorrect: false
			},
			{
				id: 3,
				option: "Ignore the speaker and look at your phone",
				isCorrect: false
			}
		]
	},
	{
		id: 3,
		question: "The waiter brings the wrong meal to your table.",
		explanation: "Addressing the issue calmly is usually the most effective and socially appropriate response.",
		answers: [
			{
				id: 1,
				option: "Politely let the waiter know about the mistake",
				isCorrect: true
			},
			{
				id: 2,
				option: "Complain loudly so everyone notices",
				isCorrect: false
			},
			{
				id: 3,
				option: "Say nothing and stay frustrated",
				isCorrect: false
			}
		]
	},
	{
		id: 4,
		question: "A guest asks you a personal question that makes you uncomfortable.",
		explanation: "Setting a polite boundary allows you to remain respectful while protecting your comfort.",
		answers: [
			{
				id: 1,
				option: "Redirect the conversation to a different topic",
				isCorrect: true
			},
			{
				id: 2,
				option: "Answer even though you're uncomfortable",
				isCorrect: false
			},
			{
				id: 3,
				option: "Respond rudely and end the conversation",
				isCorrect: false
			}
		]
	},
	{
		id: 5,
		question: "Near the end of the evening, the group starts making plans for another gathering.",
		explanation: "Expressing interest and participating helps strengthen social connections.",
		answers: [
			{
				id: 1,
				option: "Join the discussion and share your availability",
				isCorrect: true
			},
			{
				id: 2,
				option: "Stay silent even if you're interested",
				isCorrect: false
			},
			{
				id: 3,
				option: "Dismiss the idea without discussion",
				isCorrect: false
			}
		]
	}
];

const list_4: Quiz[] = [
	{
		id: 1,
		question: "At a dinner party, someone asks what you do for work.",
		explanation: "Giving a short, clear answer encourages conversation without overwhelming the listener.",
		answers: [
			{
				id: 1,
				option: "Give a brief explanation and invite questions",
				isCorrect: true
			},
			{
				id: 2,
				option: "Talk about your entire career in detail",
				isCorrect: false
			},
			{
				id: 3,
				option: "Refuse to answer",
				isCorrect: false
			}
		]
	},
	{
		id: 2,
		question: "You accidentally interrupt someone while they're speaking.",
		explanation: "Acknowledging the interruption and letting them continue shows respect.",
		answers: [
			{
				id: 1,
				option: "Apologize and invite them to continue",
				isCorrect: true
			},
			{
				id: 2,
				option: "Keep talking to finish your point",
				isCorrect: false
			},
			{
				id: 3,
				option: "Pretend it didn't happen",
				isCorrect: false
			}
		]
	},
	{
		id: 3,
		question: "A conversation topic becomes controversial.",
		explanation: "Staying calm and curious helps maintain a productive discussion.",
		answers: [
			{
				id: 1,
				option: "Listen carefully and respond respectfully",
				isCorrect: true
			},
			{
				id: 2,
				option: "Try to prove everyone else wrong",
				isCorrect: false
			},
			{
				id: 3,
				option: "Leave the table immediately",
				isCorrect: false
			}
		]
	},
	{
		id: 4,
		question: "You notice someone hasn't spoken for a while.",
		explanation: "Inviting quieter people into the conversation creates a more inclusive atmosphere.",
		answers: [
			{
				id: 1,
				option: "Ask for their opinion on the topic",
				isCorrect: true
			},
			{
				id: 2,
				option: "Continue talking without noticing",
				isCorrect: false
			},
			{
				id: 3,
				option: "Assume they have nothing to add",
				isCorrect: false
			}
		]
	},
	{
		id: 5,
		question: "A guest compliments something you've done.",
		explanation: "Accepting compliments graciously shows confidence and appreciation.",
		answers: [
			{
				id: 1,
				option: "Thank them and acknowledge the compliment",
				isCorrect: true
			},
			{
				id: 2,
				option: "Argue that they're wrong",
				isCorrect: false
			},
			{
				id: 3,
				option: "Ignore the compliment",
				isCorrect: false
			}
		]
	}
];

const list_5: Quiz[] = [
	{
		id: 1,
		question: "You're introduced to someone but immediately forget their name.",
		explanation: "It's better to politely ask again than pretend you remember.",
		answers: [
			{
				id: 1,
				option: "Politely ask them to repeat their name",
				isCorrect: true
			},
			{
				id: 2,
				option: "Avoid using their name all evening",
				isCorrect: false
			},
			{
				id: 3,
				option: "Guess their name later",
				isCorrect: false
			}
		]
	},
	{
		id: 2,
		question: "A group is discussing a hobby you're interested in.",
		explanation: "Sharing your experience helps create meaningful connections.",
		answers: [
			{
				id: 1,
				option: "Join the discussion and contribute naturally",
				isCorrect: true
			},
			{
				id: 2,
				option: "Stay silent even though you're interested",
				isCorrect: false
			},
			{
				id: 3,
				option: "Change the topic immediately",
				isCorrect: false
			}
		]
	},
	{
		id: 3,
		question: "You spill a small amount of water at the table.",
		explanation: "Handling small mistakes calmly usually minimizes attention and discomfort.",
		answers: [
			{
				id: 1,
				option: "Clean it up and move on",
				isCorrect: true
			},
			{
				id: 2,
				option: "Panic and repeatedly apologize",
				isCorrect: false
			},
			{
				id: 3,
				option: "Ignore the spill completely",
				isCorrect: false
			}
		]
	},
	{
		id: 4,
		question: "Someone asks a question directly to the group.",
		explanation: "Participating helps keep conversations engaging and balanced.",
		answers: [
			{
				id: 1,
				option: "Offer your perspective briefly",
				isCorrect: true
			},
			{
				id: 2,
				option: "Wait for everyone else to answer first",
				isCorrect: false
			},
			{
				id: 3,
				option: "Pretend you didn't hear the question",
				isCorrect: false
			}
		]
	},
	{
		id: 5,
		question: "The evening is ending and people are exchanging contact information.",
		explanation: "Following up with people you enjoyed meeting can strengthen relationships.",
		answers: [
			{
				id: 1,
				option: "Exchange contact details with people you'd like to stay in touch with",
				isCorrect: true
			},
			{
				id: 2,
				option: "Leave without speaking to anyone",
				isCorrect: false
			},
			{
				id: 3,
				option: "Collect everyone's contact information without interacting",
				isCorrect: false
			}
		]
	}
];

const list_6: Quiz[] = [
	{
		id: 1,
		question: "You arrive early and only a few guests are present.",
		explanation: "Starting small conversations early often makes the rest of the event more comfortable.",
		answers: [
			{
				id: 1,
				option: "Introduce yourself to the guests who are already there",
				isCorrect: true
			},
			{
				id: 2,
				option: "Wait alone until more people arrive",
				isCorrect: false
			},
			{
				id: 3,
				option: "Leave and come back later",
				isCorrect: false
			}
		]
	},
	{
		id: 2,
		question: "Someone shares an achievement they're proud of.",
		explanation: "Showing genuine interest helps build positive social connections.",
		answers: [
			{
				id: 1,
				option: "Congratulate them and ask a follow-up question",
				isCorrect: true
			},
			{
				id: 2,
				option: "Immediately talk about your own achievements",
				isCorrect: false
			},
			{
				id: 3,
				option: "Change the subject",
				isCorrect: false
			}
		]
	},
	{
		id: 3,
		question: "You disagree with a point someone makes during dinner.",
		explanation: "Respectful disagreement keeps conversations constructive.",
		answers: [
			{
				id: 1,
				option: "Share your view calmly and explain your reasoning",
				isCorrect: true
			},
			{
				id: 2,
				option: "Dismiss their opinion outright",
				isCorrect: false
			},
			{
				id: 3,
				option: "Stay upset without saying anything",
				isCorrect: false
			}
		]
	},
	{
		id: 4,
		question: "A new guest joins the table after everyone else.",
		explanation: "Helping newcomers feel welcome improves the group dynamic.",
		answers: [
			{
				id: 1,
				option: "Introduce yourself and help include them in the conversation",
				isCorrect: true
			},
			{
				id: 2,
				option: "Assume someone else will handle it",
				isCorrect: false
			},
			{
				id: 3,
				option: "Ignore their arrival",
				isCorrect: false
			}
		]
	},
	{
		id: 5,
		question: "The conversation slows down and people seem unsure what to discuss next.",
		explanation: "Introducing a light, inclusive topic can help re-energize the group.",
		answers: [
			{
				id: 1,
				option: "Bring up a casual topic everyone can join in on",
				isCorrect: true
			},
			{
				id: 2,
				option: "Wait silently for someone else to act",
				isCorrect: false
			},
			{
				id: 3,
				option: "Leave the conversation abruptly",
				isCorrect: false
			}
		]
	}
];

const list_7: Quiz[] = [
	{
		id: 1,
		question: "You arrive at a friend's gathering and only recognize the host.",
		explanation: "Introducing yourself to new people helps you feel more comfortable and makes a positive first impression.",
		answers: [
			{ id: 1, option: "Introduce yourself to a few guests", isCorrect: true },
			{ id: 2, option: "Stay close to the host all evening", isCorrect: false },
			{ id: 3, option: "Avoid talking to anyone new", isCorrect: false }
		]
	},
	{
		id: 2,
		question: "Someone asks about your weekend plans.",
		explanation: "Sharing a little about yourself encourages conversation and connection.",
		answers: [
			{ id: 1, option: "Answer briefly and ask about theirs", isCorrect: true },
			{ id: 2, option: "Give a one-word answer", isCorrect: false },
			{ id: 3, option: "Ignore the question", isCorrect: false }
		]
	},
	{
		id: 3,
		question: "Two people are discussing a movie you've seen.",
		explanation: "Joining naturally with relevant comments helps build rapport.",
		answers: [
			{ id: 1, option: "Share your thoughts when there's an opening", isCorrect: true },
			{ id: 2, option: "Interrupt them immediately", isCorrect: false },
			{ id: 3, option: "Stay silent even if interested", isCorrect: false }
		]
	},
	{
		id: 4,
		question: "Someone seems nervous in a social setting.",
		explanation: "A friendly conversation can help others feel more included.",
		answers: [
			{ id: 1, option: "Start a casual conversation with them", isCorrect: true },
			{ id: 2, option: "Avoid them to prevent awkwardness", isCorrect: false },
			{ id: 3, option: "Point out that they seem nervous", isCorrect: false }
		]
	},
	{
		id: 5,
		question: "A discussion turns toward travel experiences.",
		explanation: "Sharing relevant stories keeps conversations engaging and balanced.",
		answers: [
			{ id: 1, option: "Tell a short travel story and invite others to share", isCorrect: true },
			{ id: 2, option: "Talk continuously about your trips", isCorrect: false },
			{ id: 3, option: "Say nothing at all", isCorrect: false }
		]
	}
];

const list_8: Quiz[] = [
	{
		id: 1,
		question: "You meet someone who works in a field you're curious about.",
		explanation: "Showing genuine curiosity often leads to interesting conversations.",
		answers: [
			{ id: 1, option: "Ask thoughtful questions about their work", isCorrect: true },
			{ id: 2, option: "Pretend you already know everything about it", isCorrect: false },
			{ id: 3, option: "Change the topic immediately", isCorrect: false }
		]
	},
	{
		id: 2,
		question: "You accidentally forget someone's name during a conversation.",
		explanation: "Politely asking again is better than guessing or avoiding them.",
		answers: [
			{ id: 1, option: "Apologize and ask for their name again", isCorrect: true },
			{ id: 2, option: "Use a random name and hope it's right", isCorrect: false },
			{ id: 3, option: "Avoid speaking to them", isCorrect: false }
		]
	},
	{
		id: 3,
		question: "A group starts discussing a topic you know well.",
		explanation: "Contributing thoughtfully adds value without dominating the discussion.",
		answers: [
			{ id: 1, option: "Share useful insights and listen to others", isCorrect: true },
			{ id: 2, option: "Take over the entire conversation", isCorrect: false },
			{ id: 3, option: "Say nothing despite having knowledge", isCorrect: false }
		]
	},
	{
		id: 4,
		question: "Someone disagrees with your opinion.",
		explanation: "Respectful discussion is usually more productive than conflict.",
		answers: [
			{ id: 1, option: "Ask questions to understand their perspective", isCorrect: true },
			{ id: 2, option: "Argue until they agree", isCorrect: false },
			{ id: 3, option: "End the conversation abruptly", isCorrect: false }
		]
	},
	{
		id: 5,
		question: "The event is winding down and people are leaving.",
		explanation: "Saying goodbye helps end interactions on a positive note.",
		answers: [
			{ id: 1, option: "Thank people you spoke with and say goodbye", isCorrect: true },
			{ id: 2, option: "Disappear without saying anything", isCorrect: false },
			{ id: 3, option: "Wait until everyone else has left", isCorrect: false }
		]
	}
];

const list_9: Quiz[] = [
	{
		id: 1,
		question: "You arrive at a business dinner and don't know the seating arrangement.",
		explanation: "Checking politely avoids confusion and shows consideration.",
		answers: [
			{ id: 1, option: "Ask where you should sit", isCorrect: true },
			{ id: 2, option: "Take the most prominent seat", isCorrect: false },
			{ id: 3, option: "Stand until someone notices", isCorrect: false }
		]
	},
	{
		id: 2,
		question: "Someone is explaining a complex idea.",
		explanation: "Active listening helps you understand and engage more effectively.",
		answers: [
			{ id: 1, option: "Listen carefully and ask clarifying questions", isCorrect: true },
			{ id: 2, option: "Interrupt with unrelated stories", isCorrect: false },
			{ id: 3, option: "Stop paying attention", isCorrect: false }
		]
	},
	{
		id: 3,
		question: "You notice a person hasn't been included in the discussion.",
		explanation: "Inviting others to participate creates a more balanced conversation.",
		answers: [
			{ id: 1, option: "Ask for their thoughts on the topic", isCorrect: true },
			{ id: 2, option: "Ignore the situation", isCorrect: false },
			{ id: 3, option: "Continue talking over them", isCorrect: false }
		]
	},
	{
		id: 4,
		question: "A guest shares an opinion you strongly disagree with.",
		explanation: "Remaining respectful helps maintain a positive atmosphere.",
		answers: [
			{ id: 1, option: "Respond calmly and explain your view", isCorrect: true },
			{ id: 2, option: "Mock their opinion", isCorrect: false },
			{ id: 3, option: "Refuse to speak to them again", isCorrect: false }
		]
	},
	{
		id: 5,
		question: "The host thanks everyone for attending.",
		explanation: "Expressing appreciation is a polite way to end the event.",
		answers: [
			{ id: 1, option: "Thank the host for organizing the event", isCorrect: true },
			{ id: 2, option: "Leave immediately without responding", isCorrect: false },
			{ id: 3, option: "Critique the event publicly", isCorrect: false }
		]
	}
];

const list_10: Quiz[] = [
	{
		id: 1,
		question: "You join a table where everyone is discussing a shared experience.",
		explanation: "Showing interest helps you become part of the conversation naturally.",
		answers: [
			{ id: 1, option: "Ask questions and listen before contributing", isCorrect: true },
			{ id: 2, option: "Change the topic to something unrelated", isCorrect: false },
			{ id: 3, option: "Stay disengaged throughout", isCorrect: false }
		]
	},
	{
		id: 2,
		question: "Someone compliments your contribution to a project.",
		explanation: "Accepting praise graciously demonstrates confidence and professionalism.",
		answers: [
			{ id: 1, option: "Thank them and acknowledge the team's effort", isCorrect: true },
			{ id: 2, option: "Dismiss the compliment entirely", isCorrect: false },
			{ id: 3, option: "Immediately brag about other achievements", isCorrect: false }
		]
	},
	{
		id: 3,
		question: "A conversation pauses and everyone looks around awkwardly.",
		explanation: "Introducing a light topic can help keep the interaction flowing.",
		answers: [
			{ id: 1, option: "Bring up a simple topic everyone can discuss", isCorrect: true },
			{ id: 2, option: "Look at your phone and wait", isCorrect: false },
			{ id: 3, option: "Leave the table without explanation", isCorrect: false }
		]
	},
	{
		id: 4,
		question: "You realize you've been talking more than everyone else.",
		explanation: "Balancing participation encourages better group conversations.",
		answers: [
			{ id: 1, option: "Pause and invite others to share their thoughts", isCorrect: true },
			{ id: 2, option: "Continue talking because no one stopped you", isCorrect: false },
			{ id: 3, option: "Stop talking completely for the rest of the evening", isCorrect: false }
		]
	},
	{
		id: 5,
		question: "As you leave, you meet someone you'd like to know better.",
		explanation: "Taking initiative can help build future relationships.",
		answers: [
			{ id: 1, option: "Suggest staying in touch and exchange contact details", isCorrect: true },
			{ id: 2, option: "Hope you'll meet again by chance", isCorrect: false },
			{ id: 3, option: "Leave without saying anything", isCorrect: false }
		]
	}
];

export const QUIZ_LIST = {
	list_1,
	list_2,
	list_3,
	list_4,
	list_5,
	list_6,
	list_7,
	list_8,
	list_9,
	list_10
};

export type TQuizListKey = keyof typeof QUIZ_LIST;

export const QUIZ_LIST_KEYS = Object.keys(QUIZ_LIST) as TQuizListKey[];

export const getNextQuizListKey = (lastQuizListKey?: TQuizListKey | null) => {
	if (!lastQuizListKey) {
		return QUIZ_LIST_KEYS[0];
	}

	const currentQuizListIndex = QUIZ_LIST_KEYS.indexOf(lastQuizListKey);
	const nextQuizListIndex = currentQuizListIndex === -1 ? 0 : (currentQuizListIndex + 1) % QUIZ_LIST_KEYS.length;

	return QUIZ_LIST_KEYS[nextQuizListIndex];
};
