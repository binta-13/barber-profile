'use client'
import { useState } from 'react'
import { services } from '@/data/services'
import { barbers } from '@/data/barbers'

export default function Home() {
  const [step, setStep] = useState<0 | 1 | 2 | 3 | 4>(0)
  const [selectedService, setSelectedService] = useState('')
  const [selectedBarber, setSelectedBarber] = useState('')
  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [time, setTime] = useState('')

  const service = services.find(s => s.id === selectedService)
  const barber = barbers.find(b => b.id === selectedBarber)
  const canConfirm = name.trim() !== '' && whatsapp.trim() !== '' && time !== ''

  return (
    <div className="min-h-screen bg-[#020202] text-[#f7f8f8] selection:bg-[#c5a059] selection:text-black font-sans">
      {/* Nav */}
      <nav className="px-5 sm:px-12 py-6 border-b border-[#111] flex justify-between items-center sticky top-0 bg-[#020202]/90 backdrop-blur z-40">
        <div className="text-base sm:text-xl font-bold tracking-widest uppercase">GENTLEMANS.</div>
        <div className="text-[10px] sm:text-xs tracking-[0.2em] uppercase opacity-60">Yogyakarta</div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-5 sm:px-12 pt-20 sm:pt-32 pb-16 sm:pb-24 border-b border-[#111]">
        <div className="max-w-5xl mx-auto">
          <span className="text-[#c5a059] text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] uppercase font-bold">
            Yogyakarta Premium Grooming
          </span>
          <h1 className="text-[clamp(2.75rem,10vw,6.5rem)] leading-[0.95] font-serif italic mt-5 mb-8">
            The Gentleman&apos;s<br />Sanctuary
          </h1>
          <p className="max-w-lg text-sm sm:text-base opacity-60 mb-10 leading-relaxed">
            Pengalaman cukur rambut premium dengan sentuhan klasik modern di jantung kota Yogyakarta. Privasi dan kualitas tanpa kompromi.
          </p>
          <button
            onClick={() => {
              const servicesSection = document.getElementById('services');
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full sm:w-auto px-10 py-4 bg-[#c5a059] text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-all cursor-pointer"
          >
            Book Appointment
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="max-w-5xl mx-auto px-5 sm:px-12 py-20 border-b border-[#111]">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[#c5a059] text-[10px] tracking-[0.3em] uppercase font-bold">Menu</span>
            <h2 className="text-3xl sm:text-4xl font-serif italic mt-2">Select Your Ritual</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => { setSelectedService(s.id); setStep(2) }}
              className="group text-left p-6 sm:p-8 border border-[#111] hover:border-[#c5a059] transition-all cursor-pointer bg-[#050505]"
            >
              <div className="flex justify-between items-start gap-4 mb-3">
                <h3 className="text-xl font-medium group-hover:text-[#c5a059] transition">
                  {s.name}
                </h3>
                <span className="text-[#c5a059] font-bold">
                  Rp {s.price.toLocaleString('id-ID')}
                </span>
              </div>
              <p className="text-xs sm:text-sm opacity-50">
                {s.duration} • {s.description}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-5xl mx-auto px-5 sm:px-12 py-20 border-b border-[#111]">
        <span className="text-[#c5a059] text-[10px] tracking-[0.3em] uppercase font-bold">Portfolio</span>
        <h2 className="text-3xl sm:text-4xl font-serif italic mt-2 mb-12">Crafted Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="aspect-[4/5] bg-white/5 border border-[#111] overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600" alt="Cut" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent flex items-end p-6">
              <span className="text-xs uppercase tracking-widest text-[#c5a059]">Precision Fade</span>
            </div>
          </div>
          <div className="aspect-[4/5] bg-white/5 border border-[#111] overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600" alt="Shave" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent flex items-end p-6">
              <span className="text-xs uppercase tracking-widest text-[#c5a059]">Hot Towel Ritual</span>
            </div>
          </div>
          <div className="aspect-[4/5] bg-white/5 border border-[#111] overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600" alt="Styling" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent flex items-end p-6">
              <span className="text-xs uppercase tracking-widest text-[#c5a059]">Beard Styling</span>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="max-w-5xl mx-auto px-5 sm:px-12 py-20 border-b border-[#111] grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <span className="text-[#c5a059] text-[10px] tracking-[0.3em] uppercase font-bold">Visit Us</span>
          <h2 className="text-3xl font-serif italic mt-2 mb-6">Our Sanctuary</h2>
          <p className="text-sm opacity-60 leading-relaxed mb-6">
            Jl. Kaliurang KM 5.5, Depok, Sleman<br />
            Yogyakarta, DIY 55281
          </p>
          <p className="text-xs text-[#c5a059] uppercase tracking-widest font-bold">Buka Setiap Hari: 10.00 - 21.00 WIB</p>
        </div>
        <div className="border border-[#111] p-8 bg-[#050505]">
          <h3 className="text-lg font-serif italic mb-4">Client Testimonials</h3>
          <blockquote className="text-sm opacity-60 italic mb-4">
            &ldquo;Potongan paling rapi di Jogja. Suasananya tenang, berasa eksklusif seperti barbershop bintang lima.&rdquo;
          </blockquote>
          <p className="text-xs uppercase tracking-wider text-[#c5a059]">— Dimas P., Arsitek</p>
        </div>
      </section>

      {/* Booking Flow Modal */}
      {step >= 2 && step <= 4 && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto p-4 sm:p-8 flex items-center justify-center">
          <div className="w-full max-w-lg border border-[#111] bg-[#050505] p-6 sm:p-10 relative">
            {step === 2 && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-serif italic">Choose Specialist</h2>
                  <button onClick={() => setStep(0)} className="text-xs uppercase tracking-widest opacity-50 hover:opacity-100">Close</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {barbers.map(b => (
                    <button
                      key={b.id}
                      onClick={() => { setSelectedBarber(b.id); setStep(3) }}
                      className="group text-center space-y-3 p-4 border border-[#111] hover:border-[#c5a059] transition-all cursor-pointer"
                    >
                      <div className="aspect-square bg-white/5 overflow-hidden rounded-full border border-white/10 group-hover:border-[#c5a059] transition mx-auto max-w-[100px]">
                        <img src={b.image} className="w-full h-full object-cover opacity-80" alt={b.name} />
                      </div>
                      <div>
                        <h3 className="text-xs font-bold">{b.name}</h3>
                        <p className="text-[9px] opacity-50 uppercase tracking-wider">{b.specialty}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-serif italic">Your Details</h2>
                  <button onClick={() => setStep(2)} className="text-xs uppercase tracking-widest opacity-50 hover:opacity-100">Back</button>
                </div>
                <p className="text-xs opacity-60">
                  {service?.name} • {service?.duration} with {barber?.name}
                </p>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-[#c5a059] text-sm placeholder:opacity-40"
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp Number"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-[#c5a059] text-sm placeholder:opacity-40"
                  />
                  <select
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    className="w-full bg-[#050505] border-b border-white/20 py-3 outline-none focus:border-[#c5a059] text-sm"
                  >
                    <option value="">Pilih Jam Booking</option>
                    {["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"].map(t => (
                      <option key={t} value={t}>{t} WIB</option>
                    ))}
                  </select>
                </div>
                <button
                  disabled={!canConfirm}
                  onClick={() => {
                    const adminPhone = "6281234567890"; // Ganti dengan nomor WhatsApp Barbershop
                    const message = `Halo Admin Gentleman\'s Sanctuary, saya ingin konfirmasi booking:\n- Layanan: ${service?.name} (Rp ${service?.price.toLocaleString('id-ID')})\n- Spesialis: ${barber?.name}\n- Jam: ${time}\n- Nama: ${name}\n- No. WhatsApp: ${whatsapp}`;
                    const url = `https://wa.me/${adminPhone}?text=${encodeURIComponent(message)}`;
                    window.open(url, '_blank');
                    setStep(4);
                  }}
                  className="w-full py-4 bg-[#c5a059] text-black font-bold uppercase tracking-[0.15em] text-xs hover:bg-white transition-all disabled:opacity-40 cursor-pointer"
                >
                  Confirm Booking
                </button>
              </div>
            )}

            {step === 4 && (
              <div className="text-center space-y-6 py-6">
                <div className="text-[#c5a059] text-4xl">✓</div>
                <h2 className="text-2xl font-serif italic text-[#c5a059]">Reservation Confirmed</h2>
                <div className="space-y-1 text-xs opacity-60">
                  <p>{service?.name} • Rp {service?.price.toLocaleString('id-ID')}</p>
                  <p>Specialist: {barber?.name}</p>
                  <p>{name} • {whatsapp}</p>
                </div>
                <p className="text-[10px] opacity-40">Konfirmasi dikirim via WhatsApp.</p>
                <button
                  onClick={() => { setStep(0); setSelectedService(''); setSelectedBarber(''); setName(''); setWhatsapp('') }}
                  className="mt-4 px-6 py-3 border border-white/20 hover:border-[#c5a059] uppercase text-xs tracking-widest transition cursor-pointer"
                >
                  New Booking
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-5 sm:px-12 py-20 border-b border-[#111]">
        <span className="text-[#c5a059] text-[10px] tracking-[0.3em] uppercase font-bold">FAQ</span>
        <h2 className="text-3xl sm:text-4xl font-serif italic mt-2 mb-10">Common Questions</h2>
        <div className="space-y-6 max-w-2xl">
          {[
            { q: 'Boleh walk-in tanpa booking?', a: 'Bisa, namun tanpa booking antrean bisa panjang di akhir pekan. Reservasi online menjamin slot kamu.' },
            { q: 'Bagaimana cara pembayarannya?', a: 'Tunai, QRIS, dan transfer bank tersedia di tempat setelah layanan selesai.' },
            { q: 'Berapa lama menunggu konfirmasi?', a: 'Konfirmasi dikirim maksimal 15 menit setelah reservasi melalui WhatsApp.' },
            { q: 'Bisa pilih jam berapa saja?', a: 'Jam operasional 10.00 - 21.00 WIB setiap hari, slot terakhir pukul 20.00.' },
          ].map(f => (
            <details key={f.q} className="group border border-[#111] p-5 sm:p-6 bg-[#050505]">
              <summary className="cursor-pointer list-none flex justify-between items-center gap-4 text-sm sm:text-base font-medium group-hover:text-[#c5a059] transition">
                {f.q}
                <span className="text-[#c5a059] group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <p className="mt-4 text-xs sm:text-sm opacity-60 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#111] py-12 px-5 sm:px-12 text-center opacity-40 text-xs tracking-wider uppercase">
        © 2026 Gentleman&apos;s Sanctuary • Crafted by Hermes Digital Services
      </footer>
    </div>
  )
}
