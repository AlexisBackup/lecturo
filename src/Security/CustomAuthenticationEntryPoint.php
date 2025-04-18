<?php

namespace App\Security;

use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Http\EntryPoint\AuthenticationEntryPointInterface;
use Symfony\Component\Routing\RouterInterface;

class CustomAuthenticationEntryPoint implements AuthenticationEntryPointInterface
{
    public function __construct(private RouterInterface $router) {}

    public function start(Request $request, \Throwable $authException = null): Response
    {
        // Rediriger vers la page d’accueil au lieu de /login
        return new RedirectResponse($this->router->generate('app_home'));
    }
}
