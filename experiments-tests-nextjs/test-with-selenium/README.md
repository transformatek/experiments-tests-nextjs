This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


# Getting started with seleniun 

## 1- Inside project: 
RUN 

```
npm install selenium-webdriver
```

Create tests folder inside project

Add test code inside tests folder  

RUN 
```
cd tests
```

RUN 
```
node test-home-page.cjs
```

**Need to install drivers** 

- install geckodriver for firefox

```
curl -L https://github.com/mozilla/geckodriver/releases/download/v0.35.0/geckodriver-v0.35.0-linux64.tar.gz | tar xz -C /usr/local/bin
```

- install chromedriver for chrome

```
curl -L https://storage.googleapis.com/chrome-for-testing-public/131.0.6778.87/linux64/chromedriver-linux64.zip -o chromedriver-linux64.zip && \
unzip chromedriver-linux64.zip && cp chromedriver-linux64/chromedriver /usr/local/bin
```

Or add this commands to **devcontainer** `postCreateCommand` and rebuild container.

Or add it into docker file and rebuild container.




Get this error : 

```
/workspaces/experiments-tests-nextjs/experiments-tests-nextjs/test-with-selenium/node_modules/selenium-webdriver/lib/error.js:521
    let err = new ctor(data.message)
              ^

SessionNotCreatedError: session not created: Chrome failed to start: exited normally.
  (session not created: DevToolsActivePort file doesn't exist)
  (The process started from chrome location /usr/local/bin/chromedriver is no longer running, so ChromeDriver is assuming that Chrome has crashed.)
    at Object.throwDecodedError (/workspaces/experiments-tests-nextjs/experiments-tests-nextjs/test-with-selenium/node_modules/selenium-webdriver/lib/error.js:521:15)
    at parseHttpResponse (/workspaces/experiments-tests-nextjs/experiments-tests-nextjs/test-with-selenium/node_modules/selenium-webdriver/lib/http.js:514:13)
    at Executor.execute (/workspaces/experiments-tests-nextjs/experiments-tests-nextjs/test-with-selenium/node_modules/selenium-webdriver/lib/http.js:446:28)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  remoteStacktrace: '#0 0x62fe56cde34a <unknown>\n' +
    '#1 0x62fe567f46e0 <unknown>\n' +
    '#2 0x62fe5682bdc8 <unknown>\n' +
    '#3 0x62fe56827926 <unknown>\n' +
    '#4 0x62fe568736f6 <unknown>\n' +
    '#5 0x62fe56872d46 <unknown>\n' +
    '#6 0x62fe56867203 <unknown>\n' +
    '#7 0x62fe56835cc0 <unknown>\n' +
    '#8 0x62fe56836c9e <unknown>\n' +
    '#9 0x62fe56cabd3b <unknown>\n' +
    '#10 0x62fe56cafcc2 <unknown>\n' +
    '#11 0x62fe56c98b6c <unknown>\n' +
    '#12 0x62fe56cb0837 <unknown>\n' +
    '#13 0x62fe56c7e10f <unknown>\n' +
    '#14 0x62fe56ccd5a8 <unknown>\n' +
    '#15 0x62fe56ccd770 <unknown>\n' +
    '#16 0x62fe56cdd1c6 <unknown>\n' +
    '#17 0x708872905ea7 start_thread\n'
}

Node.js v18.20.4
```
 we try also to  locate driver by adding this to test file :

```
        const options = new chrome.Options().addArguments('--headless').setBinaryPath("/usr/local/bin/chromedriver");
```
## 2- Separated node project: 

Try js script in separated node project:
 
create folder named `tests-selenium`

RUN 
```
npm init

npm install selenium-webdriver

```

Copy test file inside this project 

RUN 
```
node test-home-page.cjs
```

