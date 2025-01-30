import React, {FC} from "react";

type ButtonProps = {
    children: React.ReactNode,
    onClick?: () => void;
    variant: "primary" | "secondary" | "danger";
    size?: "small" | "medium" | "large";
}

export const Button: FC<ButtonProps> = ({children, onClick, variant = "primary", size = "medium"}) => {
    const baseStyle = "rounded font-bold focus:outline-none transition-all";
    const sizeStyles = {
        small: "text-xs px-2 py-1",
        medium: "text-sm px-4 py-2",
        large: "text-lg px-6 py-3",
    }

    const variantStyles = {
        primary: "bg-yellow-500 text-black hover:bg-vellow-400",
        secondary: "bg-gray-700 text-white hover:bg-gray-600",
        danger: "bg-red-500 text-white hover:bg-red-400",
    }
    return (
        <button
            className={`${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}