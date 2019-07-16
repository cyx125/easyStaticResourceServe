<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{title}}</title>
</head>
<body>
{{#each files}}
<div>
    <span>[{{this.mime}}]</span><a href="{{../dir}}/{{this.dir}}">{{this.dir}}</a>
</div>
{{/each}}
</body>
</html>
