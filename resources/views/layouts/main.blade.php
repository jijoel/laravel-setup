<!doctype html>
<html lang="{{ app()->getLocale() }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>

    <link href='https://fonts.googleapis.com/css?family=Material+Icons' rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="{{ mix('css/app.css') }}">
    <link rel="icon" href="/favicon.png" sizes="32x32" />

    @yield('css')

  </head>
  <body>
    <div id="app">

        @yield('content')

    </div>
    @include('layouts.footer')

    @if(File::exists(public_path('js/manifest.js')))
      <script src="{{ mix('js/manifest.js') }}"></script>
      <script src="{{ mix('js/vendor.js') }}"></script>
    @endif
    <script src="{{ mix('js/app.js') }}"></script>

    @yield('js')

  </body>
</html>
