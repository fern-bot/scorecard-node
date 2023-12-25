/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Scorecard from "../../../../../api";
import * as core from "../../../../../core";

export const TestRecordCreate: core.serialization.Schema<serializers.TestRecordCreate.Raw, Scorecard.TestRecordCreate> =
    core.serialization.object({
        runId: core.serialization.property("run_id", core.serialization.number()),
        testcaseId: core.serialization.property("testcase_id", core.serialization.number()),
        modelResponse: core.serialization.property("model_response", core.serialization.string()),
        userQuery: core.serialization.property("user_query", core.serialization.string().optional()),
        context: core.serialization.string().optional(),
        prompt: core.serialization.string().optional(),
        ideal: core.serialization.string().optional(),
        debugOutput: core.serialization.property("debug_output", core.serialization.string().optional()),
        modelParams: core.serialization.property(
            "model_params",
            core.serialization.record(core.serialization.string(), core.serialization.any()).optional()
        ),
        testsetId: core.serialization.property("testset_id", core.serialization.number().optional()),
        status: core.serialization.string().optional(),
    });

export declare namespace TestRecordCreate {
    interface Raw {
        run_id: number;
        testcase_id: number;
        model_response: string;
        user_query?: string | null;
        context?: string | null;
        prompt?: string | null;
        ideal?: string | null;
        debug_output?: string | null;
        model_params?: Record<string, any> | null;
        testset_id?: number | null;
        status?: string | null;
    }
}
