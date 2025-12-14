import { Lock, Mail, User2Icon } from 'lucide-react';
import React from 'react';
import api from '../configs/api';
import { useDispatch } from 'react-redux';
import { login } from '../app/features/authSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const query = new URLSearchParams(window.location.search);
  const urlState = query.get('state');

  const [state, setState] = React.useState(urlState || 'login');
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post(`/api/users/${state}`, formData);

      // save token
      localStorage.setItem('token', data.token);

      // update redux
      dispatch(login({
        token: data.token,
        user: data.user
      }));

      toast.success(data.message);

      // ✅ redirect after login
      navigate('/app');
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
      >
        <h1 className="text-gray-900 text-3xl mt-10 font-medium">
          {state === 'login' ? 'Login' : 'Sign up'}
        </h1>

        <p className="text-gray-500 text-sm mt-2">
          Please {state} to continue
        </p>

        {state !== 'login' && (
          <div className="flex items-center mt-6 w-full border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
            <User2Icon size={16} color="#6B7280" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-none outline-none w-full"
            />
          </div>
        )}

        <div className="flex items-center w-full mt-4 border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
          <Mail size={13} color="#6B7280" />
          <input
            type="email"
            name="email"
            placeholder="Email id"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-none outline-none w-full"
          />
        </div>

        <div className="flex items-center mt-4 w-full border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
          <Lock size={13} color="#6B7280" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="border-none outline-none w-full"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full h-11 rounded-full text-white bg-green-500 hover:opacity-90"
        >
          {state === 'login' ? 'Login' : 'Sign up'}
        </button>

        <p
          onClick={() =>
            setState(prev => (prev === 'login' ? 'register' : 'login'))
          }
          className="text-gray-500 text-sm mt-4 mb-10 cursor-pointer"
        >
          {state === 'login'
            ? "Don't have an account?"
            : 'Already have an account?'}{' '}
          <span className="text-green-500 hover:underline">Click here</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
