# node-api-w-mysql
A api integrated with MySQL DB

```npm init -y```

```npm install express mysql dotenv cors body-parser```

```npm install nodemon --save-dev```


```create database dbApiCarros;```
```use dbApiCarros;```

```mysql
create table carros (
codigo int primary key auto_increment,
modelo varchar(30),
placa varchar(7)
);
```

```insert into carros (modelo, placa) values ('Toyota Corolla', 'EMO4953')```

```
ALTER USER 'seu_usuario'@'localhost' IDENTIFIED WITH mysql_native_password BY 'sua_senha';
```

