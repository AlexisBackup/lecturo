<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

final class RegisterController extends AbstractController
{
    #[Route('/register', name: 'app_register')]
    public function index(Request $request, EntityMAnagerInterface $entityManager, UserPasswordHasherInterface $passwordHasher): Response
    {
        $data = json_decode($request->getContent(), true);

        // dump($data);
        // $user = new User();
        // $user->setEmail($request->request->get('email'));
        // $user->setPseudo($request->request->get('pseudo'));
        // $user->setRoles(['ROLE_USER']);
        // $hashedPassword = $passwordHasher->hashPassword(
        //     $user,
        //     $request->request->get('password')
        // );
        // $user->setPassword($hashedPassword);
        // $entityManager->persist($user);
        // $entityManager->flush();

        $this->addFlash('success', 'Inscription réussie !');
        return new JsonResponse(['redirect' => '/']);
        // return $this->redirectToRoute('app_home');
    }
}
