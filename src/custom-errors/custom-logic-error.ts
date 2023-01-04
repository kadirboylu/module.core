import { EnumAppLayer } from "../shared";
import { CustomError } from ".";
import type { CustomErrorConstructorOptions } from "./types";

export class CustomLogicError extends CustomError {
    constructor(options: Omit<CustomErrorConstructorOptions, "layer">) {
        super({ layer: EnumAppLayer.Logic, ...options });
    }
}
