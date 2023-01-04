import { EnumAppLayer } from "../shared";
import { CustomError } from "./custom-error";
import type { CustomErrorConstructorOptions } from "./types";

export class CustomHttpClientError extends CustomError {
    constructor(options: Omit<CustomErrorConstructorOptions, "layer">) {
        super({ layer: EnumAppLayer.HttpClient, ...options });
    }
}
