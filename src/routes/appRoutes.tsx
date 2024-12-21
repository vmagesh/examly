import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import ComponentPageLayout from "../pages/component/ComponentPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import UserAnalytics from "../pages/dashboard/UserAnalytics";
import QuestionAnalytics from "../pages/dashboard/QuestionAnalytics";
import ExamAnalytics from "../pages/dashboard/ExamAnalytics";
import StudentAnalytics from "../pages/dashboard/StudentAnalytics";
import AddQuestion from "../pages/admin/AddQuestion";
import CreateExam from "../pages/admin/CreateExam";
import DocumentationSection from "../pages/documentation/DocumentationSection";
import TakeExam from "../pages/students/TakeExam";
import UserRegister from "../pages/admin/UserRegister";
import ProfilePageView from "../pages/students/ProfilePageView";
import SignUp from "../pages/signup/signup";
import Login from "../pages/login/login";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/dashboard",
    element: <DashboardPageLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "dashboard.index"
      },
      {
        path: "/dashboard/useranalytics",
        element: <UserAnalytics />,
        state: "user.analytics",
        sidebarProps: {
          displayText: "User Analytic"
        },
      },
      {
        path: "/dashboard/questionanalytics",
        element: <QuestionAnalytics />,
        state: "question.analytics",
        sidebarProps: {
          displayText: "Question Analytic"
        }
      },
      {
        path: "/dashboard/examanalytics",
        element: <ExamAnalytics />,
        state: "exam.analytics",
        sidebarProps: {
          displayText: "Exam Analytic"
        }
      },
      {
        path: "/dashboard/studentanalytics",
        element: <StudentAnalytics />,
        state: "student.saas",
        sidebarProps: {
          displayText: "Student Analytic"
        }
      }
    ]
  },
  {
    path: "/student",
    element: <ComponentPageLayout />,
    state: "component",
    sidebarProps: {
      displayText: "Student",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/student/exam",
        element: <TakeExam />,
        state: "takeexam.student",
        sidebarProps: {
          displayText: "Take Exam"
        },
      },
      {
        path: "/student/profileview",
        element: <ProfilePageView />,
        state: "profileview.student",
        sidebarProps: {
          displayText: "Profile"
        },
      }
    ]
  },
  {
    path: "/admin",
    element: <ComponentPageLayout />,
    state: "component",
    sidebarProps: {
      displayText: "Admin",
      icon: <AppsOutlinedIcon />
    },
    child: [{
      path: "/admin/user-register",
      element: <UserRegister />,
      state: "userregister.admin",
      sidebarProps: {
        displayText: "Register User"
      },
    },
    {
      path: "/admin/add-question",
      element: <AddQuestion />,
      state: "addquestion.admin",
      sidebarProps: {
        displayText: "Add Question"
      },
    },
    {
      path: "/admin/create-exam",
      element: <CreateExam />,
      state: "createexam.admin",
      sidebarProps: {
        displayText: "Create Exam"
      },
    }
    ]
  },
  {
    path: "/documentation",
    element: <DocumentationSection />,
    state: "documentation",
    sidebarProps: {
      displayText: "Documentation",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/signup",
    element: <SignUp />,
    state: "signup",
    sidebarProps: {
      displayText: "SignUp",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/login",
    element: <Login />,
    state: "login",
    sidebarProps: {
      displayText: "Login",
      icon: <ArticleOutlinedIcon />
    }
  }
];

export default appRoutes;