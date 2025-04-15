import { X, Mail, Lock, User } from 'lucide-react';
import { CustomInput } from './CustomInput';
import { submitForm } from './api';
import { useForm } from "react-hook-form";

export function RegisterForm({ onClose, darkMode }) {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const result = await submitForm('/register', data);
      console.log(result);

      if (result.redirect) {
        window.location.href = result.redirect;
      }
      // redirection ou message flash...
    } catch (error) {
      console.error("Erreur :", error);
      // afficher les erreurs dans le formulaire...
    }
  };
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
        <form className="space-y-4" method='POST' onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="username" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
              Pseudo
            </label>
            <CustomInput
              icon={User}
              name={"pseudo"}
              register={register}
              darkMode={darkMode}
              placeholder={"Votre pseudo"}
              required
            />
          </div>
          <div>
            <label htmlFor="register-email" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
              Email
            </label>
            <CustomInput
              icon={Mail}
              name={"email"}
              register={register}
              rules={{
                required: "L'email est requis",
                pattern: {
                  value: /^[^@]+@[^@]+\.[^@]+$/,
                  message: "Email invalide"
                }
              }}
              darkMode={darkMode}
              placeholder={"votre@email.com"}
              errorMessage={errors.email?.message}
              required />
          </div>
          <div>
            <label htmlFor="register-password" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
              Mot de passe
            </label>
            <CustomInput
              icon={Lock}
              name={"password"}
              register={register}
              darkMode={darkMode}
              placeholder={"••••••"}
              required />
          </div>
          <button
            type="submit"
            className={`w-full ${darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'
              } text-white font-medium rounded-lg px-5 py-2.5 text-center transition-colors`}
          >
            Créer un compte
          </button>
        </form>
      </div>
    </div>
  );
}