export default function PhoneIcon({ size = 87, className = "" }) {
    return (
        <svg
            width="45"
            height={size}
            viewBox="0 0 45 87"
            fill="none"
            className={className}
        >
            <rect
                x="1.5"
                y="1.5"
                width="42"
                height="84"
                rx="6.5"
                stroke="currentColor"
                strokeWidth="3"
            />

            <path
                d="M13.0002 3H32.0002V5C32.0002 6.10457 31.1048 7 30.0002 7H15.0002C13.8957 7 13.0002 6.10457 13.0002 5V3Z"
                fill="currentColor"
            />
        </svg>
    );
}