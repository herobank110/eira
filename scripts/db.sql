# Run this as root

create user eira@localhost identified by 'aaaaaa123';
create database eira;
use eira;
grant all on eira.* to eira@localhost;

create table landmark (
    id int not null primary key auto_increment,
    name varchar(120) not null,
    lat float not null,
    lng float not null,
    thumb varchar(255) not null,
    desc_ varchar(3000) not null
) engine InnoDB;

insert into landmark (name, lat, lng, thumb, desc_)
values 
    (
        "Cardiff Bay",
        51.4539,
        -3.1694,
        "res/bay.jpg",
        "Cardiff Bay iis a lively waterfront that wraps around the edge of a beautiful freshwater lake in Cardiff, Wales. Cardiff Bay is a popular tourist and local destination that is linked with entertainment, leisure, and enjoyment such as going on speed boats. There are many festivals and funfairs that take place on the bay. There are also a lot of dine in restaurants where you can get a good view whilst enjoying your food, on the bay there is a red dragon centre where you can do many activities such a bowling or watching a movie Fun fact - Cardiff Bay is the largest waterfront redevelopment project in Europe"
    ),
    (
        "Roath Park",
        51.5077,
        -3.1739,
        "res/roath.jpg",
        "Roath Park is a popular park in Cardiff, Wales, owned by Cardiff County Council and managed by the Parks Section. It is situated in a wonderful location in the heart of the capital city. The park is around 130 acres (1.3 miles) big with many facilities such as boat riding, visiting the green house and feeding the ducks. It gives a traditional Victorian feel. The main attraction of this park is the lighthouse which stands out at night as it lights up the park. This park also contains a few cafes where people can take a break whilst walking around. Fun fact - Roath park was opened in 1894"
    ),
    (
        "Cardiff Castle",
        51.4822,
        -3.1812,
        "res/castle.jpg",
        "Cardiff Castle is a mediaeval castle and Victorian Gothic revival mansion in Cardiff, Wales. It is one of the country's most important heritage attractions and a major tourist attraction. Located in the centre of Cardiff, the castle is surrounded by magnificent parks, such as Beaut park, you can visit the castle for a guided tour and also grab something to eat. You can also get some gifts to take back home for your loved ones. During christmas time the castle is opened daily to the public as there are some christmas stalls and also ice skating! Fun fact - There's a fort on the side which has been there for almost 2000 years."
    ),
    (
        "St David's Shopping Centre",
        51.4807,
        -3.1752,
        "res/shop.jpg",
        "St David's is one of the most famous shopping centres in Cardiff, Wales. St David's is the third busiest shopping centre in the United Kingdom, located in the Hayes neighbourhood of the southern city centre. St David's shopping centre consists of a variety of high street and low street/ affordable stores. There's a built in car park so you can park your car and shop immediately. Fun fact - There are 203 stores to shop around in St David's shopping centre"
    ),
    (
        "Principality Stadium",
        51.4782,
        -3.1826,
        "res/principality.jpg",
        "Principality Stadium is the Welsh national stadium. It is the home of the Wales national rugby union team and has also hosted games for the Wales national football team. It has a capacity of 74,500 and was built in 1999. Many events take place in this stadium such as concerts. Fun fact - It is one out of a few which has a convertible roof"
    ),
    (
        "Wales Millennium Stadium",
        51.4648,
        -3.1632,
        "res/millennium.jpg",
        "Wales Millennium centre is an arts centre in Cardiff Bay Area of Cardiff, Wales. The location is approximately 4.7 acres in size. One enormous theatre and two smaller halls with shops, bars, and restaurants the Centre is home to the national orchestra and opera company. Fun fact - established its reputation as one of the world's most iconic arts and cultural destinations"
    );
