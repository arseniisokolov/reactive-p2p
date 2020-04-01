import { TosterTypes } from "./toster-types.enum";

export interface ITosterInitializeData {
    message: string;
    title?: string;
    type?: TosterTypes;
    time?: number;
}