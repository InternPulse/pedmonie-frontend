import MenuIcon from "/src/assets/menu.svg?react";
import AnalyticsIcon from "/src/assets/radar-2.svg?react";
import TransactionIcon from "/src/assets/coin.svg?react";
import PaymentIcon from "/src/assets/receipt.svg?react";
import SubscriptionIcon from "/src/assets/receipt-2.svg?react";
import SupportIcon from "/src/assets/messages.svg?react";

export const navRoutes = [
  {
    path: "/merchant",
    name: "Overview",
    icon: MenuIcon,
  },
  {
    path: "/merchant/analytics",
    name: "Analytics",
    icon: AnalyticsIcon,
  },
  {
    path: "/merchant/transactions",
    name: "Transactions",
    icon: TransactionIcon,
  },
  {
    path: "/merchant/payments",
    name: "Payments",
    icon: PaymentIcon,
  },
  {
    path: "/merchant/subscriptions",
    name: "Subscriptions",
    icon: SubscriptionIcon,
  },
  {
    path: "/merchant/support",
    name: "Support",
    icon: SupportIcon,
  },
];
