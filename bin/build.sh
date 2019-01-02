bundle exec jekyll build
rm -rf _deploy/huynvk.github.io/*
cp -a ./_site/. ./_deploy/huynvk.github.io/