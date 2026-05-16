import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { CheckCircle, AlertCircle } from 'lucide-react'

const registerSchema = z.object({
  walletAddress: z.string().regex(/^0x[a-fA-F0-9]{40}$/, 'Invalid Ethereum address'),
  email: z.string().email('Invalid email address'),
  domainName: z.string().min(3, 'Domain name must be at least 3 characters').max(50, 'Domain name too long'),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and conditions',
  }),
})

type RegisterFormData = z.infer<typeof registerSchema>

export default function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterFormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Form Data:', data)
    setSubmitSuccess(true)
    reset()

    setTimeout(() => {
      setSubmitSuccess(false)
    }, 5000)

    setIsSubmitting(false)
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold gradient-text">Register Your Domain</h1>
        <p className="text-slate-400">
          Get your .strategicoilsupply domain registered on the blockchain
        </p>
      </div>

      {/* Info Box */}
      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 space-y-2">
        <h3 className="font-semibold text-blue-300 flex items-center gap-2">
          <AlertCircle size={20} />
          Registration Information
        </h3>
        <ul className="text-slate-300 text-sm space-y-1 ml-6">
          <li>• Domain registration requires an Ethereum wallet</li>
          <li>• Registration is instant with blockchain confirmation</li>
          <li>• Price includes 1 year of domain ownership</li>
          <li>• Domains are transferable and fully tradeable</li>
        </ul>
      </div>

      {/* Success Message */}
      {submitSuccess && (
        <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 space-y-2">
          <h3 className="font-semibold text-green-300 flex items-center gap-2">
            <CheckCircle size={20} />
            Registration Submitted Successfully!
          </h3>
          <p className="text-slate-300 text-sm">
            Your domain registration has been submitted. Check your email for confirmation details.
          </p>
        </div>
      )}

      {/* Registration Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="card space-y-6">
        {/* Wallet Address */}
        <div className="space-y-2">
          <label className="block font-semibold text-slate-200">
            Ethereum Wallet Address
          </label>
          <input
            type="text"
            placeholder="0x..."
            {...register('walletAddress')}
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
          />
          {errors.walletAddress && (
            <p className="text-red-400 text-sm">{errors.walletAddress.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="block font-semibold text-slate-200">Email Address</label>
          <input
            type="email"
            placeholder="your@email.com"
            {...register('email')}
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
          />
          {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
        </div>

        {/* Domain Name */}
        <div className="space-y-2">
          <label className="block font-semibold text-slate-200">Domain Name</label>
          <div className="flex">
            <input
              type="text"
              placeholder="mydomain"
              {...register('domainName')}
              className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-l-lg text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
            />
            <div className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-r-lg text-slate-400 font-semibold border-l-0">
              .strategicoilsupply
            </div>
          </div>
          {errors.domainName && (
            <p className="text-red-400 text-sm">{errors.domainName.message}</p>
          )}
        </div>

        {/* Terms Checkbox */}
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register('agreeTerms')}
              className="w-5 h-5 rounded bg-slate-700 border-slate-600"
            />
            <span className="text-slate-300">
              I agree to the{' '}
              <a href="#" className="text-blue-400 hover:underline">
                Terms and Conditions
              </a>
            </span>
          </label>
          {errors.agreeTerms && (
            <p className="text-red-400 text-sm">{errors.agreeTerms.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Processing...' : 'Register Domain'}
        </button>
      </form>

      {/* FAQ Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: 'How long does registration take?',
              answer: 'Registration is instant with blockchain confirmation typically within 12-30 seconds.',
            },
            {
              question: 'Can I transfer my domain?',
              answer: 'Yes, all domains are fully transferable and can be traded on blockchain marketplaces.',
            },
            {
              question: 'What payment methods are accepted?',
              answer: 'We accept ETH and other ERC-20 tokens. Connect your wallet to see current pricing.',
            },
          ].map((faq, idx) => (
            <details key={idx} className="card cursor-pointer">
              <summary className="font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                {faq.question}
              </summary>
              <p className="mt-3 text-slate-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}
