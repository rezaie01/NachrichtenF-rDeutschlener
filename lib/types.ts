
import React, { FC, ReactNode } from "react";
export type FCWithChildren<props = {}> = FC<props & {children?: ReactNode}>;


export type FormError = {message: string, fieldId: string, fieldName: string}