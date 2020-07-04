create table products(
id serial primary key,
name varchar(25),
price integer,
img text
);
insert into products(
name, price, img
) values(
'Facial Recogonition', 15000, 'https://ichef.bbci.co.uk/news/976/cpsprodpb/10C9C/production/_110246786_facialrecognition3.gif'
);
insert into products(
name, price, img
) values(
'Motion Senored Camera', 4300, 'https://www.nytechco.com/wp-content/uploads/2020/05/Hikvision-ds-k1t671tm-3xf-_K1T671TM-3XF-front-600x335.png'
);
insert into products(
name, price, img
) values(
'Schrodinger(s) Cat', 6600, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsUWlSH8Jb2CzXlOfQFKv207gFianAWEUnjg&usqp=CAU'
);