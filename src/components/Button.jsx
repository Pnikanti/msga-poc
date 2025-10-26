export const Button = ({ onClick, children, className = "" }) => {
    const baseClasses = "text-white bg-red-500 hover:bg-red-600 active:bg-red-700 rounded-full px-5 py-2.5 text-center transition-colors duration-100 ease-in-out";
    const combinedClasses = `${baseClasses} ${className}`.trim();

    return (
        <button
            type="button"
            onClick={onClick}
            class={combinedClasses}>
            {children}
        </button>
    )
}