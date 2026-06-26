import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import StatsRow from './components/StatsRow';
import AboutSection from './components/AboutSection';
import AmcPlansSection from './components/AmcPlansSection';
import ProjectsSection from './components/ProjectsSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingSuccessModal from './components/BookingSuccessModal';
import BookingsModal from './components/BookingsModal';
import { Booking } from './types';

export default function App() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [lastBooking, setLastBooking] = useState<Booking | null>(null);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedServicePreset, setSelectedServicePreset] = useState('AC SERVICES');

  // Load bookings from LocalStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('fixio_bookings');
      if (stored) {
        setBookings(JSON.parse(stored));
      }
    } catch (err) {
      console.error('Failed to load bookings from localStorage:', err);
    }
  }, []);

  // Scroll Helper
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Submit Booking inquiry
  const handleSubmitBooking = async (
    bookingData: Omit<Booking, 'id' | 'status' | 'createdAt'>
  ) => {
    const id = `FIX-${Math.floor(100000 + Math.random() * 900000)}`;
    const newBooking: Booking = {
      ...bookingData,
      id,
      status: 'Pending',
      createdAt: new Date().toISOString(),
    };

    // Forward details securely to Formspree
    try {
      const response = await fetch('https://formspree.io/f/mbdvodpr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          id: id,
          name: newBooking.name,
          mobile: newBooking.mobile,
          service: newBooking.service,
          area: newBooking.area,
          date: newBooking.date,
          message: newBooking.message || 'None',
          _subject: `New FIXIO Booking Request - ${id} (${newBooking.service})`
        })
      });
      if (!response.ok) {
        console.warn('Formspree returned non-ok status:', response.status);
      }
    } catch (err) {
      console.error('Error sending request to Formspree:', err);
    }

    const updatedBookings = [newBooking, ...bookings];
    setBookings(updatedBookings);
    
    try {
      localStorage.setItem('fixio_bookings', JSON.stringify(updatedBookings));
    } catch (err) {
      console.error('Failed to save booking to localStorage:', err);
    }

    setLastBooking(newBooking);
    setIsSuccessOpen(true);
  };

  // Update Booking Status (for admin console)
  const handleUpdateStatus = (id: string, status: Booking['status']) => {
    const updated = bookings.map((b) => (b.id === id ? { ...b, status } : b));
    setBookings(updated);
    try {
      localStorage.setItem('fixio_bookings', JSON.stringify(updated));
    } catch (err) {
      console.error('Error updating status in localStorage:', err);
    }
  };

  // Delete Booking record (for admin console)
  const handleDeleteBooking = (id: string) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    try {
      localStorage.setItem('fixio_bookings', JSON.stringify(updated));
    } catch (err) {
      console.error('Error deleting booking from localStorage:', err);
    }
  };

  // Preset chooser helper
  const handleSelectServicePreset = (serviceTitle: string) => {
    setSelectedServicePreset(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col selection:bg-[#EAB308] selection:text-[#0C1E35] overflow-x-hidden antialiased">
      {/* Navigation Header */}
      <Navbar 
        onScrollTo={handleScrollToSection} 
        onOpenAdmin={() => setIsAdminOpen(true)} 
      />

      {/* Main Pages */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero 
          onSubmitBooking={handleSubmitBooking} 
          selectedServicePreset={selectedServicePreset}
          setSelectedServicePreset={setSelectedServicePreset}
        />

        {/* Services Grid Section */}
        <ServicesSection onSelectService={handleSelectServicePreset} />

        {/* Numbers & Assurance Counters Section */}
        <StatsRow />

        {/* About & Assurance Image collage section */}
        <AboutSection onSelectService={handleSelectServicePreset} />

        {/* AMC Maintenance subscription section */}
        <AmcPlansSection onSelectPlan={handleSelectServicePreset} />

        {/* Recent Works Gallery Portfolio section */}
        <ProjectsSection onSelectService={handleSelectServicePreset} />

        {/* Client Testimonials Section */}
        <Testimonials />

      </main>

      {/* Primary Footer */}
      <Footer 
        onScrollTo={handleScrollToSection} 
        onOpenAdmin={() => setIsAdminOpen(true)} 
      />

      {/* Interactive Success Modal */}
      <BookingSuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        booking={lastBooking}
      />

      {/* Interactive Admin Booking Console Dashboard */}
      <BookingsModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        bookings={bookings}
        onUpdateStatus={handleUpdateStatus}
        onDeleteBooking={handleDeleteBooking}
      />

      {/* Floating Sticky Actions - WhatsApp & Phone */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 select-none">
        {/* Floating Call Button */}
        <motion.a
          href="tel:+971527804738"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0C1E35] text-[#EAB308] shadow-lg border border-slate-700/50 hover:bg-slate-900 transition-all duration-300 hover:scale-110 active:scale-95 group relative"
          title="Call Support 24/7"
        >
          <span className="absolute right-14 bg-slate-950 text-white text-[10px] font-bold py-1 px-2.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow border border-slate-850 uppercase tracking-wider">
            Call Support 24/7
          </span>
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.384 17.752c0-.119-.016-.234-.047-.347-.075-.27-.248-.521-.497-.714-.148-.113-.314-.216-.49-.307-.847-.433-1.683-.861-2.52-1.288-.302-.154-.627-.229-.949-.229-.408 0-.811.121-1.157.356-.364.248-.684.549-1.01.839-.181.16-.363.319-.544.479-.496-.301-.989-.624-1.468-.962-.71-.502-1.391-1.059-2.028-1.684-.625-.612-1.196-1.272-1.706-1.968-.344-.469-.672-.953-.976-1.442.164-.177.327-.354.49-.53.296-.321.603-.635.856-.99.239-.338.363-.733.363-1.134a1.864 1.864 0 0 0-.233-.929c-.433-.822-.865-1.644-1.298-2.466a1.996 1.996 0 0 0-.313-.478c-.198-.244-.454-.412-.73-.485a2.158 2.158 0 0 0-.354-.045c-.443 0-.877.172-1.218.49 l-.478.445c-.567.528-1.077 1.114-1.503 1.763a6.83 6.83 0 0 0-.742 1.636c-.475 1.503-.223 3.097.464 4.544.482 1.018 1.111 1.983 1.849 2.872.932 1.123 1.99 2.14 3.14 3.018.991.758 2.067 1.408 3.203 1.921 1.472.665 3.082.9 4.593.407a6.621 6.621 0 0 0 1.64-.725c.655-.417 1.252-.916 1.785-1.471l.452-.469c.325-.335.5-.761.5-1.194z" />
          </svg>
        </motion.a>

        {/* Floating WhatsApp Button with pulse effect */}
        <motion.a
          href="https://api.whatsapp.com/send?phone=971527804738&text=Hi%20Fixio%20Home%2520Maintenance%2c%20I%20would%20like%20to%20inquire%20about%20your%2520services%2e"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#12b057] transition-all duration-300 hover:scale-110 active:scale-95 group relative"
          title="Chat on WhatsApp"
        >
          {/* Ambient green pulse wave */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />
          
          <span className="absolute right-14 bg-slate-950 text-white text-[10px] font-bold py-1 px-2.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow border border-slate-850 uppercase tracking-wider">
            WhatsApp Support
          </span>
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.7 1.45 5.4 0 9.8-4.4 9.8-9.8s-4.4-9.8-9.8-9.8-9.8 4.4-9.8 9.8c0 2 .5 3.9 1.5 5.6l-.3.9-.9 3.3 3.4-.9 1-.5zm10.7-3.6c-.3-.2-1.7-1-2-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1.1-1 1.3-.2.2-.4.2-.7.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5L8 7.3c-.3-.8-.7-.8-.9-.8H6.5c-.3 0-.7.1-1.1.5C5 7.4 4 8.5 4 10.6s1.5 4.3 1.7 4.6c.2.3 3 4.6 7.3 6.5 1 .4 1.8.7 2.4.9 1 .3 2 .3 2.7.2.8-.1 2.5-1 2.9-2 .4-1 .4-1.9.3-2.1-.1-.1-.4-.2-.7-.4z"/>
          </svg>
        </motion.a>
      </div>
    </div>
  );
}
