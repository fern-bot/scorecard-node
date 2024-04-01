/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Scorecard from "../../api";
import * as core from "../../core";

export const TestrecordCustomOutputsValue: core.serialization.Schema<
    serializers.TestrecordCustomOutputsValue.Raw,
    Scorecard.TestrecordCustomOutputsValue
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("..")).FileUrl),
    core.serialization.lazyObject(async () => (await import("..")).JsonObject),
]);

export declare namespace TestrecordCustomOutputsValue {
    type Raw = string | serializers.FileUrl.Raw | serializers.JsonObject.Raw;
}
