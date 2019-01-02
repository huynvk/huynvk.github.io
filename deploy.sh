bundle exec jekyll build
rm -rf _deploy/huynvk.github.io/*
cp _config.yml _deploy/huynvk.github.io/
cp CNAME _deploy/huynvk.github.io/
cp README.md _deploy/huynvk.github.io/
cp -a _site/* _deploy/huynvk.github.io/