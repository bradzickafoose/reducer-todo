export const initialState = {
	todos : [
		{
			item      : 'Learn about reducers',
			completed : false,
			id        : 3892987589,
		},
		{
			item      : 'Learn some Redux',
			completed : false,
			id        : 3892987590,
		},
		{
			item      : 'Do some laundry',
			completed : false,
			id        : 3892988595,
		},
	],
};

export function todoApp(state, action) {
	if (typeof state === 'undefined') {
		return initialState;
	}
	return state;
}
