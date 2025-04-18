<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;
use Symfony\Component\Security\Http\Authenticator\FormLoginAuthenticator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController
{
    #[Route('/login', name: 'app_login', methods: ['POST'])]
    public function login(
        Request $request,
        UserAuthenticatorInterface $userAuthenticator,
        FormLoginAuthenticator $authenticator,
        UserRepository $userRepository
    ): JsonResponse {
        $email = $request->request->get('_username');
        $password = $request->request->get('_password');
        
        dump('Login POST reçu', $email);

        if (!$email || !$password) {
            return new JsonResponse(['error' => 'Identifiants manquants'], 400);
        }

        $user = $userRepository->findOneBy(['email' => $email]);

        if (!$user) {
            return new JsonResponse(['error' => 'Utilisateur non trouvé'], 401);
        }

        // Authentifie l'utilisateur (création de session + token)
        $userAuthenticator->authenticateUser($user, $authenticator, $request);

        return new JsonResponse(['status' => 'success', 'message' => 'Connexion réussie']);
    }

    #[Route('/logout', name: 'app_logout')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
