/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Scorecard from "../../../../index";

/**
 * @example
 *     {}
 */
export interface TestrecordCreateParams {
    testsetId?: number;
    testcaseId?: number;
    userQuery?: string;
    context?: string;
    response?: string;
    ideal?: string;
    customInputs?: Record<string, Scorecard.TestrecordCreateParamsCustomInputsValue | undefined>;
    customOutputs?: Record<string, Scorecard.TestrecordCreateParamsCustomOutputsValue | undefined>;
    customLabels?: Record<string, Scorecard.TestrecordCreateParamsCustomLabelsValue | undefined>;
    prompt?: string;
    modelParams?: Record<string, Scorecard.TestrecordCreateParamsModelParamsValue | undefined>;
    modelDebugInfo?: Record<string, Scorecard.TestrecordCreateParamsModelDebugInfoValue | undefined>;
}
