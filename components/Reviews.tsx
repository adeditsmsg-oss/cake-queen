"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ThumbsUp, ExternalLink, MessageCircle } from "lucide-react";
import { SectionHeader, CreamDrip } from "@/components/ui/shared";
import { reviews } from "@/data/reviews";

// ── REVIEWS SECTION ──
export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Customer Reviews"
          title="What Our Customers"
          titleHighlight="Say About Us"
          subtitle="Real reviews from real people in Midnapore who trusted Cake Queen with their most special moments."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              className="bg-bg-base rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col gap-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} className={`w-4 h-4 ${s <= review.rating ? "fill-accent text-accent" : "text-border"}`} />
                ))}
              </div>

              {/* Review text */}
              <p className="font-body text-sm text-text-mid leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>

              {/* Occasion tag */}
              {review.occasion && (
                <span className="inline-block bg-primary/10 text-primary font-heading font-600 text-[11px] px-3 py-1 rounded-pill self-start">
                  🎂 {review.occasion}
                </span>
              )}

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-heading font-800 text-sm flex-shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-heading font-700 text-sm text-text-dark">{review.name}</p>
                  <p className="font-body text-xs text-text-muted">{review.date}</p>
                </div>
                <div className="ml-auto">
                  <div className="flex items-center gap-1 text-text-muted">
                    <ThumbsUp className="w-3 h-3" />
                    <span className="text-xs">Verified</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <CreamDrip color="#FDF0F4" className="mt-16" />
    </section>
  );
}

// ── GOOGLE REVIEW REPUTATION MANAGEMENT ──
export function GoogleReviewManager() {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", issue: "", suggestion: "" });

  const GOOGLE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJ-Q7OarJbHToR_f3VnTLwAQE";

  const handleStarClick = (rating: number) => {
    setSelected(rating);
    if (rating >= 4) {
      // Positive experience → redirect to Google Reviews
      setTimeout(() => window.open(GOOGLE_REVIEW_URL, "_blank"), 800);
    }
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `⚠️ *CUSTOMER FEEDBACK — CAKE QUEEN*\n━━━━━━━━━━━━━━━━\n⭐ Rating: ${selected} Star(s)\n👤 Name: ${form.name}\n📱 Phone: ${form.phone}\n❗ Issue: ${form.issue}\n💡 Suggestion: ${form.suggestion}\n━━━━━━━━━━━━━━━━\nPlease resolve this at the earliest.`
    );
    window.open(`https://wa.me/918918499216?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="rate-us" className="py-20 bg-bg-tint">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <SectionHeader
          badge="Rate Your Experience"
          title="How Was Your"
          titleHighlight="Cake Queen Experience?"
          subtitle="Your feedback helps us serve you better — and helps others discover us!"
        />

        {!submitted ? (
          <div className="bg-white rounded-4xl p-8 shadow-card mt-8">
            {/* Star selector */}
            <p className="font-heading font-700 text-text-dark mb-5">Tap to rate your experience:</p>
            <div className="flex justify-center gap-3 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.button
                  key={star}
                  id={`review-star-${star}`}
                  onClick={() => handleStarClick(star)}
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-3xl transition-all duration-200 ${
                    selected && star <= selected
                      ? "bg-accent/20 scale-110"
                      : "bg-bg-base hover:bg-accent/10"
                  }`}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.15 }}
                >
                  <Star className={`w-8 h-8 ${selected && star <= selected ? "fill-accent text-accent" : "text-border"}`} />
                </motion.button>
              ))}
            </div>

            {/* Rating description */}
            {selected !== null && (
              <motion.p
                className={`font-heading font-700 text-base mb-4 ${selected >= 4 ? "text-green-600" : "text-primary"}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {selected === 5 ? "🤩 Amazing! Thank you for the love!" :
                  selected === 4 ? "😊 Great! Redirecting you to Google Reviews..." :
                  selected === 3 ? "😐 Thanks! Tell us how we can improve." :
                  selected === 2 ? "😕 We're sorry! Please share your feedback." :
                  "😔 We sincerely apologise. Let us make it right."}
              </motion.p>
            )}

            {/* Positive: Show Google link */}
            {selected !== null && selected >= 4 && (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                <p className="font-body text-text-muted text-sm mb-4">We&apos;re opening Google Reviews for you... Please leave us a review! ⭐</p>
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="google-review-link"
                  className="inline-flex items-center gap-2 bg-primary text-white font-heading font-700 px-6 py-3 rounded-pill shadow-btn hover:bg-primary-dark transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Write Google Review
                </a>
              </motion.div>
            )}

            {/* Negative: Show feedback form */}
            {selected !== null && selected < 4 && (
              <motion.form
                onSubmit={handleFeedbackSubmit}
                className="mt-4 text-left flex flex-col gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="font-heading font-700 text-text-dark text-sm">We&apos;re sorry to hear that. Please share your experience so we can improve:</p>
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full border border-border rounded-2xl px-4 py-3 font-body text-sm text-text-dark focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className="w-full border border-border rounded-2xl px-4 py-3 font-body text-sm text-text-dark focus:outline-none focus:border-primary transition-colors"
                />
                <select
                  value={form.issue}
                  onChange={e => setForm(f => ({ ...f, issue: e.target.value }))}
                  required
                  className="w-full border border-border rounded-2xl px-4 py-3 font-body text-sm text-text-dark focus:outline-none focus:border-primary transition-colors bg-white"
                >
                  <option value="">Select Issue Category *</option>
                  <option>Taste / Quality</option>
                  <option>Late Delivery</option>
                  <option>Wrong Order</option>
                  <option>Packaging Damage</option>
                  <option>Staff Behaviour</option>
                  <option>Pricing</option>
                  <option>Other</option>
                </select>
                <textarea
                  placeholder="Your suggestion or feedback (optional)"
                  value={form.suggestion}
                  onChange={e => setForm(f => ({ ...f, suggestion: e.target.value }))}
                  rows={3}
                  className="w-full border border-border rounded-2xl px-4 py-3 font-body text-sm text-text-dark focus:outline-none focus:border-primary transition-colors resize-none"
                />
                <button
                  type="submit"
                  id="feedback-submit-btn"
                  className="flex items-center justify-center gap-2 bg-primary text-white font-heading font-700 py-3.5 rounded-pill shadow-btn hover:bg-primary-dark transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Send Feedback via WhatsApp
                </button>
              </motion.form>
            )}
          </div>
        ) : (
          <motion.div
            className="bg-white rounded-4xl p-10 shadow-card mt-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-6xl mb-4">🙏</div>
            <h3 className="font-heading font-900 text-2xl text-text-dark mb-2">Thank You for Your Feedback!</h3>
            <p className="font-body text-text-muted text-base">আমরা আপনার মতামতকে সম্মান করি। Our team will review your feedback and work hard to improve. We hope to delight you next time! ❤️</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
