#!/bin/bash

# 1. Заходимо в папку lantern/frontend
cd lantern/frontend

# 2. Виконуємо команду npm i
npm i

# 3. Виходимо до папки lantern
cd ..

# 4. Виконуємо команду git pull
git pull

# 5. Запускаємо команду docker-compose build
sudo docker-compose up -d --build
