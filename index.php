<?php
// include database connection
include 'config/db.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ReflectMe</title>

    <!-- Bootstrap CDN -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="public/css/style.css">
</head>

<body class="bg-light">

    <div class="container text-center mt-5">
        <h1 class="fw-bold mb-3">ReflectMe</h1>
        <p class="text-muted mb-4">Your AI-powered emotional companion</p>

        <a href="views/mood.php" class="btn btn-primary btn-lg">Start Journaling</a>
    </div>

</body>
</html>
