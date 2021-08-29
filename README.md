# Frameworks:
- webdriverIO (v7)
- cucumber (v7)

# Features:
- Supports Page Object Model
- Compatible with Nodejs Versions 10.x to 14.x
- Contains sample Scenarios written in Declarative style of BDD
- Supports Data externalisation
- Integrated with [eslint](https://www.npmjs.com/package/eslint) for identifying and reporting on code patterns.
- Integrated with [cucumber-html-reporter](https://www.npmjs.com/package/cucumber-html-reporter) for intuitive & detailed HTML reporting
- Embeds screenshots on failure
- Integrated with [wdio-cucumber-parallel-execution](https://www.npmjs.com/package/wdio-cucumber-parallel-execution) module for parallel execution


# Installation

```
npm install
```


# Running the Scenarios without Docker

```
npm run test
```

# Running the Scenarios in docker
Make sure docker is up and running

Building the docker image: ```docker build -t <docker_image_name> .```

Example: ```docker build -t calculator .```

Run test with docker image: ```docker run -it <docker_image_name>```

Example: ```docker run -it calculator```

# License

(The MIT License)

Copyright (c) 2021 Jason Pham pqdhung@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.