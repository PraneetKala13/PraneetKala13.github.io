
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SettingsProvider, useSettings } from "@/contexts/SettingsContext";
import FloatingIcons from "@/components/FloatingIcons";
import AccessibilityToggle from "@/components/AccessibilityToggle";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const AppContent = () => {
  const { animationsEnabled } = useSettings();

  return (
    <>
      <FloatingIcons isEnabled={animationsEnabled} />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <AccessibilityToggle />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SettingsProvider>
        <Toaster />
        <Sonner />
        <AppContent />
      </SettingsProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
