export declare const Role: {
    readonly USER: "USER";
    readonly ADMIN: "ADMIN";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const TaskStatus: {
    readonly todo: "todo";
    readonly in_progress: "in_progress";
    readonly done: "done";
};
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];
