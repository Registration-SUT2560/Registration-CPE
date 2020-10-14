import Vue from "vue";
import VueRouter from "vue-router";

// unauthentication components
import Home from "../components/Home.vue";
import AllNotice from "../components/AllNotice";

// administrator component
import Login from "../components/admin/Login";
import Dashboard from "../components/admin/Dashboard";
import Upload from "../components/admin/system/Upload";
import SchoolYear from "../components/admin/system/SchoolYear";
import Statistic from "../components/admin/system/Statistic";
import ManageYear from "../components/admin/system/ManageYear";
import Manual from "../components/admin/system/Manual";
import ManageTeacher from "../components/admin/system/ManageTeacher";
import NoticeAdmin from "../components/admin/system/Notice";
import SeatTeacher from "../components/admin/system/SeatTeacher";

// teacher component
import TeacherDashBoard from "../components/teacher/Dashboard";
import Notice from "../components/teacher/system/Notice";
import Profile from "../components/teacher/system/Profile";
import RegYear from "../components/teacher/system/RegYear";

// student component
import StudentDashboard from "../components/Student/Dashboard";
import SelectProject from "../components/Student/system/SelectProject";
import ViewProfile from "../components/Student/system/ViewProfile";
import ViewProject from "../components/Student/system/ViewProject";
import StudentProfile from "../components/Student/system/Profile";
import Notifications from "../components/Student/system/Notifications";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/home",
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/alogin",
    name: "loginAdmin",
    component: Login,
  },
  {
    path: "/allNotice",
    name: "allNotice",
    component: AllNotice,
  },
  {
    // admin route
    path: "/admin/:id",
    component: Dashboard,
    children: [
      {
        path: "",
        redirect: "schoolyear",
      },
      {
        path: "schoolyear",
        name: "schoolYear",
        component: SchoolYear,
      },
      {
        path: "upload",
        name: "upload",
        component: Upload,
      },
      {
        path: "statistic",
        name: "statistic",
        component: Statistic,
      },
      {
        path: "manage",
        name: "manageYear",
        component: ManageYear,
      },
      {
        path: "manual",
        name: "manual",
        component: Manual,
      },
      {
        path: "teacher",
        name: "manageTeacher",
        component: ManageTeacher,
      },
      {
        path: "notice",
        name: "noticeAdmin",
        component: NoticeAdmin,
      },
      {
        path: "seat",
        name: "seatTeacher",
        component: SeatTeacher,
      },
    ],
  },
  {
    // teacher route
    path: "/teacher/:id",
    component: TeacherDashBoard,
    children: [
      {
        path: "",
        redirect: "notice",
      },
      {
        path: "notice",
        name: "notice",
        component: Notice,
      },
      {
        path: "profile",
        name: "profile",
        component: Profile,
      },
      {
        path: "reg",
        name: "regYear",
        component: RegYear,
      },
    ],
  },
  {
    // student route
    path: "/student/:id",
    component: StudentDashboard,
    children: [
      {
        path: "",
        redirect: "select",
      },
      {
        path: "select",
        name: "selectProject",
        component: SelectProject,
      },
      {
        path: "teacher",
        name: "viewProfile",
        component: ViewProfile,
      },
      {
        path: "project",
        name: "viewProject",
        component: ViewProject,
      },
      {
        path: "profile",
        name: "studentProfile",
        component: StudentProfile,
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
