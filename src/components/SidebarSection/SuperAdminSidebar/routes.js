import MenuIcon from "/src/assets/menu.svg?react";
import AnalyticsIcon from "/src/assets/radar-2.svg?react";
import TransactionIcon from "/src/assets/coin.svg?react";
import PaymentIcon from "/src/assets/receipt.svg?react";
import SupportIcon from "/src/assets/messages.svg?react";
import MarchantsIcon from "/src/assets/marchants.svg?react";
import FraudDetectionIcon from "/src/assets/fraud_detection.svg?react";

export const navRoutes = [
  {
    path: "/admin",
    name: "Overview",
    icon: MenuIcon,
  },
  {
    path: "/admin/analytics",
    name: "Analytics",
    icon: AnalyticsIcon,
  },
  {
    path: "/admin/marchants",
    name: "Marchants",
    icon: MarchantsIcon,
  },
  {
    path: "/admin/transactions",
    name: "Transactions",
    icon: TransactionIcon,
  },
  {
    path: "/admin/payouts",
    name: "Payouts",
    icon: PaymentIcon,
  },
  {
    path: "/admin/fraud-detection",
    name: "Fraud Detection",
    icon: FraudDetectionIcon,
  },
  {
    path: "/admin/support",
    name: "Support",
    icon: SupportIcon,
  },
];
