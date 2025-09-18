import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlumbingPage from "./pages/services/PlumbingPage";
import ElectricalPage from "./pages/services/ElectricalPage";
import CarpentryPage from "./pages/services/CarpentryPage";
import FurnitureAssemblyPage from "./pages/services/FurnitureAssemblyPage";
import ServiceNeighborhoodPage from "./pages/services/ServiceNeighborhoodPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Service Pages */}
          <Route path="/encanador" element={<PlumbingPage />} />
          <Route path="/eletricista" element={<ElectricalPage />} />
          <Route path="/marcenaria" element={<CarpentryPage />} />
          <Route path="/montador-de-moveis" element={<FurnitureAssemblyPage />} />
          
          {/* Service + Neighborhood Pages */}
          <Route path="/:serviceSlug-:neighborhoodSlug" element={<ServiceNeighborhoodPage />} />
          <Route path="/:combined" element={<ServiceNeighborhoodPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
