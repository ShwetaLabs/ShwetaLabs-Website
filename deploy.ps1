npm run deploy;
git checkout deploy;
git pull origin gh-pages --force;
git push origin deploy --force;
git checkout -;