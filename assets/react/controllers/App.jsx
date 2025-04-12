import React, { useState } from 'react';
import { BookmarkCheck, Star, BookPlus, ScrollText, Library } from 'lucide-react';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { NavBar } from './components/NavBar';
import { FlashMessage } from './components/FlashMessage';

function App({ loginAction, registerAction, flash }) {

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [flashMessage, setFlashMessage] = useState(flash || null);


  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-blue-50 to-white'}`}>

      {/* Flash notification */}
      {flashMessage && (
        <FlashMessage
          message={flashMessage.message}
          type={flashMessage.type}
          onClose={() => setFlashMessage(null)}
        />
      )}

      {/* Header/Navigation */}
      <NavBar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(prev => !prev)}
        setShowLogin={setShowLogin}
        setShowRegister={setShowRegister}
      />

      {/* Modal Forms */}
      {showLogin && <LoginForm action={loginAction} onClose={() => setShowLogin(false)} darkMode={darkMode} />}
      {showRegister && <RegisterForm action={registerAction} onClose={() => setShowRegister(false)} darkMode={darkMode} />}

      {/* Hero Section */}
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className={`text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-gray-900'} sm:text-5xl md:text-6xl`}>
              Suivez vos lectures,{' '}
              <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>partagez vos découvertes</span>
            </h1>
            <p className={`mt-3 max-w-md mx-auto text-base ${darkMode ? 'text-gray-300' : 'text-gray-500'} sm:text-lg md:mt-5 md:text-xl md:max-w-3xl`}>
              Organisez votre bibliothèque personnelle, suivez votre progression et gardez une trace de toutes vos lectures.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <button
                onClick={() => setShowRegister(true)}
                className={`w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white ${darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'
                  } md:py-4 md:text-lg md:px-10 transition-colors`}
              >
                Commencer gratuitement
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className={`relative ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow`}>
              <div className="absolute -top-4 left-4">
                <div className={`rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-100'} p-3`}>
                  <BookPlus className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
              </div>
              <h3 className={`mt-8 text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Ajoutez vos livres</h3>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                Enregistrez tous vos livres : romans, mangas, BD, documents techniques.
              </p>
            </div>

            <div className={`relative ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow`}>
              <div className="absolute -top-4 left-4">
                <div className={`rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-100'} p-3`}>
                  <BookmarkCheck className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
              </div>
              <h3 className={`mt-8 text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Suivez votre progression</h3>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                Marquez votre avancement et reprenez votre lecture là où vous l'aviez laissée.
              </p>
            </div>

            <div className={`relative ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow`}>
              <div className="absolute -top-4 left-4">
                <div className={`rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-100'} p-3`}>
                  <ScrollText className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
              </div>
              <h3 className={`mt-8 text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Rédigez des résumés</h3>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                Gardez une trace de vos impressions et partagez vos avis avec la communauté.
              </p>
            </div>
          </div>

          {/* Featured Books Section */}
          <div className="mt-24">
            <h2 className={`text-3xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-900'} mb-12`}>
              Découvrez votre prochaine lecture
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((book) => (
                <div key={book} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden`}>
                  <img
                    src={`https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80`}
                    alt="Book cover"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Titre du livre</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className={`ml-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>4.5</span>
                      </div>
                    </div>
                    <p className={`mt-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Auteur</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} mt-24`}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Library className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={`ml-2 text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Lecturo</span>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>© 2024 Lecturo. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;