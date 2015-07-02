<?php
require '../vendor/autoload.php';

$app = new \Slim\App();
$container = $app->getContainer();
$container->register(new \Slim\Views\Twig('../resources/views', []));

$app->get('/', function ($request, $response, $args) {
    return $this->view->render(
        $response,
        'index.html',
        ['year' => date('Y')]
    );
})->setName('index');

$app->run();
