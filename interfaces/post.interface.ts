import { IComment } from "./comment.interface";

export interface IPost {
    id: number;
    title: string;
    body: string;
    imageUrl: string;
    imageAlt?: string;
    comments?: IComment[];
}