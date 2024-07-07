npm run deploy;
git checkout gh-pages;
git pull origin gh-pages;
git push origin deploy --force;
git checkout -;