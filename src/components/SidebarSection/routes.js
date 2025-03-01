import MenuIcon from "/src/assets/menu.svg?react";
import AnalyticsIcon from "/src/assets/radar-2.svg?react";
import TransactionIcon from "/src/assets/coin.svg?react";
import PaymentIcon from "/src/assets/receipt.svg?react";
import SubscriptionIcon from "/src/assets/receipt-2.svg?react";
import SupportIcon from "/src/assets/messages.svg?react";

export const navRoutes = [
  {
    path: "/",
    name: "Overview",
    icon: MenuIcon,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: AnalyticsIcon,
  },
  {
    path: "/transactions",
    name: "Transactions",
    icon: TransactionIcon,
  },
  {
    path: "/payments",
    name: "Payments",
    icon: PaymentIcon,
  },
  {
    path: "/subscriptions",
    name: "Subscriptions",
    icon: SubscriptionIcon,
  },
  {
    path: "/support",
    name: "Support",
    icon: SupportIcon,
  },
];
