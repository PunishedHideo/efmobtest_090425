import { server } from './server.js';

server();

/*
Доброго времени суток, сделал все как надо по тестовому
Протестировал вручную, все функции и эндпоинты должны работать исправно
Все эндпоинты реализованы, базовая обработка ошибок в эндпоинтах также присутствует

Сделано на стэке: express.js, typescript, mongodb, typeorm

Чего не стал реализовывать: сложные типы TS - нахожусь в познании TS и без ментора могу 
допустить оплошность, так что не удивляйтесь когда в некоторых местах увидите any

!!!
Если нужно протестировать - Cors работает только с одного localhost порта на другой
Для запуска сначала npm run build, после npm run start - компилит и запускает сервер
Можно запустить два сервера и с имитировать работу фронта и бэка и с одного отправлять реквесты на другой
!!!

Удачи!
*/
