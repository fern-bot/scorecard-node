/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Scorecard from "../../api";
import * as core from "../../core";

export const AppTestSetCreate: core.serialization.ObjectSchema<
    serializers.AppTestSetCreate.Raw,
    Scorecard.AppTestSetCreate
> = core.serialization.object({
    name: core.serialization.string(),
    description: core.serialization.string().optional(),
    usingRetrieval: core.serialization.property("using_retrieval", core.serialization.boolean()),
});

export declare namespace AppTestSetCreate {
    interface Raw {
        name: string;
        description?: string | null;
        using_retrieval: boolean;
    }
}
