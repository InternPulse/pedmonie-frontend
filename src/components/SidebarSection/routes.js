import MenuIcon from "/src/assets/menu.svg?react";
import AnalyticsIcon from "/src/assets/radar-2.svg?react";
import TransactionIcon from "/src/assets/coin.svg?react";
import PaymentIcon from "/src/assets/receipt.svg?react";
import SupportIcon from "/src/assets/messages.svg?react";
import MarchantsIcon from "/src/assets/marchants.svg?react";
import FraudDetectionIcon from "/src/assets/fraud_detection.svg?react";

export const navRoutes = [{
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
    path: "/marchants",
    name: "Marchants",
    icon: MarchantsIcon,
  },
  {
    path: "/transactions",
    name: "Transactions",
    icon: TransactionIcon,
  },
  {
    path: "/payouts",
    name: "Payouts",
    icon: PaymentIcon,
  },
  {
    path: "/fraud-detection",
    name: "Fraud Detection",
    icon: FraudDetectionIcon,
  },
  {
    path: "/support",
    name: "Support",
    icon: SupportIcon,
  },
];