const padDatePart = (value: number) => value.toString().padStart(2, "0");

export const getLocalDateKey = (date = new Date()) => {
	const year = date.getFullYear();
	const month = padDatePart(date.getMonth() + 1);
	const day = padDatePart(date.getDate());

	return `${year}-${month}-${day}`;
};
