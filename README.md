# web_laboratories
Доступ к API осуществляется по адресу (baseURL) localhost:3000/history
GET - запросы:
  1. /       запрос всего сиска
  2. /{id}   запрос списка с конкретным id

POST - запросы
  1. /       занесение в БД данных (поля в заголовке: id[int], master[char(20)], state[char(20)], cpuusage[int], config[int], configdate[DATEIME])
