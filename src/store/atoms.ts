import dayjs from "dayjs";
import { atom } from "recoil";

export const birthdayState = atom({
	key: "birthdayState",
	default: dayjs("1993-9-1"),
});

export const sizeToggleState = atom({
	key: "sizeToggleState",
	default: false,
});

export const darkModeState = atom({
	key: "darkModeState",
	default: false,
});
