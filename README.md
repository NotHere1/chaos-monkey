### Requirements

binaries: `git`, `docker`, `heroku` 
dependencies: remote or local `mongodn`


### Heroku Deployment Commands

1. clones the chaos monkey repo
```sh
git clone git@github.com:NotHere1/chaos-monkey.git
```

2. builds the docker container
```sh
cd chaos-monkey
docker build -t chaos-monkey:latest .
```

3. logins to heroku through heroku cli
```sh
heroku login
```

4. creates the heroku app repository
```sh
heroku apps:create --region [tokyo|us|eu]
```

5. sets heroku config vars
```sh
# default `http://localhost:3000`
heroku config:set EDITOR_URL=[heroku's chaos-notepad url]
```

6. logins to heroku's docker repository
```sh
heroku container:login
```

7. pushs local container to heroku
```sh
heroku container:push worker
```

8. wrech havocs
```sh
heroku ps:scale worker=[# of monkey = worker number * 4]
```

9. checks the editor


### Local Deployment Commands

1. clones the chaos monkey repo
```sh
git clone git@github.com:NotHere1/chaos-monkey.git
```

2. builds the docker container
```sh
cd chaos-monkey
docker build -t chaos-monkey:latest .
```

3. 