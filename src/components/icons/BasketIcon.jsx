export default function BasketIcon({ size = 87, className = "" }) {
    return (
        <svg width="16" height={size} className={className} viewBox="0 0 31 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.5" y="13.5" width="28" height="28" rx="3.5" stroke="currentColor" stroke-width="3"/>
            <path d="M15.5 0C20.1944 0 24 3.80558 24 8.5V18H21V8.5C21 5.46243 18.5376 3 15.5 3C12.4624 3 10 5.46243 10 8.5V18H7V8.5C7 3.80558 10.8056 0 15.5 0Z" fill="currentColor"/>
        </svg>
    );
}