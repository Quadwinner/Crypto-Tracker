create table users(
    user_id int unique not null generated always as identity,
    username varchar(30) unique not null,
    password varchar(30) not null,
    email varchar(30) not null,
    primary key(user_id)
);

create table currencies(
    currency_id int unique not null generated always as identity,
    symbol varchar(15) unique not null,
    primary key(currency_id)
);

create table currency_links(
    currency_link_id int unique not null generated always as identity,
    user_id int not null,
    currency_id int not null,
    primary key(currency_link_id),
    foreign key(user_id) references users(user_id),
    foreign key(currency_id) references currencies(currency_id)
);