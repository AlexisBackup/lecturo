import React from 'react';
import { X, Mail, Lock, User } from 'lucide-react';

export function RegisterForm({ onClose, darkMode, action }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-8 max-w-md w-full relative`}>
        <button
          onClick={onClose}
          className={`absolute right-4 top-4 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}
        >
          <X className="h-5 w-5" />
        </button>
        <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Créer un compte</h2>
        <form className="space-y-4" method='POST' action={action}>
          <div>
            <label htmlFor="username" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
              Pseudo
            </label>
            <div className="relative">
              <User className={`absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <input
                type="text"
                id="username"
                name="pseudo"
                className={`pl-10 w-full rounded-lg ${
                  darkMode
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                } border p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="Votre pseudo"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="register-email" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
              Email
            </label>
            <div className="relative">
              <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <input
                type="email"
                id="register-email"
                name="email"
                className={`pl-10 w-full rounded-lg ${
                  darkMode
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                } border p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="votre@email.com"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="register-password" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
              Mot de passe
            </label>
            <div className="relative">
              <Lock className={`absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <input
                type="password"
                id="register-password"
                name="password"
                className={`pl-10 w-full rounded-lg ${
                  darkMode
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                } border p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="••••••••"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className={`w-full ${
              darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'
            } text-white font-medium rounded-lg px-5 py-2.5 text-center transition-colors`}
          >
            Créer un compte
          </button>
        </form>
      </div>
    </div>
  );
}