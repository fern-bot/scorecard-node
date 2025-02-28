/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Scorecard from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Score {
    interface Options {
        environment?: core.Supplier<environments.ScorecardEnvironment | string>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
        abortSignal?: AbortSignal;
    }
}

export class Score {
    constructor(protected readonly _options: Score.Options) {}

    /**
     * Create a score
     *
     * @param {number} runId - The ID of the run that created the testrecord to be scored.
     * @param {number} testrecordId - The ID of the testrecord to be scored.
     * @param {Scorecard.ScoreCreateParams} request
     * @param {Score.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Scorecard.UnauthorizedError}
     * @throws {@link Scorecard.ForbiddenError}
     * @throws {@link Scorecard.NotFoundError}
     * @throws {@link Scorecard.UnprocessableEntityError}
     *
     * @example
     *     await scorecard.score.create(1, 1, {
     *         metricId: 1
     *     })
     */
    public async create(
        runId: number,
        testrecordId: number,
        request: Scorecard.ScoreCreateParams,
        requestOptions?: Score.RequestOptions
    ): Promise<Scorecard.Grade> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ScorecardEnvironment.Default,
                `v1/run/${encodeURIComponent(runId)}/testrecord/${encodeURIComponent(testrecordId)}/score`
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "scorecard-ai",
                "X-Fern-SDK-Version": "0.4.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            body: await serializers.ScoreCreateParams.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.Grade.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Scorecard.UnauthorizedError(
                        await serializers.UnauthenticatedError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 403:
                    throw new Scorecard.ForbiddenError(
                        await serializers.UnauthorizedErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Scorecard.NotFoundError(
                        await serializers.NotFoundErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 422:
                    throw new Scorecard.UnprocessableEntityError(
                        await serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.ScorecardError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ScorecardError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ScorecardTimeoutError();
            case "unknown":
                throw new errors.ScorecardError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Update a score
     *
     * @param {number} runId - The run ID that created the test record to be scored.
     * @param {number} testrecordId - The ID of the testrecord whose score will be updated.
     * @param {number} scoreId - The ID of the score to be updated.
     * @param {Scorecard.ScoreUpdateParams} request
     * @param {Score.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Scorecard.UnauthorizedError}
     * @throws {@link Scorecard.ForbiddenError}
     * @throws {@link Scorecard.NotFoundError}
     * @throws {@link Scorecard.UnprocessableEntityError}
     *
     * @example
     *     await scorecard.score.update(1, 1, 1)
     */
    public async update(
        runId: number,
        testrecordId: number,
        scoreId: number,
        request: Scorecard.ScoreUpdateParams = {},
        requestOptions?: Score.RequestOptions
    ): Promise<Scorecard.Grade> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ScorecardEnvironment.Default,
                `v1/run/${encodeURIComponent(runId)}/testrecord/${encodeURIComponent(
                    testrecordId
                )}/score/${encodeURIComponent(scoreId)}`
            ),
            method: "PATCH",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "scorecard-ai",
                "X-Fern-SDK-Version": "0.4.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            body: await serializers.ScoreUpdateParams.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.Grade.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Scorecard.UnauthorizedError(
                        await serializers.UnauthenticatedError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 403:
                    throw new Scorecard.ForbiddenError(
                        await serializers.UnauthorizedErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Scorecard.NotFoundError(
                        await serializers.NotFoundErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 422:
                    throw new Scorecard.UnprocessableEntityError(
                        await serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.ScorecardError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ScorecardError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ScorecardTimeoutError();
            case "unknown":
                throw new errors.ScorecardError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = (await core.Supplier.get(this._options.apiKey)) ?? process?.env["SCORECARD_API_KEY"];
        return { "X-API-Key": apiKeyValue };
    }
}