Get this ERROR :
```
/workspaces/experiments-tests-nextjs/tests-selenium/node_modules/selenium-webdriver/lib/error.js:521
    let err = new ctor(data.message)
              ^

SessionNotCreatedError: session not created: Chrome failed to start: exited normally.
  (session not created: DevToolsActivePort file doesn't exist)
  (The process started from chrome location /usr/local/bin/chromedriver is no longer running, so ChromeDriver is assuming that Chrome has crashed.)
    at Object.throwDecodedError (/workspaces/experiments-tests-nextjs/tests-selenium/node_modules/selenium-webdriver/lib/error.js:521:15)
    at parseHttpResponse (/workspaces/experiments-tests-nextjs/tests-selenium/node_modules/selenium-webdriver/lib/http.js:514:13)
    at Executor.execute (/workspaces/experiments-tests-nextjs/tests-selenium/node_modules/selenium-webdriver/lib/http.js:446:28)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  remoteStacktrace: '#0 0x5ffa3a65334a <unknown>\n' +
    '#1 0x5ffa3a1696e0 <unknown>\n' +
    '#2 0x5ffa3a1a0dc8 <unknown>\n' +
    '#3 0x5ffa3a19c926 <unknown>\n' +
    '#4 0x5ffa3a1e86f6 <unknown>\n' +
    '#5 0x5ffa3a1e7d46 <unknown>\n' +
    '#6 0x5ffa3a1dc203 <unknown>\n' +
    '#7 0x5ffa3a1aacc0 <unknown>\n' +
    '#8 0x5ffa3a1abc9e <unknown>\n' +
    '#9 0x5ffa3a620d3b <unknown>\n' +
    '#10 0x5ffa3a624cc2 <unknown>\n' +
    '#11 0x5ffa3a60db6c <unknown>\n' +
    '#12 0x5ffa3a625837 <unknown>\n' +
    '#13 0x5ffa3a5f310f <unknown>\n' +
    '#14 0x5ffa3a6425a8 <unknown>\n' +
    '#15 0x5ffa3a642770 <unknown>\n' +
    '#16 0x5ffa3a6521c6 <unknown>\n' +
    '#17 0x721c4df7fea7 start_thread\n'
}

Node.js v18.20.4
```


## 3- Python env: 

Add `python3-pip` installation command into docker file And rebuild container.

install selenium
 
RUN 
```
pip install selenium
```

RUN

```
python3 test_homepage.py 
```
Python script error
```
Traceback (most recent call last):
  File "/workspaces/experiments-tests-nextjs/tests-selenium/test_homepage.py", line 6, in <module>
    driver = webdriver.Chrome()
  File "/home/node/.local/lib/python3.9/site-packages/selenium/webdriver/chrome/webdriver.py", line 45, in __init__
    super().__init__(
  File "/home/node/.local/lib/python3.9/site-packages/selenium/webdriver/chromium/webdriver.py", line 66, in __init__
    super().__init__(command_executor=executor, options=options)
  File "/home/node/.local/lib/python3.9/site-packages/selenium/webdriver/remote/webdriver.py", line 241, in __init__
    self.start_session(capabilities)
  File "/home/node/.local/lib/python3.9/site-packages/selenium/webdriver/remote/webdriver.py", line 329, in start_session
    response = self.execute(Command.NEW_SESSION, caps)["value"]
  File "/home/node/.local/lib/python3.9/site-packages/selenium/webdriver/remote/webdriver.py", line 384, in execute
    self.error_handler.check_response(response)
  File "/home/node/.local/lib/python3.9/site-packages/selenium/webdriver/remote/errorhandler.py", line 232, in check_response
    raise exception_class(message, screen, stacktrace)
selenium.common.exceptions.SessionNotCreatedException: Message: session not created: Chrome failed to start: exited normally.
  (session not created: DevToolsActivePort file doesn't exist)
  (The process started from chrome location /home/node/.cache/selenium/chrome/linux64/131.0.6778.108/chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)
Stacktrace:
#0 0x57404158b34a <unknown>
#1 0x5740410a16e0 <unknown>
#2 0x5740410d8dc8 <unknown>
#3 0x5740410d4926 <unknown>
#4 0x5740411206f6 <unknown>
#5 0x57404111fd46 <unknown>
#6 0x574041114203 <unknown>
#7 0x5740410e2cc0 <unknown>
#8 0x5740410e3c9e <unknown>
#9 0x574041558d3b <unknown>
#10 0x57404155ccc2 <unknown>
#11 0x574041545b6c <unknown>
#12 0x57404155d837 <unknown>
#13 0x57404152b10f <unknown>
#14 0x57404157a5a8 <unknown>
#15 0x57404157a770 <unknown>
#16 0x57404158a1c6 <unknown>
#17 0x716cde2e1ea7 start_thread
```



## Useful links


- [https://www.zenrows.com/blog/selenium-nodejs](https://www.zenrows.com/blog/selenium-nodejs)

- [https://github.com/SeleniumHQ/selenium/tree/trunk/javascript/node/selenium-webdriver/example](https://github.com/SeleniumHQ/selenium/tree/trunk/javascript/node/selenium-webdriver/example)