import React from "react";
interface ButtonInterface {
    onClick?: () => void;
    label?: string;
    className?: string;
    divClassName?: string;
    disabled?: boolean;
}
export declare const Button: React.FC<ButtonInterface>;
export {};
