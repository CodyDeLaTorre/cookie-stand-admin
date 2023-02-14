export default function LoginForm({ onLogin }) {

  async function handleSubmit(event) {
    event.preventDefault();
    onLogin(event.target.username.value, event.target.password.value);
  }

  return (
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center  font-serif rounded bg-gray-500'>
          <fieldset autoComplete='off' className='flex flex-col items-center justify-center'>
              <label className="mt-5 mb-1" htmlFor="username">USER NAME</label>
              <input className="px-10 py-1 text-center border border-gray-500 shadow-gray-700 shadow-md" placeholder="username" name="username" />
              <label className="mt-5 mb-1" htmlFor="password">PASSWORD</label>
              <input className="px-10 py-1 text-center border w-10/12 border-gray-500 shadow-gray-700 shadow-md" placeholder="password" type="password" name="password" />
              <button className="py-3 px-16 m-4 text-2xl shadow-md shadow-gray-700 bg-gray-700 hover:bg-gray-200 hover:text-black rounded-lg">SIGN IN</button>
          </fieldset>
      </form>
  );
}
