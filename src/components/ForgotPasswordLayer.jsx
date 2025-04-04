import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { forgotPassword } from '../api/auth';

const ForgotPasswordLayer = () => {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await forgotPassword(email);
      setShowModal(true);
    } catch (err) {
      console.error('Forgot password error:', err);
      setError("Couldn't send reset email. Please try again.");
    }
  };

  return (
    <>
      <section className="auth forgot-password-page bg-base d-flex flex-wrap">
        <div className="auth-left d-lg-block d-none">
          <div className="d-flex align-items-center flex-column h-100 justify-content-center">
            <img src="assets/images/auth/forgot-pass-img.png" alt="" />
          </div>
        </div>
        <div className="auth-right py-32 px-24 d-flex flex-column justify-content-center">
          <div className="max-w-464-px mx-auto w-100">
            <div>
              <h4 className="mb-12">Forgot Password</h4>
              <p className="mb-32 text-secondary-light text-lg">
                Enter the email address associated with your account and we will
                send you a link to reset your password.
              </p>
            </div>

            {error && <p className="text-danger fw-bold">{error}</p>}

            <form onSubmit={handleSubmit}>
              <div className="icon-field">
                <span className="icon top-50 translate-middle-y">
                  <Icon icon="mage:email" />
                </span>
                <input
                  type="email"
                  name="email"
                  className="form-control h-56-px bg-neutral-50 radius-12"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32"
              >
                Continue
              </button>
              <div className="text-center mt-3">
                <Link to="/sign-in" className="text-primary-600 fw-bold">
                  Back to Sign In
                </Link>
              </div>
              <div className="mt-120 text-center text-sm">
                <p className="mb-0">
                  Already have an account?{' '}
                  <Link to="/sign-in" className="text-primary-600 fw-semibold">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show"
          id="exampleModal"
          tabIndex={-1}
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content radius-16 bg-base">
              <div className="modal-body p-40 text-center">
                <div className="mb-32">
                  <img src="assets/images/auth/envelop-icon.png" alt="" />
                </div>
                <h6 className="mb-12">Verify your Email</h6>
                <p className="text-secondary-light text-sm mb-0">
                  Thank you, check your email for instructions to reset your password
                </p>
                <button
                  type="button"
                  className="btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <div className="mt-32 text-sm">
                  <p className="mb-0">
                    Didn’t receive the email?{' '}
                    <Link to="/resend" className="text-primary-600 fw-semibold">
                      Resend
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ForgotPasswordLayer;
