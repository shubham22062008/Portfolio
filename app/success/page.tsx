// src/app/success/page.tsx
import { motion } from 'framer-motion';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center p-4">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-100 dark:bg-purple-900/30 rounded-full opacity-50"></div>
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-purple-100 dark:border-purple-900/30 relative z-10"
      >
        {/* Checkmark icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-purple-600 dark:text-purple-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Thank You!
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Your message has been sent successfully
          </p>
        </div>

        {/* Success message */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I'll get back to you as soon as possible. If you need a
            response urgently, you can also reach me directly via:
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/twinkle-pathak-480b93230"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Back button */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => window.location.href = '/#contact'}
          className="w-full py-3 px-6 bg-purple-600 dark:bg-purple-500 text-white rounded-full hover:bg-purple-700 dark:hover:bg-purple-400 transition-colors font-medium"
        >
          Back to Contact
        </motion.button>
      </motion.div>
    </div>
  );
}
4. Update Your Contact Form Submission
Now modify your Contact.tsx to redirect to this success page:

// In your handleSubmit function in Contact.tsx
if (response.ok) {
  // Redirect to success page with smooth scroll to contact section
  window.location.href = '/success';
}