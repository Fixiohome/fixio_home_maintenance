import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, X, MessageSquare, Phone, Mail, Calendar, MapPin, User, ShieldCheck } from 'lucide-react';
import { Booking } from '../types';

interface BookingSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  booking: Booking | null;
}

export default function BookingSuccessModal({ isOpen, onClose, booking }: BookingSuccessModalProps) {
  if (!isOpen || !booking) return null;

  // Create WhatsApp pre-filled text
  const whatsappNumber = '971527804738';
  const messageText = `Hi Fixio Home Maintenance, I have just submitted a booking request!
*Request ID:* ${booking.id}
*Name:* ${booking.name}
*Mobile:* ${booking.mobile}
*Service/Plan:* ${booking.service}${booking.planType ? ` (${booking.planType})` : ''}
*Area:* ${booking.area}
*Preferred Date:* ${booking.date}
*Message:* ${booking.message || 'None'}`;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(messageText)}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-lg overflow-hidden border border-slate-800 rounded-3xl bg-slate-950 shadow-2xl"
        >
          {/* Accent header glow */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-500" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute p-2 transition-colors rounded-full top-4 right-4 text-slate-400 hover:text-white hover:bg-slate-900"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-8">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ type: 'spring', damping: 15, delay: 0.1 }}
                className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-emerald-500/10 text-emerald-400"
              >
                <CheckCircle className="w-10 h-10" />
              </motion.div>

              <h3 className="text-2xl font-bold tracking-tight text-white font-sans sm:text-3xl">
                Booking Requested!
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Thank you for choosing <span className="font-semibold text-yellow-500">FIXIO</span>. We have received your request and will contact you within 30 minutes.
              </p>
            </div>

            {/* Request Details summary */}
            <div className="mt-6 p-5 border border-slate-800/80 rounded-2xl bg-slate-900/40">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">Request ID</span>
                <span className="text-xs font-mono font-bold text-yellow-500">{booking.id}</span>
              </div>

              <div className="mt-4 space-y-3.5">
                <div className="flex items-start gap-3">
                  <User className="w-4 h-4 mt-0.5 text-slate-500 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500">Contact Person</p>
                    <p className="text-sm font-semibold text-white">{booking.name}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-0.5 text-slate-500 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500">Mobile Number</p>
                    <p className="text-sm font-mono font-semibold text-white">{booking.mobile}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-4 h-4 mt-0.5 text-slate-500 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500">Requested Service / Plan</p>
                    <p className="text-sm font-semibold text-yellow-500">
                      {booking.service} {booking.planType ? `(${booking.planType})` : ''}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-slate-500 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500">Location Area</p>
                    <p className="text-sm font-semibold text-white">{booking.area}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 mt-0.5 text-slate-500 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500">Preferred Appointment Date</p>
                    <p className="text-sm font-semibold text-white">{booking.date}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-4 text-center text-sm font-bold text-white rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 active:scale-98 transition shadow-lg shadow-emerald-950/20"
              >
                <MessageSquare className="w-5 h-5 fill-white text-emerald-600" />
                Confirm on WhatsApp Instantly
              </a>

              <button
                onClick={onClose}
                className="w-full py-3.5 text-xs font-semibold text-slate-400 hover:text-white border border-slate-800 rounded-xl hover:bg-slate-900 transition active:scale-98"
              >
                Return to Website
              </button>
            </div>

            {/* Footer trust badge */}
            <p className="mt-4 text-center text-[10px] text-slate-600">
              Your details are transmitted securely. For immediate help, call us 24/7 at +971 527804738.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
