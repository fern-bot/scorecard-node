/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Scorecard from "..";

export interface Testrecord {
    id?: number;
    createdAt?: Date;
    runId?: number;
    testsetId?: number;
    testcaseId?: number;
    userQuery?: string;
    context?: string;
    modelResponse?: string;
    ideal?: string;
    fullPrompt?: string;
    customInputs?: Record<string, Scorecard.TestrecordCustomInputsValue | undefined>;
    customLabels?: Record<string, Scorecard.TestrecordCustomLabelsValue | undefined>;
    customOutputs?: Record<string, Scorecard.TestrecordCustomOutputsValue | undefined>;
    status?: string;
    prompt?: string;
    modelParams?: Record<string, Scorecard.TestrecordModelParamsValue | undefined>;
    modelDebugInfo?: Record<string, Scorecard.TestrecordModelDebugInfoValue | undefined>;
}
