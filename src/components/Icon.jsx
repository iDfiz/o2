import PhoneIcon from "./icons/PhoneIcon";
import HeadphonesIcon from "./icons/HeadphonesIcon";
import WatchIcon from "./icons/WatchIcon";
import TabletIcon from "./icons/TabletIcon";
import LaptopIcon from "./icons/LaptopIcon";
import AccessoriesIcon from "./icons/AccessoriesIcon";
import ShieldIcon from "./icons/ShieldIcon"
import DeliveryIcon from "./icons/DeliveryIcon";
import ProcentIcon from "./icons/ProcentIcon";
import HeartIcon from "./icons/HeartIcon";
import BasketIcon from "./icons/BasketIcon";
import MailIcon from "./icons/MailIcon";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import StarIcon from "./icons/StarIcon";
import PlusIcon from "./icons/PlusIcon";
import MinusIcon from "./icons/MinusIcon";
import VerificationIcon from "./icons/VerificationIcon";
import BankCardIcon from "./icons/BankCardIcon";
import ShopIcon from "./icons/ShopIcon";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import ArrowLeftIcon from "./icons/ArrowLeftIcon";
import ArrowUpIcon from "./icons/ArrowUpIcon";


const icons = {
    phone: PhoneIcon,
    headphones: HeadphonesIcon,
    watch: WatchIcon,
    tablet: TabletIcon,
    laptop: LaptopIcon,
    accessories: AccessoriesIcon,
    shield: ShieldIcon,
    delivery: DeliveryIcon,
    procent: ProcentIcon,
    heart: HeartIcon,
    basket: BasketIcon,
    mail: MailIcon,
    arrowRight: ArrowRightIcon,
    arrowDown: ArrowDownIcon,
    arrowLeft: ArrowLeftIcon,
    arrowUp: ArrowUpIcon,
    star: StarIcon,
    plus: PlusIcon,
    minus: MinusIcon,
    shop: ShopIcon,
    verification: VerificationIcon,
    bankCard: BankCardIcon
};

export default function Icon({ name, size, className = "" }) {
    const IconComponent = icons[name];

    if (!IconComponent) {
        console.warn(`Иконка "${name}" не найдена`);
        return null;
    }

    return (
        <IconComponent
            size={size}
            className={className}
        />
    );
}