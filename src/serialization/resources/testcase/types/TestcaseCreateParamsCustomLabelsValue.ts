/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Scorecard from "../../../../api";
import * as core from "../../../../core";

export const TestcaseCreateParamsCustomLabelsValue: core.serialization.Schema<
    serializers.TestcaseCreateParamsCustomLabelsValue.Raw,
    Scorecard.TestcaseCreateParamsCustomLabelsValue
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("../../..")).FileUrl),
    core.serialization.string(),
]);

export declare namespace TestcaseCreateParamsCustomLabelsValue {
    type Raw = serializers.FileUrl.Raw | string;
}
