<?php

use Slim\App;
use Slim\Views\Twig;

require '../vendor/autoload.php';

$app = new App;
$view = new Twig('../resources/views');
$env = $view->getEnvironment();
$env->addGlobal('year', date('Y'));

$container = $app->getContainer();
$container->register($view);

// Routes
$app->get('/', function ($request, $response, $args) {
    return $this->view->render(
        $response,
        'index.html.twig',
        ['page_title' => 'Project Mercury']
    );
})->setName('index');

$app->run();
