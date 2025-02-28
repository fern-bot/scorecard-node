/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface Run {
    id?: number;
    createdAt?: Date;
    updatedAt?: Date;
    executionStartTime?: Date;
    executionEndTime?: Date;
    testsetId?: number;
    status?: string;
    limitTestcases?: number;
    source?: string;
    modelParams?: Record<string, unknown>;
    notes?: string;
    scoringConfigId?: number;
    promptTemplate?: string;
    scoringStartTime?: Date;
    scoringEndTime?: Date;
}
