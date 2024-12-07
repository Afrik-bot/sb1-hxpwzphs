import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Check } from 'lucide-react';
import RegistrationForm from '../components/auth/RegistrationForm';
import PaymentForm from '../components/payment/PaymentForm';
import { subscriptionTiers } from '../components/Pricing/pricingData';
import type { PricingTier } from '../components/Pricing/types';

export default function SignupPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState<'plan' | 'details' | 'payment'>('plan');
  const [selectedPlan, setSelectedPlan] = useState<string>(
    location.state?.selectedPlan || ''
  );
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>(
    location.state?.billing || 'monthly'
  );

  const handlePlanSelection = (plan: string) => {
    setSelectedPlan(plan);
    setStep('details');
  };
  
  const handleRegistrationSuccess = () => {
    if (selectedPlan === 'starter') {
      navigate('/dashboard');
    } else {
      setStep('payment');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-md space-y-8 px-4 sm:px-6">
        {/* Progress Steps */}
        <div className="flex justify-between">
          {['plan', 'details', 'payment'].map((s) => (
            <div
              key={s}
              className={`flex items-center ${
                step === s ? 'text-indigo-600' : 'text-gray-400'
              }`}
            >
              <div
                className={`h-8 w-8 rounded-full ${
                  step === s ? 'bg-indigo-600' : 'bg-gray-200'
                } flex items-center justify-center`}
              >
                <Check className={`h-5 w-5 ${step === s ? 'text-white' : 'text-gray-400'}`} />
              </div>
              <span className="ml-2 text-sm font-medium capitalize">{s}</span>
            </div>
          ))}
        </div>

        {/* Plan Selection */}
        {step === 'plan' && (
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6">Choose your plan</h2>
            <div className="space-y-4">
              {subscriptionTiers.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => handlePlanSelection(tier.id)}
                  className={`w-full p-4 text-left border rounded-lg transition-colors ${
                    selectedPlan === tier.id
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-600'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-gray-900">{tier.name}</h3>
                      <p className="text-sm text-gray-500">{tier.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        {billingCycle === 'annual' ? tier.price.annual : tier.price.monthly}
                      </p>
                      <p className="text-sm text-gray-500">
                        {billingCycle === 'annual' ? '/year' : '/month'}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <div className="mt-6">
              <button
                onClick={() => setStep('details')}
                disabled={!selectedPlan}
                className="w-full bg-indigo-600 text-white rounded-md py-2 px-4 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Account Details */}
        {step === 'details' && (
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6">Create your account</h2>
            <RegistrationForm onSuccess={handleRegistrationSuccess} />
          </div>
        )}

        {/* Payment Details */}
        {step === 'payment' && (
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
            <PaymentForm 
              amount={selectedPlan === 'pro' ? 2900 : selectedPlan === 'business' ? 9900 : 0}
              onSuccess={() => navigate('/dashboard')}
            />
          </div>
        )}
      </div>
    </div>
  );
}