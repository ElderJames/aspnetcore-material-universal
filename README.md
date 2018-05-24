# ASP.NET Core 2.1 & Angular 6(+) & Material2 6(+) Advanced Starter - with Server-side prerendering (for Angular SEO)! 

Via [aspnetcore-angular2-universal](https://github.com/MarkPieszak/aspnetcore-angular2-universal) and [angular-material-app](https://github.com/stbui/angular-material-app)

Some component build from [Material2](https://github.com/angular/material2) project.

## Start up

- Use angular-cli to debug the angualr component

   ```bash

   git clone https://github.com/ElderJames/aspnetcore-material-universal.git

   cd aspnetcore-material-universal

   npm install

   npm start

   ```

- Use asp.net core to run with server-side prerendering
   
   ```bash

   dotnet restore

   dotnet run

   ```

- Use docker

   ```bash

     docker build -t aspnetcore-material:v0.1 .

   ```