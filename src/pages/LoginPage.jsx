import React from 'react';
import FirefoxGoogleLogin from '../components/FirefoxGoogleLogin';


// Main Login Component
const LoginPage = () => {
  return (
    <main>
      <div className="relative flex">
        <div className="box-border w-full">
          <div className="box-border w-full">
            <div className="flex min-h-[calc(100vh-24px)] flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
              <div className="mt-12 w-full max-w-md sm:mx-auto sm:max-w-[480px]">
                <div className="mt-5 box-border h-fit rounded-xl px-4">
                  <div className="stop-flicker relative h-fit rounded-xl bg-opacity-[0.01] bg-hero-gradient ring-0 transition-transform before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-worker-glow before:opacity-20 before:[filter:blur(120px)]">
                    <section className="delay-[100ms] relative h-fit w-full overflow-hidden rounded-xl p-[1px] shadow-xl ring-0 transition-opacity opacity-100">
                      <div className="relative z-50 box-border bg-white px-5 py-10 pt-6 shadow sm:rounded-xl sm:px-10">
                        <div className="sm:mx-auto sm:w-full sm:max-w-md">
                          <img className="mx-auto h-[68px] w-auto" src="/icon.svg" alt="Your Company" />
                          <h2 className="-mt-1 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                          </h2>
                        </div>
                        <div className="mt-9">
                          <form className="space-y-6">
                            <div>
                              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                              </label>
                              <div className="mt-2">
                                <input
                                  id="email"
                                  name="email"
                                  autoComplete="email"
                                  placeholder="your@email.com"
                                  className="block w-full rounded-xl border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div>
                              <button
                                type="submit"
                                className="button-animation relative flex w-full justify-center overflow-hidden rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              >
                                Send Login Link
                              </button>
                            </div>
                          </form>
                          <div>
                            <div className="relative mt-7">
                              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-gray-200"></div>
                              </div>
                              <div className="relative flex justify-center text-sm font-medium leading-6">
                                <span className="bg-white px-6 text-gray-900">Or continue with</span>
                              </div>
                            </div>
                            <FirefoxGoogleLogin />
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <p className="mt-10 text-center text-xs text-gray-500">
                  By signing in, you agree to our{" "}
                  <a href="https://work.mercor.com/terms" className="underline" target="_blank" rel="noopener noreferrer">
                    Client Terms of Service
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;