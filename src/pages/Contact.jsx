
const Contact = () => {
  return (
    // <div className="bg-gray-100">
    //   <div className="w-full md:w-2/3 mx-auto pb-20 px-6 md:px-0">
    //     <h2 className='font-bold text-3xl pt-20 text-center text-blue-500'>Contact Us</h2>
    //     <form action="#" className="space-y-8 mt-12">
    //       <div>
    //         <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
    //         <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
    //       </div>
    //       <div>
    //         <label className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
    //         <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required />
    //       </div>
    //       <div className="sm:col-span-2">
    //         <label className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
    //         <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
    //       </div>
    //       <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">Default</button>
    //     </form>
    //   </div>
    // </div>
    <div className="bg-gray-100 max-w-full">
      <h1 className='font-bold text-3xl pt-20 text-center text-blue-500'>Contact</h1>
      <h1 className='font-bold text-2xl pt-10 pb-4 text-center text-zinc-700'>
        Don&apos;t be shy! Check out the links! 👇
      </h1>
      <div className="w-auto lg:w-[63rem] mx-auto grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 lg:px-0 pt-10 pb-20">
        <a href="https://github.com/Anass-Zar" target="_blank" className="w-full hover:bg-gray-50 border border-black rounded-md shadow-lg flex items-center gap-5 px-6 py-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="40px" height="40px">
            <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
          </svg>
          <div>
            <h1 className="text-2xl font-bold">Github</h1>
            <p className="text-lg text-gray-700">Check my repos.</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/anass-zarioh-884114298/" target="_blank" className="w-full hover:bg-gray-50 border border-black rounded-md shadow-lg flex items-center gap-5 px-6 py-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40px" height="40px">
            <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364 c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274 L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479 C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677 c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638 c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001 c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12 c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698 c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19 c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
          </svg>
          <div>
            <h1 className="text-2xl font-bold">LinkedIn</h1>
            <p className="text-lg text-gray-700">Let&apos;s connect.</p>
          </div>
        </a>
        <a href="mailto:anasszarioh10@gmail.com" target="_blank" className="w-full hover:bg-gray-50 border border-black rounded-md shadow-lg flex items-center gap-5 px-6 py-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="36px" height="36px">
            <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
          </svg>
          <div>
            <h1 className="text-2xl font-bold">Gmail</h1>
            <p className="text-lg text-gray-700">Let&apos;s get a touch</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Contact