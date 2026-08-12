export default function PlusIcon({ size = 87, className = "" }) {
    return (
        <svg width="28" height={size} className={className} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" width="3" height="28" rx="1.5" fill="#0466A5"/>
            <rect x="28" y="12" width="3" height="28" rx="1.5" transform="rotate(90 28 12)" fill="#0466A5"/>
        </svg>
    );
}