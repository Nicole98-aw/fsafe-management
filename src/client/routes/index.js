import React from "react";
import JumbotronWrapper from "../components/JumbotronWrapper";
import DashboardPage from "../components/dashboard/Dashboard";
import EditModal from "../components/Tables/EditModal";
import SaccoDashBoard from "../components/Sacco/index.js";
import RiderPage from "../components/Riders";
import Messages from "../components/messages/newMessage";
// import DashboardPage from "../components/dashboard/Dashboard";
import Saccotable from "../components/Sacco/saccotable";

// Private routes.
const AdminOnly = () => <JumbotronWrapper title="Admin Only" />;
const Users = () => <JumbotronWrapper title="Users" />;
const Dashboard = () => <DashboardPage />;
const Sacco = () => <SaccoDashBoard />;
const Riders = () => <RiderPage />;
const Multistep = () => <JumbotronWrapper title="Multistep" />;
const Sms = () => <Messages />;
const Profile = () => <JumbotronWrapper title="Profile" />;
const Home = () => <DashboardPage />;

export {
  AdminOnly,
  Users,
  Dashboard,
  Sacco,
  Riders,
  Multistep,
  Sms,
  Profile,
  Home
};
