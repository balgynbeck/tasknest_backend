import { Strategy } from 'passport-jwt';
declare const JwtAccessStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtAccessStrategy extends JwtAccessStrategy_base {
    constructor();
    validate(payload: {
        sub: number;
        email: string;
        role?: string;
    }): Promise<{
        id: number;
        email: string;
        role: string | undefined;
    }>;
}
export {};
