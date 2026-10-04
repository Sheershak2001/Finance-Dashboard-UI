const LoginPage = ({ onLogin }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className='min-h-screen bg-gray-200'>
      <div className='flex items-center justify-center'>
        <div className='bg-white mt-30 p-8 rounded-lg shadow-md w-full max-w-md'>
          <h2 className='text-2xl font-bold mb-12 text-center'>
            Login to Finance Dashboard
          </h2>
          <form>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-gray-700 text-sm font-bold mb-2'
              >
                Email Address
              </label>
              <input
                type='email'
                id='email'
                required
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Enter your email'
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='password'
                className='block text-gray-700 text-sm font-bold mb-2'
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                required
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Enter your password'
              />
            </div>
            <div className='flex items-center justify-center'>
              <button
                onClick={handleLogin}
                type='button'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline '
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
