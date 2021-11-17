react-redux-typescript

## Вывод и фильтрация пользователей https://randomuser.me/api/ API.

1. Используя API, вывел 15 случайных пользователей.
Достаю следующие данные:
- фото;
- first_name + last_name;
- gender;
- дату рождения в формате (yyyy-mm-dd);
- с API достаю только следующе данные (gender,email,dob,name,picture,nat);

Добавил фильтр по полю gender и nationality:
- добавил фильтр gender (all, male, female);
- добавил фильтр nationality (v1.3: AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IR, NO, NL, NZ,
TR, US);
- все фильтры должны применяются только после нажатия на кнопку 'Apply filters';
- фильтры не сбрасываются после перезагрузки страницы.
