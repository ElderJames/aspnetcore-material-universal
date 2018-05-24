# Sample contents of Dockerfile
# Stage 1
FROM zeekozhu/aspnetcore-build-yarn:2.1-alpine AS builder
WORKDIR /source

# caches restore result by copying csproj file separately
COPY *.csproj .
COPY *.json ./
COPY yarn.lock .

RUN dotnet restore && yarn

# copies the rest of your code
COPY . .
RUN dotnet publish --output /app/ --configuration Release

# Stage 2
FROM zeekozhu/aspnetcore-node:2.1-alpine
WORKDIR /app
COPY --from=builder /app .
ENTRYPOINT ["dotnet", "AspNetCoreMaterialUniversal.dll"]