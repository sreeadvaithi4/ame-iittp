import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Workshops from "./pages/Workshops";
import Team from "./pages/Team";
import LifeAtAME from "./pages/LifeAtAME";
import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";

// Workshop pages
import MatlabWorkshop from "./pages/workshops/MatlabWorkshop";
import PythonWorkshop from "./pages/workshops/PythonWorkshop";
import LatexWorkshop from "./pages/workshops/LatexWorkshop";
import ThreeDPrinting from "./pages/workshops/ThreeDPrinting";
import Autodesk from "./pages/workshops/Autodesk";
import Abaqus from "./pages/workshops/Abaqus";

// Event pages
import IndustrialVisits from "./pages/events/IndustrialVisits";
import IndustrialLectures from "./pages/events/IndustrialLectures";
import Competitions from "./pages/events/Competitions";
import Quizzes from "./pages/events/Quizzes";
import SportsTournaments from "./pages/events/SportsTournaments";
import HappyHours from "./pages/events/HappyHours";

// Life at AME pages
import FacultyInteractions from "./pages/life-at-ame/FacultyInteractions";
import Freshers from "./pages/life-at-ame/Freshers";
import Farewells from "./pages/life-at-ame/Farewells";
import AlumniInteractions from "./pages/life-at-ame/AlumniInteractions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<Events />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/team" element={<Team />} />
          <Route path="/life-at-ame" element={<LifeAtAME />} />
          <Route path="/articles" element={<Posts />} />
          
          {/* Workshop routes */}
          <Route path="/workshops/matlab" element={<MatlabWorkshop />} />
          <Route path="/workshops/python" element={<PythonWorkshop />} />
          <Route path="/workshops/latex" element={<LatexWorkshop />} />
          <Route path="/workshops/3d-printing" element={<ThreeDPrinting />} />
          <Route path="/workshops/autodesk" element={<Autodesk />} />
          <Route path="/workshops/abaqus" element={<Abaqus />} />
          
          {/* Event routes */}
          <Route path="/events/industrial-visits" element={<IndustrialVisits />} />
          <Route path="/events/industrial-lectures" element={<IndustrialLectures />} />
          <Route path="/events/competitions" element={<Competitions />} />
          <Route path="/events/quizzes" element={<Quizzes />} />
          <Route path="/events/sports-tournaments" element={<SportsTournaments />} />
          <Route path="/events/happy-hours" element={<HappyHours />} />
          
          {/* Life at AME routes */}
          <Route path="/life-at-ame/faculty-interactions" element={<FacultyInteractions />} />
          <Route path="/life-at-ame/freshers" element={<Freshers />} />
          <Route path="/life-at-ame/farewells" element={<Farewells />} />
          <Route path="/life-at-ame/alumni-interactions" element={<AlumniInteractions />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
