# DB-GPT Website

[DB-GPT Website](http://dbgpt.site) 

## How to develop
```commandline

# clone current project firstly!
# install docusaurus dependencies, generate node_modules folder.
sudo yarn install

# build project, generate .docusaurus folder.
sudo npm run build 

# launch project.
npm run serve
```

The default service starts on port `3000`, visit `localhost:3000`

## Quick Start

```commandline
docker build -t dbgptweb .
docker run --restart=unless-stopped -p 3000:3000 dbgptweb
```
