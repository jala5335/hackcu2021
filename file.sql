CREATE DATABASE recipeasy;
USE recipeasy;

CREATE TABLE public.users (
    id serial NOT NULL,
    id_session int8 NULL,
    t_password VARCHAR(128) NULL,
    t_name_user VARCHAR(64) NULL,
    b_enabled bool NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id)
);
CREATE UNIQUE INDEX users_id_idx ON public.users USING btree (id);
