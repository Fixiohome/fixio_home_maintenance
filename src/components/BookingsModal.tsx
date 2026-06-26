import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, Calendar, Phone, MapPin, Check, Filter, Trash2, ShieldCheck, RefreshCw } from 'lucide-react';
import { Booking } from '../types';

interface BookingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: Booking[];
  onUpdateStatus: (id: string, status: Booking['status']) => void;
  onDeleteBooking: (id: string) => void;
}

export default function BookingsModal({
  isOpen,
  onClose,
  bookings,
  onUpdateStatus,
  onDeleteBooking
}: BookingsModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | Booking['status']>('All');

  if (!isOpen) return null;

  const filteredBookings = bookings.filter((b) => {
    const matchesSearch =
      b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.mobile.includes(searchTerm) ||
      b.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.area.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'All' || b.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: Booking['status']) => {
    switch (status) {
      case 'Pending':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      case 'Confirmed':
        return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'Completed':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'Cancelled':
        return 'text-rose-400 bg-rose-500/10 border-rose-500/20';
      default:
        return 'text-slate-400 bg-slate-500/10 border-slate-500/20';
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          className="relative w-full max-w-4xl h-[80vh] flex flex-col border border-slate-800 rounded-3xl bg-slate-950 shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-800/80 bg-slate-900/30">
            <div>
              <h3 className="text-xl font-bold text-white font-sans flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-yellow-500" />
                Fixio Booking Request Manager
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Stakeholder dashboard for viewing and managing inquiries ({bookings.length} total)
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 transition-colors rounded-full text-slate-400 hover:text-white hover:bg-slate-900"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Filters Bar */}
          <div className="p-4 bg-slate-900/10 border-b border-slate-800/80 grid md:grid-cols-3 gap-3">
            {/* Search */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search name, phone, area, service..."
                className="w-full pl-9 pr-4 py-2 border border-slate-800 bg-slate-900/40 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-yellow-500/50 transition-colors"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-medium shrink-0 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Filter Status:
              </span>
              <div className="flex bg-slate-900/50 border border-slate-800 p-0.5 rounded-lg w-full">
                {['All', 'Pending', 'Confirmed', 'Completed'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setStatusFilter(s as any)}
                    className={`flex-1 py-1 text-xs font-semibold rounded-md transition-colors ${
                      statusFilter === s
                        ? 'bg-yellow-500 text-slate-950 shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Hint / Callouts */}
            <div className="hidden md:flex items-center justify-end text-xs text-slate-500 italic pr-2">
              Submit a service request in the main form to populate here instantly.
            </div>
          </div>

          {/* Table / List Area */}
          <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-slate-800">
            {filteredBookings.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <Calendar className="w-12 h-12 text-slate-700 mb-4" />
                <p className="text-slate-400 font-semibold">No requests found</p>
                <p className="text-xs text-slate-600 mt-1">
                  Try adjusting your filters or submit a test request in the booking form.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredBookings.map((b) => (
                  <div
                    key={b.id}
                    className="group border border-slate-800 hover:border-slate-700/80 p-5 rounded-2xl bg-slate-900/20 hover:bg-slate-900/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-bold text-white font-sans">{b.name}</span>
                        <span className="text-xs font-semibold text-yellow-500/90 tracking-wide bg-yellow-500/5 px-2 py-0.5 rounded-md border border-yellow-500/10">
                          {b.service}
                        </span>
                        {b.planType && (
                          <span className="text-[10px] font-bold text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">
                            {b.planType}
                          </span>
                        )}
                        <span className="text-[10px] font-mono text-slate-500 ml-auto md:ml-0">
                          ID: {b.id} • {new Date(b.createdAt).toLocaleDateString()}
                        </span>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          <span className="font-mono">{b.mobile}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          <span>{b.area}</span>
                        </div>
                        <div className="flex items-center gap-1.5 col-span-2">
                          <Calendar className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          <span>Appointment Date: <b className="text-slate-300 font-semibold">{b.date}</b></span>
                        </div>
                      </div>

                      {b.message && (
                        <div className="text-xs text-slate-500 mt-1 bg-slate-900/50 p-2.5 rounded-xl border border-slate-850">
                          <span className="text-[10px] uppercase tracking-wider font-bold text-slate-600 block mb-0.5">MESSAGE</span>
                          {b.message}
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 shrink-0 md:justify-end border-t md:border-t-0 border-slate-850 pt-3 md:pt-0">
                      {/* Status pill / dropdown trigger */}
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${getStatusColor(b.status)}`}>
                        {b.status}
                      </span>

                      {/* State cyclers */}
                      <div className="flex bg-slate-900 border border-slate-800 rounded-lg overflow-hidden p-0.5 ml-auto">
                        {(['Pending', 'Confirmed', 'Completed'] as Booking['status'][]).map((st) => (
                          <button
                            key={st}
                            onClick={() => onUpdateStatus(b.id, st)}
                            disabled={b.status === st}
                            className={`px-2 py-1 text-[10px] font-bold rounded-md transition-colors ${
                              b.status === st
                                ? 'bg-slate-800 text-white font-extrabold'
                                : 'text-slate-500 hover:text-slate-300'
                            }`}
                            title={`Mark as ${st}`}
                          >
                            {st === 'Completed' ? 'Done' : st === 'Confirmed' ? 'Confirm' : 'Pend'}
                          </button>
                        ))}
                      </div>

                      {/* Delete */}
                      <button
                        onClick={() => onDeleteBooking(b.id)}
                        className="p-1.5 rounded-lg text-slate-600 hover:text-rose-400 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/15 transition-all"
                        title="Delete Request"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer controls */}
          <div className="p-4 border-t border-slate-800 bg-slate-900/30 flex items-center justify-between text-xs text-slate-500 flex-wrap gap-2">
            <span>
              All booking data is stored on-device in HTML5 <b className="font-semibold text-slate-400">localStorage</b>.
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to delete all local booking records? This cannot be undone.')) {
                    localStorage.removeItem('fixio_bookings');
                    window.location.reload();
                  }
                }}
                className="px-3 py-1.5 border border-rose-500/20 hover:border-rose-500/40 text-rose-400 hover:bg-rose-500/5 rounded-xl transition"
              >
                Clear all Records
              </button>
              <button
                onClick={onClose}
                className="px-4 py-1.5 bg-yellow-500 text-slate-950 font-bold hover:bg-yellow-400 rounded-xl transition shadow active:scale-95"
              >
                Done
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
