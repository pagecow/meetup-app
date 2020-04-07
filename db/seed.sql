create table meetup_url (
    url_id serial primary key,
    meetup_url varchar
)

insert into meetup_url (meetup_url)
    values('reactjs-dallas')