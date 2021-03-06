-- how to run more than 1 monkeys locally ?

```
# parallel strategy
# how many core does your machine has ?
# use GNU parallel to dispatch jobs to each of your available cores
# 150% means 1.5 jobs for each core
parallel -j150% node app.js ::: 1 2
```

-- So how can i can 100 or even 1000 monkeys with this ?

I am bounded by the physical capacity of my 4 cores computer. Maxed out at 150% cpu, the most I can do is 6 cpu before OS context switches negate any further performance gains.

But using Heroku's node, it is easy to create 100, or even 2000 monkeys with this code.


```sh
# check me out
# set worker=1000 and you will get 4000 monkeys
# of course you will have to pay for it

heroku ps:scale worker=[# of monkey = worker number * 4]

```

This solve the problem with the bot. But now your bottleneck moves to your editor.
Since the editor is hosted on the browser, the effectiveness of the concurrent editing editor will have a inverse relationship with the number of monkeys its connected to.

No matter how you sees it. The bottleneck will always be on the browser. Not the databases, nor the clients. Just like if the editor is hosted in phone such as IPhone. That's your constraint and there is no point optimize the code beyond the your lowest constraint.

---

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
heroku config:set EDITOR_URL=[heroku's hosted editor url]
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
# if you have the money ~ try -> worker=100 
# that's 400 monkeys vs. your editor
heroku ps:scale worker=[# of monkey = worker number * 4]
```

9. checks the editor

---

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

3. runs the bot against the editor
```sh
# if editor is hosted locally
docker run --network=host -it chaos-monkey:latest

# if editor is hosted remotely in heroku
docker run --network=host -e EDITOR_URL='heroku url' -it chaos-monkey:latest
```
