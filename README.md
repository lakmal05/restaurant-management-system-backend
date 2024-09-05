// need to check product tag issue . issue is the size and colors all tags retrun

npm run migration:generate -- src/database/migrations/social

npm run migration:run

docker build -t restaurant-management-system .

docker run -p 3000:3000 restaurant-management-system
