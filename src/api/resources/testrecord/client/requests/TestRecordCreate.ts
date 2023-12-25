/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface TestRecordCreate {
    runId: number;
    testcaseId: number;
    modelResponse: string;
    userQuery?: string;
    context?: string;
    prompt?: string;
    ideal?: string;
    debugOutput?: string;
    modelParams?: Record<string, unknown>;
    testsetId?: number;
    status?: string;
}
