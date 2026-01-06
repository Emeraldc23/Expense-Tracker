import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

export const expenseDetails = [
  {
    title: "Total Expenses",
    icon: AttachMoneyOutlinedIcon,

    key: "balExp",
  },
  {
    title: "Total Income",
    icon: AccountBalanceWalletOutlinedIcon,

    key: "balIncom",
  },
  { title: "My Balance", icon: TrendingUpOutlinedIcon, key: "bal" },
];
