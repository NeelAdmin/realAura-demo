// components/sidebar/sidebar.config.ts

import {
  Home,
  User,
  Heart,
  Clock,
  FileCheck,
  FileText,
  IndianRupee,
  Gift,
  ThumbsUp,
  HelpCircle,
  Headphones,
} from "lucide-react";

export type SidebarItemType = {
  label: string;
  icon: any;
  path: string;
  roles: string[];
  notificationKey?: string;
};

export type SidebarSectionType = {
  title: string;
  items: SidebarItemType[];
};

export const SIDEBAR_CONFIG: SidebarSectionType[] = [
  {
    title: "User Profile",
    items: [
      {
        label: "Dashboard",
        icon: Home,
        path: "/dashboard",
        roles: ["OWNER", "TENANT"],
      },
      {
        label: "Profile",
        icon: User,
        path: "/profile",
        roles: ["OWNER", "TENANT"],
      },
    ],
  },
  {
    title: "Properties",
    items: [
      {
        label: "Liked Properties",
        icon: Heart,
        path: "/liked",
        roles: ["OWNER", "TENANT"],
      },
      {
        label: "Schedule Visit History",
        icon: Clock,
        path: "/visit-history",
        roles: ["OWNER", "TENANT"],
        notificationKey: "visitCount",
      },
    ],
  },
  {
    title: "Document",
    items: [
      {
        label: "Document Verification",
        icon: FileCheck,
        path: "/document-verification",
        roles: ["OWNER", "TENANT"],
      },
      {
        label: "Agreement",
        icon: FileText,
        path: "/agreement",
        roles: ["OWNER", "TENANT"],
      },
    ],
  },
  {
    title: "Booking History",
    items: [
      {
        label: "Payment History",
        icon: IndianRupee,
        path: "/payment-history",
        roles: ["OWNER", "TENANT"],
      },
    ],
  },
  {
    title: "Rewards & Trust",
    items: [
      {
        label: "Refer and Earn",
        icon: Gift,
        path: "/refer",
        roles: ["OWNER", "TENANT"],
      },
      {
        label: "Rate Your Owner",
        icon: ThumbsUp,
        path: "/rate-owner",
        roles: ["TENANT"], // example dynamic restriction
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        label: "Help",
        icon: HelpCircle,
        path: "/help",
        roles: ["OWNER", "TENANT"],
      },
      {
        label: "Contact Us",
        icon: Headphones,
        path: "/contact",
        roles: ["OWNER", "TENANT"],
      },
    ],
  },
];
