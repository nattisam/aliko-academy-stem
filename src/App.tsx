import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";
import Enterprise from "./pages/Enterprise";
import Partners from "./pages/Partners";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policies from "./pages/Policies";
import Curriculum from "./pages/Curriculum";
import Certifications from "./pages/Certifications";
import StudentLogin from "./pages/StudentLogin";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Apply from "./pages/Apply";
import MyApplications from "./pages/MyApplications";
import NotFound from "./pages/NotFound";

// Admin pages
import { AdminGuard } from "./components/admin/AdminGuard";
import AdminOverview from "./pages/admin/Overview";
import AdminPrograms from "./pages/admin/Programs";
import AdminApplications from "./pages/admin/Applications";
import AdminInquiries from "./pages/admin/Inquiries";
import AdminUsers from "./pages/admin/Users";
import AdminAudit from "./pages/admin/AuditLog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:slug" element={<ProgramDetail />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/my-applications" element={<MyApplications />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminGuard><AdminOverview /></AdminGuard>} />
          <Route path="/admin/programs" element={<AdminGuard><AdminPrograms /></AdminGuard>} />
          <Route path="/admin/applications" element={<AdminGuard><AdminApplications /></AdminGuard>} />
          <Route path="/admin/inquiries" element={<AdminGuard><AdminInquiries /></AdminGuard>} />
          <Route path="/admin/users" element={<AdminGuard><AdminUsers /></AdminGuard>} />
          <Route path="/admin/audit" element={<AdminGuard><AdminAudit /></AdminGuard>} />

          <Route path="/domains" element={<Programs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
