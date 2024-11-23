const SortList = () => {
  return (
    <div className="box-border w-full">
      <div className="box-border w-full">
        <section className="flex h-[calc(100vh-4rem)] sm:max-w-[calc(100vw-5rem)] overflow-y-auto sm:h-screen">
          <section className="mx-auto w-full px-5 pb-20 sm:px-10 max-w-screen sm:max-w-5xl">
            <div class="w-full text-center h-full flex flex-col items-center justify-center">
              <div class="mx-auto grid h-40 w-40 place-items-end">
                <div>
                  <img
                    src="https://321usa.com/assets/images/frontend/account_image/60583cb3bc7ec1616395443.png"
                    alt="Mockup"
                  ></img>
                </div>
              </div>
              <h3 class="mt-2 text-sm font-semibold text-gray-900">
                You are not logged in
              </h3>
              <p class="mt-1 text-sm text-gray-500 mb-5">
                Please log in with your account or sign in with a new account to
                view this page
              </p>
              <button
                class="rounded-xl px-3 py-2 text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-500 disabled:hover:bg-indigo-600 w-fit disabled:border disabled:border-indigo-600 relative flex items-center justify-center shadow-none outline-none ring-0 focus:border-none focus:outline-none disabled:opacity-50 undefined"
              >
                <a class="" href="/login">
                  Login
                </a>
              </button>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default SortList;
