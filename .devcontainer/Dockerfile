FROM mcr.microsoft.com/devcontainers/typescript-node:1-18-bullseye

RUN sudo apt update && sudo apt install -y libnss3

RUN curl -L https://storage.googleapis.com/chrome-for-testing-public/131.0.6778.87/linux64/chromedriver-linux64.zip -o chromedriver-linux64.zip && unzip -oq chromedriver-linux64.zip && sudo cp chromedriver-linux64/chromedriver /usr/local/bin 

RUN curl -L https://github.com/mozilla/geckodriver/releases/download/v0.35.0/geckodriver-v0.35.0-linux64.tar.gz | sudo tar xz -C /usr/local/bin 

