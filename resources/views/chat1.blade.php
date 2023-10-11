<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/simple-peer/9.11.1/simplepeer.min.js"></script>
        @vite('resources/js/app.js')
    </head>
    <body class="antialiased">
        <div id="app">
            <video-chat :allusers="{{ $users }}" :authUserId="{{ auth()->id() }}" turn_url="{{ env('TURN_SERVER_URL') }}"
                turn_username="{{ env('TURN_SERVER_USERNAME') }}" turn_credential="{{ env('TURN_SERVER_CREDENTIAL') }}" />
        </div>
    </body>
</html>
